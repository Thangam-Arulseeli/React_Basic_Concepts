import { createContext, useContext, useEffect, useState } from "react";
//import api from "../api";
import api from '../../FormikCRUD/ApiFormik';

const BiodataContext = createContext();

export const BiodataProvider = ({ children }) => {
  const [biodataList, setBiodataList] = useState([]);
  const [editData, setEditData] = useState(null);

  /* ===== READ ===== */
  const fetchBiodata = async () => {
    const res = await api.get("/biodata");
    setBiodataList(res.data);
  };

  /* ===== CREATE ===== */
  const addBiodata = async (data) => {
    await api.post("/biodata", data);
    fetchBiodata();
  };

  /* ===== UPDATE ===== */
  const updateBiodata = async (id, data) => {
    await api.put(`/biodata/${id}`, data);
    fetchBiodata();
    setEditData(null);
  };

  /* ===== DELETE ===== */
  const deleteBiodata = async (id) => {
    await api.delete(`/biodata/${id}`);
    fetchBiodata();
  };

  useEffect(() => {
    fetchBiodata();
  }, []);

  return (
    <BiodataContext.Provider
      value={{
        biodataList,
        addBiodata,
        updateBiodata,
        deleteBiodata,
        editData,
        setEditData
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};

/* ===== CUSTOM HOOK ===== */
export const useBiodata = () => useContext(BiodataContext);

