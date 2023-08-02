import React, { useContext} from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionsTutor from "../TutorsTable/ActionsTutor";
import { DataContext } from "../../../../../context/dataContext";
import { Typography } from "@mui/material";


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
export default function TutorTable({email}) {
    const userEmail=email;
  const { alltutors} = useContext(DataContext);
  const matchTutor = alltutors.find(({ email }) => email === userEmail);
  console.log(matchTutor);
  const getDateOfCreation = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    const createdMonth = date_time.toLocaleString("default", { month: "long" });
    const createdDate = date_time.getDate();
    const createdYear = date_time.getFullYear();
    const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
    return finalDate;
  };
    let rows =[{
        slno: 1,
        MongooseId: matchTutor._id||0,
        name:matchTutor.name||0,
        email: matchTutor.email||0,
        contactno: matchTutor.contactno||0,
        gender: matchTutor.gender||0,
        createdAt: getDateOfCreation(matchTutor.createdAt)||0,
        city: matchTutor.city||0,
  
      }];
 
//   const rows = Object.values(matchTutor).map((tutor, i) => {
//     let count = i + 1;
//     return {
//       slno: count,
//       MongooseId: tutor._id,
//       name:tutor.name,
//       email: tutor.email,
//       contactno: tutor.contactno,
//       gender: tutor.gender,
//       createdAt: getDateOfCreation(tutor.createdAt),
//       city: tutor.city,

//     };
//   });
  return (
    <>
    {(matchTutor.length===0)?<>
    <Typography variant="p"> No Result Found</Typography>
    </>:<>
    <div style={{ height: 200, width: "100%" }}>
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
    </>}
     
    </>
   
  );
}
