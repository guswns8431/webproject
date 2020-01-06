import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logok from './logok.PNG';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { FormHelperText } from '@material-ui/core';
import SimpleRating from './rating';




const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },  
});



function createData(name, content) {
  return { name, content};
}

const rows = [
  createData('강의명', '북조선의 력사'),
  createData('교수명', '김공산'),
  createData('별점', <SimpleRating />),
  createData('장점', '평등하게 모두 C'),
  createData('단점', '공부해도 C'),
];

export default function DenseTable() {
  const classes = useStyles();  

  return (
    <div>
    <img src={logok} alt="alt"></img>    
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>평가 항목</TableCell>
            <TableCell align="right">내용</TableCell>                       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>                                      
            </TableRow>
          ))}
        </TableBody>
      </Table>      
    </TableContainer>
    
    <Button className={classes.button} variant="contained">등록하기</Button>    
  </div>    
  );
}