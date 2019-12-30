import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./home";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact={true} component={Login} />
          <Route path="/home" exact={true} component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/*
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import SimpleRating from "./rating";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2)
  },
  media: {
    height: 190
  }
}));

function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : (
            "웹 프로그래밍 기초"
          )
        }
        subheader={
          loading ? <Skeleton height={10} width="40%" /> : "웹쟁이 교수"
        }
      />
      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          title="Ted talk"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={10} style={{ marginBottom: 6 }} />
            <Skeleton height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {<SimpleRating />}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool
};

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        카르카
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>마이페이지</MenuItem>
        <MenuItem onClick={handleClose}>포인트: 100p</MenuItem>
        <MenuItem onClick={handleClose}>로그아웃</MenuItem>
      </Menu>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="모든 강의" />
          <Tab label="내가 듣는 강의" />
        </Tabs>
      </Paper>
      <InputBase placeholder="검색하기" />
      <SearchIcon />
      <Media loading />
      <Media />
    </div>
  );
}
*/
