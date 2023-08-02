import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";


const CreatePost = (props) => {
  const navigate=useNavigate();
    console.log(props);
    const {data}=props;
    console.log(data);

    const userEmail=data.email;
    const userName=data.name;
    const userContact=data.contactno;
    const userCity=data.city;
    const userGender=data.gender;
    console.log(userEmail,userName,userContact);
    const [post,setPost]=useState({
        subject:'',
        standard:'',
        prefmode:'',
        preflang:'',
        email:'',
        contactno:'',
        postid:'',
        name:'',
        createdat:'',
        preftime:'',
    });
    
    const handleCreate=async(e)=>{
    if(post.subject===''|| post.standard===''|| post.prefmode===''|| post.preftime===''){
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
    preftime}=post;
       try {
        const response=await axios.post("/createpost",{
            subject,
            standard,
            prefmode,
            preflang,
            city:userCity,
            email:userEmail,
            contactno:userContact,
            postid,
            name:userName,
            preftime,
            gender:userGender
        });
        console.log(response);
        if(!(response.data.status==="ok")){
            toast.error("Can not create the post");
        }else{
            setPost({
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
            setTimeout(()=>navigate(0),4000);
            
            
        }
        
       } catch (error) {
        toast.error(error.message);
       }


    }
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel style={{paddingLeft:10,marginBottom:10}}>Subjects</InputLabel>
        <Select
          size="small"
          required
          //   onChange={(e) => {
          //     setData({ ...data, subjects: e.target.value });
          //   }}
          //   value={data.subjects}
          style={{
            width: "100%",
            margin: 10,
          }}
          onChange={(e) => {
            setPost({ ...post, subject: e.target.value });
          }}
          value={post.subject}
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
      {/* "maths","science","computerscience","chemistry","physics" */}
     
      <FormControl sx={{ m: 1,minWidth: 200}}>
        <InputLabel style={{paddingLeft:10,marginBottom:10}}>Standard</InputLabel>
        <Select
          size="small"
          required
          onChange={(e) => {
            setPost({ ...post, standard: e.target.value });
          }}
          value={post.standard}
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
      <FormControl sx={{ m: 1,minWidth: 200}}>
        <InputLabel style={{paddingLeft:10,marginBottom:10}}>Preferred Mode</InputLabel>
        <Select
          size="small"
          required
          onChange={(e) => {
            setPost({ ...post, prefmode: e.target.value });
          }}
          value={post.prefmode}
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
      <FormControl sx={{ m: 1,minWidth: 200}}>
        <InputLabel style={{paddingLeft:10,marginBottom:10}}>Preferred Timing</InputLabel>
        <Select
          size="small"
          required
          onChange={(e) => {
            setPost({ ...post, preftime: e.target.value });
          }}
          value={post.preftime}
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
  );
};

export default CreatePost;
