import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Grid,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DataContext } from "../../../../../context/dataContext";

const AddNewPost = () => {
  const navigate = useNavigate();
  const {allposts,allstudents}=useContext(DataContext);
  const [isRegister, setIsRegister] = useState(true);
  const [isCheckOver,setIsCheckOver]=useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [registerUserForPost,setRegisterUserForPost]=useState({});

  const [postData,setPostData]=useState({
    subject:'',
    standard:'',
    prefmode:'',
    preflang:'',
    preftime:''
  })
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    contactno: "",
    gender: "",
    school: "",
    medium: "",
    board: "",
    standard: "",
    stream: "",
    locality: "",
    pin: "",
    address: "",
    otp: "",
    city: "",
    createdBy: "byadmin",
  });
  const registerUser = async (e) => {
    e.preventDefault();
    const {
      name,
      password,
      contactno,
      gender,
      school,
      medium,
      board,
      standard,
      stream,
      locality,
      pin,
      city,
      address,
      createdBy,
    } = data;
    console.log(data);
    if (name === "" || password === "" || contactno === "") {
      return toast.error("Please filled the details");
    }
    if (school === "" || medium === "" || board === "" || standard === "") {
      return toast.error("Please filled the details");
    }
    if (city === "" || address === "" || locality === "" || pin === "") {
      return toast.error("Please filled the details");
    }
    try {
      const responds = await axios.post("/createnewstudent", {
        name,
        email:userEmail,
        password,
        contactno,
        gender,
        school,
        medium,
        board,
        standard,
        stream,
        locality,
        pin,
        address,
        city,
        createdBy,
      });
      console.log(responds);
      console.log(responds.data.data);
      if (!(responds.data.status === "ok")) {
       
        
        toast.error(responds.data.message);
      } else {
        setRegisterUserForPost(responds.data.data);
        toast.success(responds.data.message);
        setIsRegister(true);
      }
    } catch (err) {
      toast.error(err.message);
      console.log("Something Error !", err);
    }
  };
  const City = ["Guwahati", "Kaziranga", "Bokakhat", "Kaliabor", "Tezpur"];
  const handleCheckEmail=()=>{
    if(userEmail===''){
      return toast.error("Email adrress can not empty")
    }
    const userfromemail=allstudents.find(({ email }) => email ===userEmail);
    console.log()
    if(userfromemail){
      setIsRegister(true);
      setRegisterUserForPost(userfromemail);
    }else{
      setIsRegister(false);
    }
    setIsCheckOver(true);
  }

  const handleCreate=async(e)=>{
    // const userfromemail=allstudents.find(({ email }) => email ===userEmail);
    // setRegisterUserForPost(userfromemail);
    console.log(registerUserForPost);

    if(postData.subject===''|| postData.standard===''|| postData.prefmode===''|| postData.preftime===''){
        return toast.error("Please fill the required fill",{
            style: {
                borderRadius: "10px",
                background: "#001C30",
                color: "#ffffff",
              },
        });
    }
const {subject,
    standard,
    prefmode,
    preflang,
    postid,
    preftime}=postData;
       try {
        const response=await axios.post("/createpost",{
            subject,
            standard,
            prefmode,
            preflang,
            city:registerUserForPost.city,
            email:userEmail,
            contactno:registerUserForPost.contactno,
            postid,
            name:registerUserForPost.name,
            preftime,
            gender:registerUserForPost.gender,
            createdBy:'byadmin'
        });
        console.log(response);
        if(!(response.data.status==="ok")){
            toast.error("Can not create the post");
        }else{
            setPostData({
                subject:'',
                standard:'',
                prefmode:'',
                preftime:'',
            })
            
            toast.success(response.data.message,{
                style: {
                    borderRadius: "10px",
                    background: "#001C30",
                    color: "#DAFFFB",
                  },
            });
            
            setTimeout(() => {
              navigate(-1);
            }, 2000);
            setTimeout(() => {
              navigate(0);
            }, 3000);   
        }
       } catch (error) {
        toast.error(error.message);
       }
    }
  
  return (
    <>
      <Grid container spacing={2} style={{ marginBottom: 10 }}>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">Type the Student's email</Typography>
          <Stack direction="row">
            <TextField
              style={{
                margin: "10px",
                width: "100%",
              }}
              size="small"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={userEmail}
              onChange={(e) => {
                setIsCheckOver(false);
                setUserEmail(e.target.value)}}
            />
            <Button style={{ color: "#0B666A" }} onClick={handleCheckEmail}>
              <ArrowForwardIosIcon fontSize="large" />
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {isCheckOver?<Grid container>
        <Grid item lg={12} md={12} xs={12}>
        {isRegister ? (
        <>
        <Grid item lg={12} xs={12}>
          <Box style={{width:'100%',
          "boxShadow":"rgba(11, 102, 106, 0.1) 0px 8px 24px",
          padding:30,
          borderRadius:10,
          marginBottom:20,
        background:'rgba(0,0,0,.09)'}}>
          <Typography variant="h6">A student found with this email </Typography>
        <Stack direction='row' spacing={7} marginTop={3}>
        <Stack>
          <Typography variant="p">Name:{registerUserForPost.name}</Typography>
          <Typography variant="p">Gender:{registerUserForPost.gender}</Typography>
        </Stack>
        <Stack>
        <Typography variant="p">City:{registerUserForPost.city}</Typography>
          <Typography variant="p">Contact No:{registerUserForPost.contactno}</Typography>
        </Stack>


        </Stack>

          </Box>

        </Grid>
    
        
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Subjects
            </InputLabel>
            <Select
              size="small"
              required
              style={{
                width: "100%",
                margin: 10,
              }}
              onChange={(e) => {
                setPostData({ ...postData, subject: e.target.value});
              }}
              value={postData.subject}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"maths"}>Mathematics</MenuItem>
              <MenuItem value={"science"}>Science</MenuItem>
              <MenuItem value={"computerscience"}>Computer Science</MenuItem>
              <MenuItem value={"chemistry"}>Chemistry</MenuItem>
              <MenuItem value={"physics"}>Physics</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Standard
            </InputLabel>
            <Select
              size="small"
              required
              onChange={(e) => {
                setPostData({ ...postData, standard: e.target.value});
              }}
              value={postData.standard}
              style={{
                width: "100%",
                margin: 10,
              }}
            >
              <MenuItem value={"class8"}>Class 8</MenuItem>
              <MenuItem value={"class9"}>Class 9</MenuItem>
              <MenuItem value={"class10"}>Class 10</MenuItem>
              <MenuItem value={"class11"}>Class 11</MenuItem>
              <MenuItem value={"class12"}>Class 12</MenuItem>
              <MenuItem value={"bca"}>BCA</MenuItem>
              <MenuItem value={"BSc"}>BSc CS & IT</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel style={{ paddingLeft: 10, marginBottom: 10 }}>
              Preferred Mode
            </InputLabel>
            <Select
              size="small"
              required
              onChange={(e) => {
                setPostData({ ...postData, prefmode: e.target.value});
              }}
              value={postData.prefmode}
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
              onChange={(e) => {
                setPostData({ ...postData, preftime: e.target.value});
              }}
              value={postData.preftime}
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
          <Button variant="contained" style={{
        marginLeft:50,
        marginTop:20,
        background:'#176B87'
      }} onClick={handleCreate}>Create Post</Button>
        </>
      ) : (
        <>
         <Typography variant="p" style={{marginBottom:20}}>No exist user found with this email,please register first and create a post</Typography>
          <form
            onSubmit={registerUser}
            style={{
              width: "100%",
              marginTop:20
            }}
          >
            <Grid container spacing={4}>
              <Grid item lg={4} xs={12} md={6} style={{ padding: 20 }}>
                <Typography variant="p"> Personal Details</Typography>
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
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />

                {/* <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  required
                  size="small"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                /> */}
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
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
                  value={data.contactno}
                  onChange={(e) =>
                    setData({ ...data, contactno: e.target.value })
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
                    onChange={(e) => {
                      setData({ ...data, gender: e.target.value });
                    }}
                    value={data.gender}
                    style={{
                      margin: 10,
                    }}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                md={6}
                style={{
                  padding: 30,
                  "box-shadow": "rgba(149, 157, 165, 0.1) 0px 8px 24px",
                  borderRadius: 10,
                }}
              >
                <Typography variant="p">Academic Details</Typography>
                <br />
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="School"
                  variant="outlined"
                  value={data.school}
                  onChange={(e) => setData({ ...data, school: e.target.value })}
                />
                <FormControl style={{ width: "85%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Medium
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    size="small"
                    onChange={(e) => {
                      setData({ ...data, medium: e.target.value });
                    }}
                    value={data.medium}
                    style={{
                      margin: 10,
                    }}
                  >
                    <MenuItem value={"assamese"}>Assamese</MenuItem>
                    <MenuItem value={"english"}>English</MenuItem>
                    <MenuItem value={"hindi"}>Hindi</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={{ width: "85%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Board
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-standard-label"
                    size="small"
                    id="demo-simple-select-standard"
                    onChange={(e) => {
                      setData({ ...data, board: e.target.value });
                    }}
                    value={data.board}
                    style={{
                      margin: 10,
                    }}
                  >
                    <MenuItem value={"seba"}>SEBA</MenuItem>
                    <MenuItem value={"ahsec"}>AHSEC</MenuItem>
                    <MenuItem value={"cbse"}>CBSE</MenuItem>
                    <MenuItem value={"icse"}>ICSE</MenuItem>
                    <MenuItem value={"others"}>OTHERS</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Standard"
                  variant="outlined"
                  value={data.standard}
                  onChange={(e) =>
                    setData({ ...data, standard: e.target.value })
                  }
                />
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Stream"
                  variant="outlined"
                  value={data.stream}
                  onChange={(e) => setData({ ...data, stream: e.target.value })}
                />
              </Grid>
              <Grid item lg={4} xs={12} md={6} style={{ padding: 20 }}>
                <Typography variant="p">Address</Typography>
                <br />
                <FormControl style={{ width: "85%" }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    City
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    size="small"
                    onChange={(e) => {
                      setData({ ...data, city: e.target.value });
                    }}
                    value={data.city}
                    style={{
                      margin: 10,
                    }}
                  >
                    {City.map((e) => (
                      <MenuItem value={e}>{e}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Locality"
                  variant="outlined"
                  value={data.locality}
                  onChange={(e) =>
                    setData({ ...data, locality: e.target.value })
                  }
                />
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  value={data.address}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Pin"
                  variant="outlined"
                  value={data.pin}
                  onChange={(e) => setData({ ...data, pin: e.target.value })}
                />
                <TextField
                  style={{
                    margin: "10px",
                    width: "80%",
                  }}
                  required
                  size="small"
                  id="outlined-basic"
                  label="Created By"
                  variant="outlined"
                  value={data.createdBy}
                  disabled
                />
                <Button
                  style={{
                    width: "50%",
                    margin: 20,
                    background: "#0B666A",
                  }}
                  variant="contained"
                  size="medium"
                  type="submit"
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
            

        </Grid>
      </Grid>:''}

    </>
  );
};

export default AddNewPost;
