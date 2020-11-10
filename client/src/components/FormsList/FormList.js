import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const FormList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      
        <TextField source='hoursServed' />
        <TextField select source='Type of Hours' />
        <TextField source='goals' />
        <TextField source='bio' />
        <DateField source='activityDate' />
        <EditButton basePath='/forms' />
        <DeleteButton basePath='/forms' />
      </Datagrid>
    </List>
  )
}

export default FormList