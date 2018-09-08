import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import posed, { PoseGroup } from 'react-pose';
import Doge from './pages/Doge';
import Layout from './containers/Layout';

const Faded = posed.div({
  enter: {
    opacity: 1,
    beforeChildren: true,
  },
  exit: {
    opacity: 0,
  },
});

const Loading: React.SFC<Loadable.LoadingComponentProps> = () => {
  return <React.Fragment>Loading...</React.Fragment>;
};

const LoadableHelloContainer = Loadable({
  loader: () => import('./containers/HelloContainer'),
  loading: Loading,
});

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <Layout>
            <PoseGroup>
              <Faded key={location.key}>
                <Switch>
                  <Route exact path='/' component={LoadableHelloContainer} />
                  <Route component={Doge} />
                </Switch>
              </Faded>
            </PoseGroup>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
