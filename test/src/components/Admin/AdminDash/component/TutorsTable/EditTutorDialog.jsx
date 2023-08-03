import * as React from "react";
import { Tooltip, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { userContext } from "../../context/userContext";
import DialogTitle from "@mui/material/DialogTitle";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import EditTutorDetails from "./EditTutorDetails";

export default function EditTutorDialog() {
  const { rowId } = React.useContext(userContext);
  

  console.log(rowId);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Tooltip title="Edit">
        <IconButton>
          <EditRoundedIcon
            onClick={handleClickOpen}
            fontSize="small"
            style={{ color: "#0B666A", cursor: "pointer" }}
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
          {"Update the details"}
        </DialogTitle>
        <DialogContent style={{ height: "100vh", width: 600 }}>
          <DialogContentText id="alert-dialog-description">
          <EditTutorDetails/>
            {/* {rowId} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleEdit} autoFocus>
            Ok
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
