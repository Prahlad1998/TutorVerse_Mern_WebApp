import React from "react";
import { postContext } from "../../context/postContext";

import ViewDialogPost from "./viewDialogPost";
import EditDialogPost from "./EditDialogPost";
import DeleteDialogPost from "./DeleteDialogPost";

const ActionsPost = ({ rowId }) => {
  console.log(rowId);
  return (
    <>
      <postContext.Provider value={{rowId}}>
        {/* <Stack direction="row" spacing={2}> */}
          <ViewDialogPost/>
          <EditDialogPost/>
          <DeleteDialogPost rowId={rowId}/>
          
        {/* </Stack> */}
      </postContext.Provider>
    </>
  );
};

export default ActionsPost;
