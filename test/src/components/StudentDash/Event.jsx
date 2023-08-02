import { Grid,Box, Typography } from '@mui/material';
import React from 'react';

const Event = () => {
  return (
    <>
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Box  style={{
                margin: 10,
                // background: "#64CCC5",
                width: "100%",
                height: 100,
                padding: 10,
                borderRadius: 20,
                "display":"flex",
                "justifyContent":"center",
                boxShadow: "#176B87 0px 8px 24px",
              }}
        >
          <Typography variant="p">NO EVENTS AT PRESENT TIME</Typography>

        </Box>

      </Grid>

    </Grid>
    </>
  )
}

export default Event;