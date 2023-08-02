import React,{useContext} from 'react';
import { Tooltip } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import { userContext } from '../../context/userContext';

const ViewPostFromStudent = () => {
    const {rowId}=useContext(userContext);
  return (
    <>
    <Link to="viewpostsdetails" state={rowId}>
    <Tooltip title="View Posts">
<ArrowOutwardIcon fontSize='small' style={{color:'rgb(239, 98, 98)'}}/>
   </Tooltip>
    </Link>
    </>
    
   
  )
}

export default ViewPostFromStudent