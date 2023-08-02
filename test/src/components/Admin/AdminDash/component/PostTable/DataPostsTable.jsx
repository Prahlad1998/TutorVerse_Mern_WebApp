import React, { useContext} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataContext } from "../../../../../context/dataContext";
import ActionsPost from "./ActionsPost";

const columns=[
  { field: "slno", headerName: "Sl. No", width: 50 },
  { field: "MongooseId", headerName: "Id", width: 200 },
  {
    field: "subject",
    headerName: "Subject",
    sortable: false,
    width: 100,
  },
  {
    field: "standard",
    headerName: "Standard",
    width: 80,
    sortable: false,
  },
  {
    field: "city",
    headerName: "City",
    sortable: false,
    width: 90,
  },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
  },
  {
    field: "verified",
    headerName: "Status",
    width: 80,
    sortable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    renderCell:params=> <ActionsPost rowId={params.id}/>
  }
]
export default function DataPostsTable() {
  const { allposts} = useContext(DataContext);
  const getDateOfCreation = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    const createdMonth = date_time.toLocaleString("default", { month: "long" });
    const createdDate = date_time.getDate();

    const createdYear = date_time.getFullYear();
    const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
    return finalDate;
  };
  const rows = Object.values(allposts).map((post, i) => {
    let verifyStatus=post.verified?'✓'
:'x'  ;  
let count = i + 1;
    return {
      slno: count,
      MongooseId: post._id,
      name:post.name,
      email: post.email,
      contactno: post.contactno,
      subject:post.subject,
      standard:post.standard,
      verified: verifyStatus,
      createdAt: getDateOfCreation(post.createdAt),
      city: post.city,
    };
  });
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        style={{
            marginLeft:0,
            width:'100%',
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
