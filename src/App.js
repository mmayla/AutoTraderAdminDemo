import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import restClient from './restClient';

import authClient from './authClient';
import Dashboard from './Dashboard';
import { UserList, UserEdit } from './users';
import { CarList } from './cars';
import { StoreList } from './stores';

const App = () => (
  <Admin authClient={authClient} dashboard={Dashboard} restClient={restClient('http://localhost:1337')}>
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="stores" list={StoreList} />
    <Resource name="cars" list={CarList} />
  </Admin>
);

export default App;
