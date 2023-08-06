import React, { useState } from "react";
import { postContext } from "../../context/postContext";
import { DataContext } from "../../../../../context/dataContext";
import {
  Button,
  Grid,
  FormControl,
  Select,
  InputLabel,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditDetailsPost = () => {
  const navigate = useNavigate();
  const { rowId } = React.useContext(postContext);
  const { allposts, city, standards, subjects } = React.useContext(DataContext);
  const matchPost = allposts.find(({ _id }) => _id === rowId);
  const [posttoEdit, setPosttoEdit] = useState(matchPost);
  const handleUpdation = async () => {
    try {
      const {
        subject,
        city,
        standards,
        prefmode,
        email,
        contactno,
        name,
        preftime,
        gender,
        verified,
      } = posttoEdit;
      const response = await axios.put("/updatepost", {
        id: rowId,
        subject,
        city,
        standards,
        prefmode,
        email,
        contactno,
        name,
        preftime,
        gender,
        verified,
      });
      console.log(response);
      if (response.data.status === "ok") {
        toast.success(response.data.message);

        setTimeout(() => {
          navigate(0);
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Error");
    }
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid
          item
          lg={12}
          xs={12}
          md={12}
          style={{ padding: 20, marginTop: 20 }}
        >
          <Typography variant="p"> User Details</Typography>
          <br />
          <TextField
            style={{
              margin: "10px",
              width: "80%",
            }}
            size="small"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={posttoEdit.name}
            onChange={(e) =>
              setPosttoEdit({ ...posttoEdit, name: e.target.value })
            }
          />

          <TextField
            style={{
              margin: "10px",
              width: "80%",
            }}
            required
            size="small"
            id="outlined-basic"
            label="Email"
            disabled
            variant="outlined"
            value={posttoEdit.email}
            onChange={(e) =>
              setPosttoEdit({ ...posttoEdit, email: e.target.value })
            }
          />
          <TextField
            style={{
              margin: "10px",
              width: "80%",
            }}
            size="small"
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            value={posttoEdit.contactno}
            onChange={(e) =>
              setPosttoEdit({ ...posttoEdit, contactno: e.target.value })
            }
          />

          <FormControl style={{ marginTop: 10, width: "85%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Gender
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              size="small"
              value={posttoEdit.gender}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, gender: e.target.value })
              }
              style={{
                margin: 10,
              }}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ marginTop: 10, width: "85%" }}>
            <InputLabel id="demo-simple-select-standard-label">City</InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              size="small"
              value={posttoEdit.city}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, city: e.target.value })
              }
              style={{
                margin: 10,
              }}
            >
              {city.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          lg={12}
          xs={12}
          md={12}
          style={{
            padding: 30,
            "box-shadow": "rgba(149, 157, 165, 0.1) 0px 8px 24px",
            borderRadius: 10,
          }}
        >
          <Typography variant="p">Post Details</Typography>
          <br />
          <FormControl style={{ width: "85%",marginTop:20 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Standard
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              size="small"
              value={posttoEdit.standard}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, standard: e.target.value })
              }
              style={{
                margin: 10,
              }}
            >
              {standards.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ width: "85%",marginTop:10 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Subject
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              size="small"
              id="demo-simple-select-standard"
              value={posttoEdit.subject}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, subject: e.target.value })
              }
              style={{
                margin: 10,
              }}
            >
              {subjects.map((e) => (
                <MenuItem value={e}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200, }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Preferred Mode
            </InputLabel>
            <Select
              size="small"
              required
              value={posttoEdit.prefmode}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, prefmode: e.target.value })
              }
              style={{
                width: "100%",
                margin: 10,
              }}
            >
              <MenuItem value={"athome"}>At Home</MenuItem>
              <MenuItem value={"atcoaching"}>At Instituition</MenuItem>
              <MenuItem value={"online"}>Online</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Preferred Timing
            </InputLabel>
            <Select
              size="small"
              required
              value={posttoEdit.preftime}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, preftime: e.target.value })
              }
              style={{
                width: "100%",
                margin: 10,
              }}
            >
              <MenuItem value={"atmorning"}>At Morning</MenuItem>
              <MenuItem value={"atevening"}>At Evening</MenuItem>

              <MenuItem value={"both"}>Both</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={12} xs={12} md={12} style={{ padding: 20 }}>
          <Typography variant="p" style={{ marginBottom: 10 }}>
            Others
          </Typography>
          <br />
          <FormControl style={{ width: "85%",marginTop:20}}>
            <InputLabel id="demo-simple-select-standard-label">
              Verification Status
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              size="small"
              value={posttoEdit.verified}
              onChange={(e) =>
                setPosttoEdit({ ...posttoEdit, verified: e.target.value })
              }
              style={{
                margin: 10,
              }}
            >
              <MenuItem value="true">true</MenuItem>
              <MenuItem value="false">false</MenuItem>
            </Select>
          </FormControl>

          <Button
            style={{
              width: "50%",
              margin: 20,
              background: "#0B666A",
            }}
            variant="contained"
            size="medium"
            type="submit"
            onClick={handleUpdation}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EditDetailsPost;
