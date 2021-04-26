import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header, Footer } from './components';
import { FeedPage, NotFoundErrorPage } from './pages';
import './styles/styles.scss';
import './App.scss';

function App() {
  return (
    <div id="main-wrapper">
      <div id="header">
        <Header />
      </div>
      <div id="content">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={FeedPage} exact />
            <Route component={NotFoundErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
