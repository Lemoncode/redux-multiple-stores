import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

interface Props extends WithStyles<typeof styles> {

}

const MainAppBarInner = (props : Props) => 
  <AppBar position="static">  
    <Toolbar>
      <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>    
      <Typography variant="title" color="inherit">
        Database performance monitor
      </Typography>
    </Toolbar>
  </AppBar>

export const MainAppBar = withStyles(styles)<Props>(MainAppBarInner);