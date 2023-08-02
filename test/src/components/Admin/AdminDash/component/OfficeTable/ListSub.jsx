import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { DataContext } from "../../../../../context/dataContext";
import { ListItem, ListItemText, Button } from "@mui/material";

import DeleteSubDialog from "./deleteSubDialog";

export default function ListSub() {
  const { subjects } = React.useContext(DataContext);

  return (
    <ImageList sx={{ width: "100%", height: 150 }} cols={1}>
      {subjects.map((item, i) => (
        <ImageListItem>
          <ListItem>
            <span
              style={{
                marginRight: 5,
                color: "rgb(255, 255, 255)",
                background: "rgb(7, 24, 80)",
                padding: 7,
                borderRadius: 5,
              }}
            >
              {i + 1}
            </span>
            <ListItemText>{item}</ListItemText>
            <DeleteSubDialog name={item}/>
            {/* <DeleteCityDialog name={item}/> */}
          </ListItem>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
