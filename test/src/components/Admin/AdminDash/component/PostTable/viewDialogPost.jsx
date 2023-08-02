import * as React from "react";
import { Tooltip, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { postContext } from "../../context/postContext";
import DialogTitle from "@mui/material/DialogTitle";
import ViewDetailsPost from "./ViewDetailsPost";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

export default function ViewDialogPost() {
  const { rowId } = React.useContext(postContext);

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
      <Tooltip title="View">
        <IconButton>
          <VisibilityRoundedIcon
            onClick={handleClickOpen}
            fontSize="small"
            style={{ color: "#071952", cursor: "pointer" }}
          />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Details"}</DialogTitle>
        <DialogContent style={{ height: "100vh", width: 600 }}>
          <DialogContentText id="alert-dialog-description">
            <ViewDetailsPost/>
            {/* {rowId} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
