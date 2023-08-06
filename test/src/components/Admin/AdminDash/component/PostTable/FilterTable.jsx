import React, { useContext, useState } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { DataContext } from "../../../../../context/dataContext";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { DataGrid } from "@mui/x-data-grid";
import ActionsPost from "./ActionsPost";

const columns = [
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
    renderCell: (params) => <ActionsPost rowId={params.id} />,
  },
];

const FilterTable = () => {
  const [filterCity, setFilterCity] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterStandard, setFilterstandard] = useState("");
  const [finalfilteredpost,setFinalFilteredpost]=useState({});
  const { allposts, city, standard, subjects } = useContext(DataContext);


  const getDateOfCreation = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time = new Date(modifiedDate);
    const createdMonth = date_time.toLocaleString("default", { month: "long" });
    const createdDate = date_time.getDate();

    const createdYear = date_time.getFullYear();
    const finalDate = `${createdDate} - ${createdMonth} - ${createdYear}`;
    return finalDate;
  };
 
  const searchResult = () => {
    let filteredpost =allposts;
    if (!(filterStandard === "")) {
        filteredpost=Object.values(filteredpost).filter((post) => {
        return post.standard === filterStandard;
      })
    }
    if (!(filterCity === "")) {
      filteredpost = Object.values(filteredpost).filter((post) => {
        return post.city === filterCity;
      });
    }
    if (!(filterSubject === "")) {
      filteredpost = Object.values(filteredpost).filter((post) => {
        return post.subject === filterSubject;
      });
    }
    console.log(filteredpost);
    return filteredpost;
    // const count=filteredpost.length;
  };
  const handleSearch=()=>{
    setFinalFilteredpost(searchResult());
  }
  const rows = Object.values(finalfilteredpost).map((post, i) => {
    let verifyStatus = post.verified ? "✓" : "x";
    let count = i + 1;
    return {
      slno: count,
      MongooseId: post._id,
      name: post.name,
      email: post.email,
      contactno: post.contactno,
      subject: post.subject,
      standard: post.standard,
      verified: verifyStatus,
      createdAt: getDateOfCreation(post.createdAt),
      city: post.city,
    };
  });
  return (
    <>
      <Grid container>
        <Grid
          item
          lg={12}
          style={{
            background: "rgb(11, 102, 106,.3)",
            padding: 15,
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Filter the table</Typography>
        </Grid>
        <Grid item lg={12} md={6} xs={12} style={{ marginTop: 10 }}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Standard
            </InputLabel>
            <Select
              size="small"
              required
              onChange={(e) => {
                setFilterstandard(e.target.value);
              }}
              value={filterStandard}
              style={{
                width: "100%",
                margin: 10,
              }}
            >
              <MenuItem value="">None</MenuItem>
              {standard.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              City
            </InputLabel>
            <Select
              size="small"
              required
              onChange={(e) => {
                setFilterCity(e.target.value);
              }}
              value={filterCity}
              style={{
                width: "100%",
                margin: 10,
              }}
            >
              <MenuItem value="">None</MenuItem>
              {city.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Subjects
            </InputLabel>
            <Select
              size="small"
              required
              onChange={(e) => {
                setFilterSubject(e.target.value);
              }}
              value={filterSubject}
              style={{
                width: "100%",
                margin: 10,
              }}
            >
              <MenuItem value="">None</MenuItem>
              {subjects.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            style={{ marginTop: 20, marginLeft: 20,background:'#35A29F'}}
            onClick={handleSearch}
            
          >
            <SearchRoundedIcon fontSize="small" />
          </Button>
        </Grid>
        <Grid item lg={12} xs={12} style={{marginTop:5,marginBottom:10}}>
          {
            (finalfilteredpost.length>0)?<>
            <Typography variant="p">We have found {finalfilteredpost.length} numbers of result</Typography>
            </>:<><Typography variant="p">We have found 0 Result</Typography></>
          }
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <div style={{ marginleft: 0, height: 300, width: "100%" }}>
            <DataGrid
              style={{
                marginLeft: 0,
                width: "100%",
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
        </Grid>
      </Grid>
    </>
  );
};

export default FilterTable;
