import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { DataContext } from "../../../../../context/dataContext";
import { ListItem, ListItemText, Button } from "@mui/material";
import DeleteCityDialog from "./deleteCityDialog";

export default function ListCity() {
  const { city } = React.useContext(DataContext);

  return (
    <ImageList sx={{ width: "100%", height: 150 }} cols={1}>
      {city.map((item, i) => (
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
            <DeleteCityDialog name={item}/>
          </ListItem>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
