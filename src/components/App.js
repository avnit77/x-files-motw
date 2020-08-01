import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './common/Header';
import MonsterList from './monsterList/MonsterList';
import MonsterDetail from './monsterDetail/MonsterDetail';

export default function App() {
  return (
    <Router>
      <Route path="/" component = {Header} />
      <Route exact path="/" component={MonsterList} />
      <Route path="/characters/:name" component = {MonsterDetail} />
    </Router>
  );
}
