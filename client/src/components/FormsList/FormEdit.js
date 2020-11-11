import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        
        <TextInput source='hoursServed' />
        <TextInput source='Type of Hours' />
        <TextInput source='goals' />
        <TextInput source='bio' />
        <DateInput label='Date of Activity' source='activityDate' />
      </SimpleForm>
    </Edit>
  )
}


export default PostEdit