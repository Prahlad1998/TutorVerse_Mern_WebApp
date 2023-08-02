import React, { useContext} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataContext } from "../../../../../context/dataContext";
import Actions from "../StudentsTable/Actions";

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
  { field: "postnum", headerName: "Num of Post", width: 70 },
  {

    field: "actions",
    headerName: "Actions",
    type: "actions",
    width:130,
    renderCell:params=> <Actions rowId={params.id}/>
  }
]
export default function StudentTable({email}) {
console.log(email);
const userEmail=email;
  const { allstudents,allposts} = useContext(DataContext);
  const matchStudent = allstudents.find(({ email }) => email === userEmail);

  const getDateOfCreation = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    const createdMonth = date_time.toLocaleString("default", { month: "long" });
    const createdDate = date_time.getDate();
    const createdYear = date_time.getFullYear();
    const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
    return finalDate;
  };
  const findNumOfPosts=(email)=>{
    let count=0;
    Object.values(allposts).map((e)=>{
      
      if(e.email===email){
        count++;
      }
      return count;
    })
    return count;

  }
  const rows =[{
      slno: 1,
      MongooseId: matchStudent._id,
      name: matchStudent.name,
      email: matchStudent.email,
      postnum:findNumOfPosts(matchStudent.email),
      contactno: matchStudent.contactno,
      gender: matchStudent.gender,
      createdAt: getDateOfCreation(matchStudent.createdAt),
      city: matchStudent.city,
    }];

  return (
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
  );
}
