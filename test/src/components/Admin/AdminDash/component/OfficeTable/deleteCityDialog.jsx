import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { DataContext } from "../../../../../context/dataContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteCityDialog({name}) {
  const {allCity}=React.useContext(DataContext);
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteCity = async()=>{
    
    const cityfordelete=Object.values(allCity).find((e)=>{
      return e.name===name;
    })
    const idCity=cityfordelete._id;
    const response = await axios.delete(`/city/${idCity}`);
    console.log(response);
    if (!response.data.status === "ok") {
      toast.error(response.data.message);
    } else {
      handleClose();
      toast.success(response.data.message);
    
    }
    setTimeout(()=>navigate(0),2000);
  }

  return (
    <div>
      <Button>
        <DeleteRoundedIcon
          onClick={handleClickOpen}
          fontSize="small"
          style={{ color: "rgb(239, 98, 98)" }}
        />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure delete this City?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDeleteCity}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
