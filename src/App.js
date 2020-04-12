import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import Content from "./containers/Content"
import Profile from "./components/Profile"
import Error from "./components/Error"

const LayoutOne = ({children}) =>
    <div>
        <Sidebar />
        <Navbar />
        {children}
    </div>;
const LayoutEmpty = ({children}) => <div>{children}</div>;

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <RouteWrapper path="/" exact component={Content} layout={LayoutOne} />
              <RouteWrapper path="/profile" exact component={Profile} layout={LayoutOne} />
              <RouteWrapper exact component={Error} layout={LayoutEmpty} />
          </Switch>
      </BrowserRouter>
  );
}

function RouteWrapper({
      component: Component,
      layout: Layout,
      ...rest
    }) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}

export default App;
