import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
//import Search from '../Search/Search';
import MainLayout from '../MainLayout/MainLayout';
import List from '../List/ListContainer';
import styles from './App.scss';
import SearchResults from '../SearchResults/SearchResults';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:filter" component={SearchResults} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;