import * as React from "react";
import { Tooltip, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {useNavigate} from 'react-router-dom';
import { userContext } from "../../context/userContext";
import DialogTitle from "@mui/material/DialogTitle";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function DeleteDialog() {
  const { rowId } = React.useContext(userContext);
  const navigate=useNavigate();

  console.log(rowId);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    const response = await axios.delete(`/users/${rowId}`);
    console.log(response);
    if (!response.data.status === "ok") {
      toast.error(response.data.message);
    } else {
      handleClose();
      toast.success(response.data.message);
    
    }
    setTimeout(()=>navigate(0),2000);
  };

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton>
        <DeleteRoundedIcon
        onClick={handleClickOpen}
        style={{ color: "#EF6262", cursor: "pointer" }}
      />
        </IconButton>
      </Tooltip>
      
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this record?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will delete permanently from your record.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
