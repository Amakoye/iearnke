import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.grey[300],
    width: "100%",
    zIndex: 1302,
    height: "14em",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
  },
  footerLogo: {
    width: "13em",
    verticalAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "10em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "8em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: theme.palette.common.blue,
    fontFamily: "Arial",
    fontSize: "1rem",
    fontWeight: "Bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    width: "2.5em",
    height: "2.5em",
    color: theme.palette.common.blue,
    [theme.breakpoints.down("xs")]: {
      width: "2em",
      height: "2em",
    },
  },
  socialContainer: {
    position: "absolute",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.1em",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/programs"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Programs
              </Grid>
              <Grid
                item
                component={Link}
                to="/professionaldev"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Professional Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/kids&teensbootcamp"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                className={classes.link}
              >
                Kids & Teens TechSkills Bootcamps
              </Grid>
              <Grid
                item
                component={Link}
                to="/shared_studios_portal"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Shared-studios portal
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                History & Mission
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Why IEARN Kenya
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Grid container>
        <Grid item>
          <img src={logo} alt="Footer logo" className={classes.footerLogo} />
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.socialContainer}
        justifyContent="flex-end"
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button disableRipple>
            <FacebookIcon className={classes.icon} />
          </Button>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button disableRipple>
            <TwitterIcon className={classes.icon} />
          </Button>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button disableRipple>
            <InstagramIcon className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};

//
export default Footer;
