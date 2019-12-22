
import React from 'react';
//import logo from './logo.svg';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const breadcrumbNameMap = {
  '/교양': '교양',
  '/교양/일반교양': '일반교양',
  '/교양/전공관련교양': '전공관련교양',
  '/교양/ACADEMYENGLISH': 'ACADEMYENGLISH',
  '/전공': '전공',
  '/전공/과학기술대학': '과학기술대학',
  '/전공/공공정책대학': '공공정책대학',
  '/전공/글로벌비즈니스대학': '글로벌비즈니스대학',
  '/전공/문화스포츠대학': '문화스포츠대학',
  '/전공/약학대학': '약학대학',
  '/drafts': 'Drafts',
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const LinkRouter = props => <Link {...props} component={RouterLink} />;

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};



export default function RouterBreadcrumbs() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (

<MemoryRouter initialEntries={['/교양']} initialIndex={0}>
<MemoryRouter initialEntries={['/교양']} initialIndex={0}>
<div className={classes.root}>

<AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            강의평가
          </Typography>
          <Button color="inherit">MYPAGE</Button>
        </Toolbar>
      </AppBar>
  
  <Route>
    {({ location }) => {
      const pathnames = location.pathname.split('/').filter(x => x);

      return (
        <Breadcrumbs aria-label="breadcrumb">
          <LinkRouter color="inherit" to="/">
           상세검색
          </LinkRouter>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return last ? (
              <Typography color="textPrimary" key={to}>
                {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkRouter color="inherit" to={to} key={to}>
                {breadcrumbNameMap[to]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
      );
    }}
  </Route>
  <nav className={classes.lists} aria-label="mailbox folders">
    <List>

      <ListItemLink to="/교양" open={open} onClick={handleClick} />
      <Collapse component="li" in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink to="/교양/일반교양" className={classes.nested} />
          <ListItemLink to="/교양/전공관련교양" className={classes.nested} />
          <ListItemLink to="/교양/ACADEMYENGLISH" className={classes.nested} />
        </List>
      </Collapse>

      <ListItemLink to="/전공" open={open} onClick={handleClick} />
      <Collapse component="li" in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemLink to="/전공/과학기술대학" className={classes.nested} />
          <ListItemLink to="/전공/공공정책대학" className={classes.nested} />
          <ListItemLink to="/전공/글로벌비즈니스대학" className={classes.nested} />
          <ListItemLink to="/전공/문화스포트대학" className={classes.nested} />
          <ListItemLink to="/전공/약학대학" className={classes.nested} />
        </List>
      </Collapse>
    </List>
  </nav>
</div>
</MemoryRouter>
</MemoryRouter>
  );
}
