import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "./ui/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/about" component={() => <div>About us</div>} />
          <Route exact path="/programs" component={() => <div>Programs</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact us</div>}
          />
          <Route
            exact
            path="/professionaldev"
            component={() => <div>Professional Development</div>}
          />
          <Route
            exact
            path="/kids&teensbootcamp"
            component={() => <div>Kids & Teens TechSkills Bootcamps</div>}
          />
          <Route
            exact
            path="/shared_studios_portal"
            component={() => <div>Shared Studios Portal</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
