import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./services/Auth";
import { options, createMuiTheme, MuiThemeProvider } from "./shared/theme";
import { store } from "./store";
import { history } from "./history";
import { App } from "./features/App"

const theme = createMuiTheme(options);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Auth0Provider>
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Auth0Provider>
  </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
