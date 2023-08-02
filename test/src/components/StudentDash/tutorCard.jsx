import React from "react";
import {

  Typography,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Divider,
  Stack,
} from "@mui/material";


const TutorCard = (props) => {
  // console.log(props);
  const { tutor } = props;
  return (
    <>
            <Card
              sx={{ minWidth: 350 }}
              style={{
                boxShadow: "#DAFFFB 0px 8px 24px",
                borderRadius:10,
                "border":"1px solid #64CCC5"
              }}
            >
              <CardContent>
                <ListItem>
                  <ListItemIcon>
                    <Avatar style={{ background: "#64CCC5" }}>
                      {tutor.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography gutterBottom variant="h6" component="div">
                      {tutor.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      {tutor.gender}
                    </Typography>
                  </ListItemText>
                </ListItem>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >

                  <Typography variant="p">
                    {tutor.highestqualification}
                  </Typography>
                  <Typography variant="h6">{tutor.subjects}</Typography>
                </div>
              </CardContent>
              <CardContent>
                <Stack direction="row" spacing={2}>
                  <Typography>Mode : {tutor.prefmode}</Typography>
                  <Typography>Languages : {tutor.preflanguages}</Typography>
                </Stack>
              </CardContent>
              <Divider style={{ margin: 8, background: "#001C30" }} />
              <CardActions>
                <Button  variant="contained" size="small" style={{background:"#64CCC5"}}>View</Button>
               
              </CardActions>
            </Card>
    </>
  );
};

export default TutorCard;
