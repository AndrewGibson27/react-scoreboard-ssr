import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';

import ErrorScreen from './Error';
import Loading from './Loading';

const ScoresRibbon = Loadable({
  loader: () => import('./routes/ribbon'),
  loading: Loading,
});

const ScoresList = Loadable({
  loader: () => import('./routes/list'),
  loading: Loading,
});

const ScoreDetail = Loadable({
  loader: () => import('./routes/detail'),
  loading: Loading,
});

const LogIn = Loadable({
  loader: () => import('./routes/login'),
  loading: Loading,
});

const Admin = Loadable({
  loader: () => import('./routes/admin'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading,
});

const mapStateToProps = ({
  context: {
    error,
    loading,
    errorMessage,
    routeRefresh,
  },
}) => ({
  error,
  errorMessage,
  loading,
  isReady: !error && !loading,
  routeRefresh, // hack to get custom router working
});

const App = ({ error, errorMessage, loading, isReady }) => (
  <main>
    {
      error && <ErrorScreen message={errorMessage} />
    }
    {
      loading && <Loading />
    }
    {
      isReady &&
      <div>
        <nav>
          <Route path="/scores" component={ScoresRibbon} />
        </nav>
        <Switch>
          <Route path="/scores" exact component={ScoresList} />
          <Route path="/scores/:id" exact component={ScoreDetail} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/admin" exact component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    }
  </main>
);

export default connect(mapStateToProps)(App);
