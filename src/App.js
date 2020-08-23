import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {
  EventsPage,
  FilesPage,
  GetStartedPage,
  LinksPage,
  PhotosPage,
  SharingPage,
} from './pages';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Redirect from='/' exact to='/photos'/>
          <Route path="/events" component={EventsPage} />
          <Route path="/files" component={FilesPage} />
          <Route path="/get-started" component={GetStartedPage} />
          <Route path="/links" component={LinksPage} />
          <Route path="/photos" component={PhotosPage} />
          <Route path="/sharing" component={SharingPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
