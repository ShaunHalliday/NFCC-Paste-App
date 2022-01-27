import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IndexPage } from "./pages/IndexPage";
import { Loading } from "./components/Loading";
import { Header } from "./components/Header/Header";
import { SideNav } from "./components/Sidenav/Sidenav";
import { Box } from "@twilio-paste/core";
import Routing from "./pages/Routing";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const Page1 = React.lazy(async () => import("./pages/Page1"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const Page2 = React.lazy(async () => import("./pages/Page2"));

export const Index: React.FC = () => {
  return (
    <Box display="flex">
      <App>
        <React.Suspense fallback={<Loading />}>
          <Header />
          <Box width="100vw" display="flex">
            <SideNav />
            <Router>
              <Box>
                <Routes>
                  <Route path="/" element={<IndexPage />}></Route>
                  <Route path="/Routing" element={<Routing />}></Route>
                </Routes>
              </Box>
            </Router>
          </Box>
        </React.Suspense>
      </App>
    </Box>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.querySelector("#root")
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line no-console
reportWebVitals(console.log);
