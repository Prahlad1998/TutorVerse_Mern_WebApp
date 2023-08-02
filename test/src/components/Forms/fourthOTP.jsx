import React from "react";
import { TextField} from "@mui/material";

const FourthOTP = ({ data, setData }) => {
  return (
    <>
      <div>
        <TextField
          id="standard-basic"
          label="Enter OTP"
          type="Number"
          variant="standard"
          style={{
            width: "25%",
            margin: 10,
          }}
          onChange={(e) => {
            setData({ ...data, otp:e.target.value });
          }}
          value={data.otp}
        />
      </div>
    </>
  );
};

export default FourthOTP;
