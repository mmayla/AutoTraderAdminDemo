import React from 'react';
import { EditButton, DisabledInput, TextInput, required, Edit, SimpleForm,
         List, Datagrid, TextField, BooleanField, ReferenceField } from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props} perPage={10}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" />
            <BooleanField source="admin" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.email}"` : ''}</span>;
};

export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="email" validate={required} />
        </SimpleForm>
    </Edit>
);
