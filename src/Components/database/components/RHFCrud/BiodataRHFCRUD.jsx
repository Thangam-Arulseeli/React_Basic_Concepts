import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { biodataSchema } from '../ValidationSchema' //"./validation/biodataSchema";
import { useBiodata } from  '../RHFCrud/Context/BiodataContext' //'../RHFCrud/Context/BiodataContext' //"/context/BiodataContext";

import Pagination from './Components/Pagination' //"/components/Pagination";
import SearchBox from './Components/SearchBox'  //"./components/SearchBox";

function BiodataRHFCRUD() {
  const { state, dispatch, addBiodata, updateBiodata, deleteBiodata } = useBiodata();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(biodataSchema)
  });

  useEffect(() => {
    if (state.editData) {
      reset(state.editData);
    }
  }, [state.editData, reset]);

  const onSubmit = (data) => {
    state.editData
      ? updateBiodata(state.editData.id, data)
      : addBiodata(data);
    reset();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>BIODATA CRUD (Pagination + Search)</h2>

      {/* SEARCH */}
      <SearchBox
        value={state.search}
        onChange={(value) =>
          dispatch({ type: "SET_SEARCH", payload: value })
        }
      />

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>

        <input type="number" {...register("age")} placeholder="Age" />
        <p>{errors.age?.message}</p>

        <input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input {...register("phone")} placeholder="Phone" />
        <p>{errors.phone?.message}</p>

        <button type="submit">
          {state.editData ? "Update" : "Save"}
        </button>
      </form>

      <hr />

      {/* LIST */}
      {state.list.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.email}</p>
          <button onClick={() => dispatch({ type: "SET_EDIT", payload: item })}>
            Edit
          </button>
          <button onClick={() => deleteBiodata(item.id)}>
            Delete
          </button>
        </div>
      ))}

      {/* PAGINATION */}
      <Pagination
        page={state.page}
        limit={state.limit}
        total={state.totalCount}
        onPageChange={(p) =>
          dispatch({ type: "SET_PAGE", payload: p })
        }
      />
    </div>  ); }

export default BiodataRHFCRUD;

