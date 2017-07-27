import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const StoreList = (props) => (
    <List {...props} perPage={10}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="phoneNumber" />
        </Datagrid>
    </List>
);
