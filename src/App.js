import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import restClient from './restClient';

import { StoreList } from './stores';

const App = () => (
  <Admin restClient={restClient('http://192.168.1.102:1337')}>
    <Resource name="store" list={StoreList} />
  </Admin>
);

export default App;
