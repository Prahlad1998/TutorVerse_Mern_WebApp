import React from "react";
import DeleteDialog from "./DeleteDialog";
import { userContext } from "../../context/userContext";
import ViewDialog from "./ViewDialog";
import EditDialog from "./EditDialog";
import ViewPostFromStudent from "./ViewPostFromStudent";


const Actions = ({ rowId }) => {
  console.log(rowId);
  return (
    <>
      <userContext.Provider value={{rowId}}>
        {/* <Stack direction="row" spacing={2}> */}
          <ViewDialog/>
          <EditDialog/>
          {/* <DeleteDialog rowId={rowId} /> */}
          <ViewPostFromStudent rowId={rowId} />

        {/* </Stack> */}
      </userContext.Provider>
    </>
  );
};

export default Actions;
