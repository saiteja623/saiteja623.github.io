import React, { Component } from "react";
import {
  CardActions,
  Box,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work"; // To use a work icon
import {
  ThemeProvider,
  createMuiTheme,
  Paper,
  Button,
  IconButton,
  CardContent,
  Grid,
  makeStyles,
  Avatar,
  Card,
  Hidden,
  AppBar,
  Toolbar,
  CardMedia,
  List,
  ListItem,
  Tabs,
  Tab,
  ListItemText,
  Typography,
  Drawer,
  Divider,
} from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { green } from "@material-ui/core/colors";
import Brightness3Icon from "@material-ui/icons/Brightness3";
//import Brightness7Icon from "@material-ui/icons/Brightness7";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./css/portfolio.css";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import HomeIcon from "@material-ui/icons/Home";
import LaunchIcon from "@material-ui/icons/Launch";
import PhoneIcon from "@material-ui/icons/Phone";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    background: {
      paper: "#0a192f",
    },
  },
});

const lightTheme = createMuiTheme({});

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

class Home extends Component {
  state = {
    dark: null,
    htmlclass: "common",
    cssclass: "common",
    jsclass: "common",
    reactclass: "common",
    djangoclass: "common",
    mysqlclass: "common",
    hamburgerClass: "hamburger",
    hamburgerOpen: false,
    totalDisplay: {
      display: "none",
    },
    letterDisplay: {
      display: "block",
    },
    tabValue: 1,
  };

  constructor(props) {
    super(props);
    this.Skills = new React.createRef();
    this.Home = new React.createRef();
    this.Contact = new React.createRef();
    this.Projects = new React.createRef();
    this.About = new React.createRef();
  }
  componentDidMount = () => {
    var theme = localStorage.getItem("isDark");
    if (theme == "true") {
      this.setState({ dark: true });
    } else {
      this.setState({ dark: false });
    }
    window.addEventListener("scroll", this.checkVisible);
    setTimeout(() => {
      this.setState({
        totalDisplay: {
          display: "block",
        },
        letterDisplay: {
          display: "none",
        },
      });
      AOS.init({ duration: 1000 });
    }, 2700);
  };
  checkVisible = () => {
    var rect = this.Skills.current.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = elemTop > 0 && elemBottom <= window.innerHeight;
    if (isVisible) {
      this.setState({
        htmlclass: "common html-active",
        cssclass: "common css-active",
        jsclass: "common js-active",
        reactclass: "common react-active",
        djangoclass: "common django-active",
        mysqlclass: "common mysql-active",
      });
    }
  };
  handleTheme = () => {
    this.state.dark
      ? localStorage.setItem("isDark", false)
      : localStorage.setItem("isDark", true);
    this.setState({ dark: !this.state.dark });
  };

  handleHamburger = () => {
    if (this.state.hamburgerOpen) {
      this.setState({ hamburgerClass: "hamburger", hamburgerOpen: false });
    } else {
      this.setState({
        hamburgerClass: "hamburger open",
        hamburgerOpen: true,
      });
    }
  };
  //handles the tab changed
  handleTabs = (e, newValue) => {
    this.setState({ tabValue: newValue });
  };
  render() {
    const { dark } = this.state;
    return (
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Paper
          style={{
            transition: "all 0.4s ease-in-out",
          }}
          className="wrapper-paper"
        >
          <div className="box" style={this.state.letterDisplay}>
            <div className={dark ? "icon dark" : "icon"}>
              <svg
                viewBox="0 0 520 520"
                style={{ enableBackground: "new 0 0 512 512" }}
              >
                <g
                  fillRule="evenodd"
                  strokeLinecap="butt"
                  strokeLinejoin=""
                  fill="#31ef88"
                >
                  <g>
                    <path
                      d="M510.432,249.597L388.297,38.537c-2.096-3.631-5.967-5.378-10.159-5.378H133.861c-4.192,0-8.063,1.747-10.159,5.378
			L1.567,249.841c-2.09,3.631-2.09,7.976,0,11.607l122.135,211.535c2.096,3.632,5.967,5.858,10.159,5.858h244.276
			c4.192,0,8.063-2.288,10.159-5.919l122.135-211.569C512.523,257.722,512.523,253.228,510.432,249.597z M371.369,"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className={dark ? "s dark" : "s"}>S</div>
          </div>
          <div className="total" style={this.state.totalDisplay}>
            <AppBar
              position="fixed"
              style={{
                background: dark ? "#0a192f" : "#172a45",
                padding: 0,
                border: "none",
                transition: "all 0.4s ease-in-out",
                paddingTop: "10px",
                width: "100%",
              }}
            >
              <Toolbar>
                <Grid container>
                  <Grid item xs={2}>
                    <div className="box1" data-aos="fade">
                      <div className={dark ? "icon1 dark" : "icon1"}>
                        <svg
                          viewBox="0 0 514 514"
                          style={{ enableBackground: "new 0 0 512 512" }}
                        >
                          <g
                            fillRule="evenodd"
                            strokeLinecap="butt"
                            strokeLinejoin=""
                            fill="#31ef88"
                          >
                            <g>
                              <path
                                d="M510.432,249.597L388.297,38.537c-2.096-3.631-5.967-5.378-10.159-5.378H133.861c-4.192,0-8.063,1.747-10.159,5.378
			L1.567,249.841c-2.09,3.631-2.09,7.976,0,11.607l122.135,211.535c2.096,3.632,5.967,5.858,10.159,5.858h244.276
			c4.192,0,8.063-2.288,10.159-5.919l122.135-211.569C512.523,257.722,512.523,253.228,510.432,249.597z M371.369,"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className={dark ? "s1 dark" : "s1"}>S</div>
                    </div>
                  </Grid>
                  <Grid item xs={5} sm={5}></Grid>
                  <Grid
                    item
                    container
                    xs
                    alignItems="center"
                    className={dark ? "nav-ref dark" : "nav-ref"}
                  >
                    <Grid item xs>
                      <IconButton onClick={this.handleTheme} disableRipple>
                        {dark ? (
                          <Brightness3Icon className="icons" />
                        ) : (
                          <WbSunnyIcon
                            className="icons"
                            style={{ color: "gray" }}
                          />
                        )}
                      </IconButton>
                    </Grid>
                    <Hidden xsDown>
                      {["Home", "About", "Skills", "Projects", "Contact"].map(
                        (e) => (
                          <Grid
                            item
                            xs
                            onClick={() => {
                              e === "Home"
                                ? this.Home.current.scrollIntoView({
                                  behavior: "smooth",
                                })
                                : e === "About"
                                  ? this.About.current.scrollIntoView({
                                    behavior: "smooth",
                                  })
                                  : e === "Skills"
                                    ? this.Skills.current.scrollIntoView({
                                      behavior: "smooth",
                                    })
                                    : e === "Projects"
                                      ? this.Projects.current.scrollIntoView({
                                        behavior: "smooth",
                                      })
                                      : this.Contact.current.scrollIntoView({
                                        behavior: "smooth",
                                      });
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.querySelector("p").style.color = "black"; // Change text color on hover
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.querySelector("p").style.color = ""; // Reset text color
                            }}
                          // onMouseEnter={(e) => {
                          //  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                          //  }}
                          // onMouseLeave={(e) => {
                          //    e.currentTarget.style.backgroundColor = "transparent";
                          // }}
                          >
                            <Typography variant="body1">{e}</Typography>
                          </Grid>
                        )
                      )}
                    </Hidden>
                    <Hidden smUp>
                      <Grid item xs>
                        <div
                          className={this.state.hamburgerClass}
                          onClick={this.handleHamburger}
                        >
                          <div className={dark ? "span1 dark" : "span1"}></div>
                          <div className={dark ? "span2 dark" : "span2"}></div>
                          <div className={dark ? "span3 dark" : "span3"}></div>
                        </div>
                      </Grid>
                    </Hidden>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <br />
            <div
              className="name-intro"
              data-aos="fade"
              data-aos-delay="300"
              ref={this.Home}
            >
              <Typography
                variant="subtitle1"
                style={dark ? { color: "#64ffda" } : { color: "red" }}
              >
                Hi. I'm
              </Typography>
              <Typography variant="h2">Saiteja Balla</Typography>
              <Typography variant="h3" color="textSecondary">
                I build things for the web
              </Typography>
            </div>
            <div className="intro-para" data-aos="fade" data-aos-delay="500">
              <Typography variant="body1">
                {" "}
                I'm a self taught full stack developer.
              </Typography>
              <br />
              <div>
                <Grid
                  container
                  spacing={2} // Space between buttons
                >
                  {/* Get In Touch Button */}
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        window.open("mailto:venkysunkari549@gmail.com");
                      }}
                      style={dark ? { color: "#64ffda" } : { color: "blue" }}
                    >
                      Get In Touch
                    </Button>
                  </Grid>

                  {/* Resume Button */}
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        window.open("https://drive.google.com/file/d/1nY6H7EqOCvjA-sgoWcaNEwsS0YNxGeTo/view");
                      }}
                      style={dark ? { color: "#64ffda" } : { color: "blue" }}
                    >
                      Resume
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div
              className="about-me"
              data-aos="fade-up"
              data-aos-duration="500"
              ref={this.About}
            >
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={
                      dark
                        ? { color: "white", fontWeight: "bold" }
                        : { color: "black", fontWeight: "bold" }
                    }
                  >
                    {" "}
                    About Me
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={5}>
                  <Hidden xsDown>
                    <Avatar
                      src={require("./profile.jpg")}
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "40px auto",
                      }}
                    />
                  </Hidden>
                  <Hidden smUp>
                    <Avatar
                      src={require("./profile.jpg")}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "20px auto",
                        marginBottom: 0,
                      }}
                    />
                  </Hidden>
                </Grid>
                <Grid item xs={12} sm>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ marginTop: "40px" }}
                  >
                    Hi, I'm
                    Saiteja Balla.
                    I'm a passionate and driven software engineer with 2+ years of experience in building robust and scalable applications. I possess a strong foundation in frontend technologies such as <span
                      style={
                        dark ? { color: "#64ffda" } : { fontWeight: "bold" }
                      }
                    >Angular and React</span>, and backend technologies including
                    <span
                      style={
                        dark ? { color: "#64ffda" } : { fontWeight: "bold" }
                      }
                    > Java, Spring Boot </span>, Microservices, Kafka, GCP, and AWS.
                    I am constantly learning and expanding my skillset, driven by a desire to contribute to cutting-edge projects.
                    My problem-solving abilities are a key strength, as demonstrated by my <span
                      style={
                        dark ? { color: "#64ffda" } : { fontWeight: "bold" }
                      }
                    >"Knight" (max 2122) </span> rating on LeetCode. I am eager to contribute my skills and enthusiasm to a challenging and rewarding role within a dynamic team.
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div
              className="skills"
              data-aos="fade"
              data-aos-duration="500"
              ref={this.Skills}
            >
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={
                      dark
                        ? { color: "white", fontWeight: "bold" }
                        : { color: "black", fontWeight: "bold" }
                    }
                  >
                    Experience
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <div
                style={{
                  transition: "all 0.4s ease",
                  height: "auto",
                  width: "auto",
                }}
              >
                <Grid container spacing={4} style={{ marginTop: "10px" }}>
                  {/* Experience Section on the Left */}
                  <Grid item xs={30} md={20}>
                    <br />
                    <Card
                      elevation={3}

                    >
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="h6" style={{ fontWeight: "bold", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
                            Software Engineer, Infosys
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            <i>August 2022 - Present </i>
                          </Typography>
                        </Box>

                        <Divider style={{ margin: "10px 0" }} />

                        <Typography variant="body1" component="p" style={{ marginTop: "5px", fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: "30px" }} >
                          <ul>
                            <li>Developed RESTful APIs using Java & Spring Boot for a new product for a major telecommunications client.</li>
                            <li>Coordinated with 2 dependent teams to gather and relay essential information, ensuring seamless collaboration and
                              preventing any potential bottlenecks</li>
                            <li> Developed and deployed a robust API platform using ApigeeX (Google API Gateway) to act as a reverse proxy,
                              routing traffic from 30+ APIs to 10+ backend systems. Leveraged advanced features like policy-based routing,
                              rate limiting, and security measures to ensure optimal performance, scalability, and security.
                            </li>
                            <li>Designed Circuit Breaker and Retry patterns to significantly improve system resilience and availability,
                              preventing cascading failures and minimizing downtime.</li>
                            <li>Implemented distributed tracing in production to monitor and troubleshoot complex microservice applications,
                              improving system visibility and reliability.</li>
                          </ul>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <WorkIcon color="primary" style={{width:"0.8em",height:"0.8em"}} />
                        <Typography variant="caption"  style={{fontSize:"0.9rem"}}>Industry: Software</Typography>
                      </CardActions>
                    </Card>
                    <br />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div
              className="skills"
              data-aos="fade"
              data-aos-duration="500"
              ref={this.Skills}
            >
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={
                      dark
                        ? { color: "white", fontWeight: "bold" }
                        : { color: "black", fontWeight: "bold" }
                    }
                  >
                    My Skills
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <div
                style={{
                  transition: "all 0.4s ease",
                  height: "auto",
                  width: "auto",
                }}
              >
                <Grid container>
                  <Hidden xsDown>
                    <Grid
                      item
                      cotainer
                      xs={12}
                      sm
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs>
                        <Typography variant="body1">
                          Other technologies I have worked upon
                        </Typography>
                        <List>
                          {["C/C++", "Java, Python", "HTML, CSS, TypeScript", "MySQL, MongoDB", "AWS, GCP , GIT"].map((e) => (
                            <ListItem>
                              <ListItemText>{e}</ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Hidden>
                  <Grid
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className="grid"
                    ref={this.skillsRef}
                    sm={6}
                    xs={12}
                    item
                    container
                    spacing={1}
                  >
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">React</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.htmlclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">Angular</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.cssclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1" color="default">
                          JavaScript
                        </Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.jsclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">Spring Boot</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.reactclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">NodeJS</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.djangoclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">MySQL</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.mysqlclass}></div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Hidden smUp>
                    <Grid item direction="column" container xs={12}>
                      <Grid item xs>
                        <Typography variant="body1">
                          Other technologies I have worked upon{" "}
                        </Typography>
                      </Grid>
                      <Grid item container xs style={{ marginTop: "10px" }}>
                        {["C", "C++", "Python", "Java"].map((e) => (
                          <Grid item xs>
                            <span className={dark ? "topic dark" : "topic"}>
                              {" "}
                              {e}
                            </span>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
            </div>
            <div className="projects" data-aos="fade-up" ref={this.Projects}>
              <Grid container>
                <Grid item sm={5}>
                  <Typography
                    variant="h4"
                    style={
                      dark
                        ? { color: "white", fontWeight: "bold" }
                        : { color: "black", fontWeight: "bold" }
                    }
                  >
                    My past few projects
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <div className="projects-tab">
                <Tabs
                  value={this.state.tabValue}
                  onChange={this.handleTabs}
                  indicatorColor="primary"
                >
                  <Tab label="Beginner" />
                  <Tab label="Advanced" />
                </Tabs>
              </div>
              {this.state.tabValue === 0 && (
                <>
                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./news.png")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        News
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        Collection of NEWS from top news articles around the
                        world
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "AOS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "News Api"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/react-news-app"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/react-news-app"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="project-card2"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./ecom.jpeg")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Online store
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A online e-commerce website built using React and
                        Context Api.
                      </Typography>
                      <div className="one">
                        {["React", "CSS", "material-ui"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Context Api"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/mobile-Ecommerce"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/mobile-Ecommerce"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  {/* <Card
                    className="project-card2"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./music.png")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Music Player
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A music player with some best songs made with React.
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "CSS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Material-ui"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/music-player"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/music-player"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card> */}

                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./games2.jpeg")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Apps and Games
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        Collection of Apps and challenging games Built using
                        React.
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "CSS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/first-react-app"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/first-react-app"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
              {this.state.tabValue === 1 && (
                <>
                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./instagram.jpeg")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Insta Clone
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A Clone of Instragram built using React and Django.
                      </Typography>
                      <div className="one">
                        {["React", "Ajax", "Django"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Mysql"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/instaclone"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/instaclone"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="project-card2"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./chatapp.jpeg")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Chat app
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        Two random users will be connected online and can be able to chat
                      </Typography>
                      <div className="one">
                        {["React", "Express", "Node"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Socket.io"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/random-chat"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/chat-app"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./music.png")}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Music Player
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A music player with some best songs made with React.
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "CSS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Material-ui"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="three">
                        <GitHubIcon
                          size="small"
                          fontSize="small"
                          style={{ margin: "0px 8px", cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://github.com/saiteja623/music-player"
                            );
                          }}
                        />
                        <LaunchIcon
                          size="small"
                          fontSize="small"
                          onClick={() => {
                            window.open(
                              "https://saiteja623.github.io/music-player"
                            );
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
            <div className="contact" ref={this.Contact}>
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={
                      dark
                        ? { color: "white", fontWeight: "bold" }
                        : { color: "black", fontWeight: "bold" }
                    }
                  >
                    Contact
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>

              <div className="paper-cards-contact">
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Paper
                      elevation={2}
                      className="contact-paper"
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/place/Siddipet+New+Bus+Stand/@18.0942816,78.8506617,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcc92b10336b451:0x52d0567e37cfb42e!8m2!3d18.0942766!4d78.8528252",
                          "_blank"
                        );
                      }}
                    >
                      <Grid container direction="column" className="x">
                        <Grid item xs={7}>
                          <HomeIcon
                            style={
                              dark
                                ? { color: "#31ef88", margin: "30px auto" }
                                : {
                                  color: "rgb(211, 13, 13)",
                                  margin: "30px auto",
                                }
                            }
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "bold" }}
                          >
                            LOCATION
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="caption" color="textSecondary">
                            Telangana,India
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper
                      elevation={2}
                      className="contact-paper"
                      onClick={() => {
                        window.open("mailto:saiteja.balla13@gmial.com");
                      }}
                    >
                      <Grid container direction="column" className="x">
                        <Grid item xs={7}>
                          <EmailOutlinedIcon
                            style={
                              dark
                                ? { color: "#31ef88", margin: "30px auto" }
                                : {
                                  color: "rgb(211, 13, 13)",
                                  margin: "30px auto",
                                }
                            }
                          />
                        </Grid>
                        <Grid item xs>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "bold" }}
                          >
                            EMAIL
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="caption" color="textSecondary">
                            saiteja.balla13@gmail.com
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Hidden xsDown>
                    <Grid item xs>
                      <Paper
                        elevation={2}
                        className="contact-paper"
                        onClick={() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=919133578294"
                          );
                        }}
                      >
                        <Grid container direction="column" className="x">
                          <Grid item xs={7}>
                            <PhoneIcon
                              style={
                                dark
                                  ? { color: "#31ef88", margin: "30px auto" }
                                  : {
                                    color: "rgb(211, 13, 13)",
                                    margin: "30px auto",
                                  }
                              }
                            />
                          </Grid>
                          <Grid item xs>
                            <Typography
                              variant="subtitle2"
                              style={{ fontWeight: "bold" }}
                            >
                              Phone
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography variant="caption" color="textSecondary">
                              (+91)9848261422
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
            </div>
            <Hidden xsDown>
              <div className="social-media-sm">
                <Grid direction="column" alignItems="center" justify="center">
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open("https://github.com/saiteja623", "_blank");
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <GitHubIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://twitter.com/Saiteja0413?s=09",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <TwitterIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://facebook.com/profile.php?id=100009183416125",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <FacebookIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/saiteja-balla-07a6771b2",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <LinkedInIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://instagram.com/saiteja_balla0713",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <InstagramIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    container
                    className="social-divider-grid"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={11} className="inner-div">
                      <Divider />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Hidden>
            <Hidden smUp>
              <div className="social-media-xs">
                <Grid container alignItems="center" justify="center">
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open("https://github.com/saiteja623", "_blank");
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <GitHubIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/saiteja-balla-07a6771b2",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <LinkedInIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://facebook.com/profile.php?id=100009183416125",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <FacebookIcon size="small" />
                    </IconButton>
                  </Grid>

                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://instagram.com/saiteja_balla0713",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <InstagramIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://twitter.com/Saiteja0413?s=09",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <TwitterIcon size="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Hidden>
          </div>

          <Drawer
            anchor="right"
            open={this.state.hamburgerOpen}
            onClose={this.handleHamburger}
          >
            <div className="drawer-ham-icon">
              <div
                className={this.state.hamburgerClass}
                onClick={this.handleHamburger}
              >
                <div className={dark ? "span1 dark" : "span1"}></div>
                <div className={dark ? "span2 dark" : "span2"}></div>
                <div className={dark ? "span3 dark" : "span3"}></div>
              </div>
            </div>
            <div className="hamburger-list">
              <List>
                {["Home", "About", "Skills", "Projects", "Contact"].map((e) => (
                  <ListItem
                    onClick={() => {
                      e === "Home"
                        ? this.Home.current.scrollIntoView({
                          behavior: "smooth",
                        })
                        : e === "About"
                          ? this.About.current.scrollIntoView({
                            behavior: "smooth",
                          })
                          : e === "Skills"
                            ? this.Skills.current.scrollIntoView({
                              behavior: "smooth",
                            })
                            : e === "Projects"
                              ? this.Projects.current.scrollIntoView({
                                behavior: "smooth",
                              })
                              : this.Contact.current.scrollIntoView({
                                behavior: "smooth",
                              });
                      this.handleHamburger();
                    }}
                  >
                    <ListItemText>
                      <Typography variant="h6">{e}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Paper>
      </ThemeProvider>
    );
  }
}

export default Home;
