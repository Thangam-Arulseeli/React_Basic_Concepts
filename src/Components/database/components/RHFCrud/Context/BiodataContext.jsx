import { createContext, useContext, useEffect, useReducer } from "react";
import api from '../../../ApiAxios' //'src/components/database/ApiAxios' //  "../api";
import { biodataReducer, initialState } from '../Reducer/biodataReducer'   //'/src/components/database/components/RHFCrud/Reducer/biodataReducer'    // "/reducer/biodataReducer";

const BiodataContext = createContext();

export const BiodataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(biodataReducer, initialState);

  const fetchData = async () => {
    const res = await api.get("/biodata", {
      params: {
        _page: state.page,
        _limit: state.limit,
        q: state.search
      }
    });

    dispatch({
      type: "SET_DATA",
      payload: {
        data: res.data,
        total: Number(res.headers["x-total-count"])
      }
    });
  };

  const addBiodata = async (data) => {
    await api.post("/biodata", data);
    fetchData();
  };

  const updateBiodata = async (id, data) => {
    await api.put(`/biodata/${id}`, data);
    fetchData();
    dispatch({ type: "CLEAR_EDIT" });
  };

  const deleteBiodata = async (id) => {
    await api.delete(`/biodata/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [state.page, state.search]);

  return (
    <BiodataContext.Provider
      value={{ state, dispatch, addBiodata, updateBiodata, deleteBiodata }}
    >
      {children}
    </BiodataContext.Provider>
  );
};

export const useBiodata = () => useContext(BiodataContext);




//export default BiodataContext; 