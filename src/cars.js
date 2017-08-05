import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'admin-on-rest';

export const CarList = (props) => (
    <List {...props} perPage={10}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="model" />
            <TextField source="year" />
            <NumberField source="price" />
        </Datagrid>
    </List>
);
