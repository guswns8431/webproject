import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logok from './logok.PNG';




const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },    
    pos: {
      marginBottom: 12,
    },
    table: {
      minWidth: 650,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },  
  }));

  function createData(name, content, button) {
    return { name, content, button };
  }

  const rows = [
    createData('학과', "컴퓨터융합소프트웨어", <Button variant="contained" color="primary">수정</Button>),
    createData('이름', "황성재", <Button variant="contained" color="primary">수정</Button>),
    createData('닉네임', "카르카", <Button variant="contained" color="primary">수정</Button>),
    createData('비밀번호', "비밀", <Button variant="contained" color="primary">수정</Button>),    
  ];
  
  export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
      <img src={logok} alt="alt"></img>          
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>회원정보</TableCell>
            <TableCell align="right">내용</TableCell>
            <TableCell align="right">변경</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.button}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" color="secondary" onClick={handleOpen}>
        포인또
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">포인또는 모다? 모달이다</h2>
            <p id="transition-modal-description">포인트 적립 내역 <br /> 2019.12.29 2포인트 적립 <br />
            2019.12.28  5포인트 적립</p>
          </div>
        </Fade>
      </Modal>
      <Card className={classes.card}>
        <CardContent>          
          <Typography variant="h5" component="h2">
            포인트 적립 내역 
          </Typography>
       
          <Typography variant="body2" component="p">
          <br />
            2019.12.29  2포인트 적립 <br />
            2019.12.28  5포인트 적립
            
          </Typography>
        </CardContent>
        
      </Card>
      </div>
    );
  }