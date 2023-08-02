import React, { useContext} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataContext } from "../../../../../context/dataContext";
import ActionsTutor from "./ActionsTutor";


const columns=[
  { field: "slno", headerName: "Sl. No", width: 50 },
  { field: "MongooseId", headerName: "Id", width: 200 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "contactno",
    headerName: "Contact No",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 80,
    sortable: false,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
  },
  {
    field: "city",
    headerName: "City",
    sortable: false,
    width: 90,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    renderCell:params=> <ActionsTutor rowId={params.id}/>
  }
]
export default function DataTutorTable() {
  const { alltutors} = useContext(DataContext);
  const getDateOfCreation = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    const createdMonth = date_time.toLocaleString("default", { month: "long" });
    const createdDate = date_time.getDate();

    const createdYear = date_time.getFullYear();
    const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
    return finalDate;
  };
  const rows = Object.values(alltutors).map((tutor, i) => {
    let count = i + 1;
    return {
      slno: count,
      MongooseId: tutor._id,
      name:tutor.name,
      email: tutor.email,
      contactno: tutor.contactno,
      gender: tutor.gender,
      createdAt: getDateOfCreation(tutor.createdAt),
      city: tutor.city,

    };
  });
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        sx={{ m: 2 }}
        style={{
          border: "1px solid #0B666A",
        }}
        columns={columns}
        rows={rows}
        getRowId={(row) => row.MongooseId}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
      />
    </div>
  );
}
