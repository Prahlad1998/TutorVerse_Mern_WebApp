import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
// ];

export default function AccessibleTable(props) {
  // const {posts}=props.posts;
  console.log(props.posts);
  const getDateOfCreation = (str) => {
    const modifiedDate = Date.parse(str);
    const date_time=new Date(modifiedDate);
    const createdMonth=date_time.getMonth()+1;
    const createdDate=date_time.getDate();

    const createdYear=date_time.getFullYear();
    const finalDate=`${createdDate} - ${createdMonth} - ${createdYear}`;
    return finalDate;
  };
  const testStr='2023-07-04T18:25:55.222Z';
  getDateOfCreation(testStr);
  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: 20, borderRadius: "10px" }}
    >
      <Table
        xs={{ minWidth: 350 }}
        sx={{ minWidth: 650 }}
        aria-label="caption table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" >Tuition ID</TableCell>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="left">Standard</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Preferred Time</TableCell>
          </TableRow>
        </TableHead>
        {}

        <TableBody>
          {Object.values(props.posts).map((post) => (
            <>
              <TableRow key={post.name}>
                <TableCell component="th" scope="row">
                  {post._id}
                </TableCell>
                <TableCell align="left">{post.subject}</TableCell>
                <TableCell align="left">{post.standard}</TableCell>
                <TableCell align="left">
                  {getDateOfCreation(post.createdAt)}
                </TableCell>
                <TableCell align="left">{post.preftime}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
