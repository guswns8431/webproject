import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

//card
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//bottom navgation
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1, // 검색창하고 프로필 사이 여백
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    //card
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      flexgrow : 1,
    },
    pos: {
      marginBottom: 12,
    },
    //bottom naviagtion
    root: {
      width: null,
     
    },

  }));
  

  export default function HomeRender() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);

    //메뉴버튼 펼치기
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const bull = <span className={classes.bullet}>•</span>; //게시글


    return (
     
      
      <div className={classes.grow}>
        <img src='C:\Users\emoclew\Desktop\like_lion\emoclew-app\src\logo.png' alt='logo.png' />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              aia-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MenuIcon /> {/*왼쪽상단에있는 메뉴아이콘*/}
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>1학년세미나</MenuItem>
              <MenuItem onClick={handleClose}>RC프로그램</MenuItem>
              <MenuItem onClick={handleClose}>글쓰기</MenuItem>
              <MenuItem onClick={handleClose}>군사학</MenuItem>
              <MenuItem onClick={handleClose}>선택교양</MenuItem>
              <MenuItem onClick={handleClose}>핵심교양</MenuItem>
              <MenuItem onClick={handleClose}>전공관련교양</MenuItem>
              <MenuItem onClick={handleClose}>ACADMYENGLISH</MenuItem>
              <MenuItem onClick={handleClose}>과학기술대학/전공</MenuItem>
              <MenuItem onClick={handleClose}>공공정책대학/전공</MenuItem>
              <MenuItem onClick={handleClose}>글로벌비즈니스대학/전공</MenuItem>
              <MenuItem onClick={handleClose}>문화스포츠대학/전공</MenuItem>
              <MenuItem onClick={handleClose}>약학대학/전공</MenuItem>
            </Menu>
            
            
            <Typography className={classes.title} variant="h6">
             강의평가
            </Typography>
          

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/ >
              </div>
              <InputBase
                placeholder="검색하세요."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}/>
            </div>
      <div className={classes.grow} /> {/*어디까지인지*/}


          <div className={classes.sectionDesktop}>
             <IconButton color="inherit">
               <AccountCircle />   {/*우측상단프로필아이콘*/}
             </IconButton>
              <Button variant="contained" color="primary"> {/*mypage아이콘*/}
                 홍길동 / point
              </Button> 
          </div>
          </Toolbar>
        </AppBar>
        
        
      <Card className={classes.card} > {/* 게시물 1  2 3 */}
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            컴퓨터정보학과/전공
          </Typography>
          <Typography variant="h5" component="h2">
            Articial Intelligent{bull}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            정인정
          </Typography>
          <Typography variant="body2" component="p">
                    You're not a voice
            You're just a ringing in my ear
            And if I heard you, which I don't
            I'm spoken for I fear
            Everyone I've ever loved is here within these walls
            I'm sorry, secret siren, but I'm blocking out your calls
            I've had my adventure, I don't need something new
            I'm afraid of what I'm risking if I follow you
            <br />
            {'"Into the unknown"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">자세히보기..</Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            ACADEMY ENGLISH
          </Typography>
          <Typography variant="h5" component="h2">
            ACADEMY ENGLISH Ⅲ
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            steve jobs
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"The professor has a great smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">자세히보기..</Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            핵심교양
          </Typography>
          <Typography variant="h5" component="h2">
            너와 나의 연결고리 
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            bobobby
          </Typography>
          <Typography variant="body2" component="p">
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            너와 나의연결고리 이건우리안의소리 너와나의 연결고리 이건우리안의 소리 털업
            <br />
            {'"The professor has a great smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">자세히보기..</Button>
        </CardActions>
      </Card>
     

      <div className={classes.BottomNav}> {/* 바텀내비게이션*/}
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
        <BottomNavigationAction label="도르마무도르마무" icon={<RestoreIcon />} />
        <BottomNavigationAction label="KAPP(주)" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="고객센터" icon={<LocationOnIcon />} />
        </BottomNavigation>            
      </div>
    </div>
    );
  }
  
  