import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import restClient from './restClient';

import { CarList } from './cars';
import { StoreList } from './stores';

const App = () => (
  <Admin restClient={restClient('http://localhost:1337')}>
  <Resource name="stores" list={StoreList} />
    <Resource name="cars" list={CarList} />
  </Admin>
);

export default App;
