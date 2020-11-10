import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        
        <TextInput source='Student Name' />
        <TextInput source='Mentor' />
        
        <TextInput source='Email' /> 

        <TextInput select source= 'School year'>
          <option value="Freshman">Freshman</option>
          <option value="Sophmore">Sophmore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </TextInput >
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate