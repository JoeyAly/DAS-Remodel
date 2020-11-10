import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const FormCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <DateInput label='Date of Activity' source='activityDate' />

        <TextInput source='hoursServed'  />

        <TextInput select source= 'Type of Hours'>
            <option value="required">Required</option>
            <option value="active">Active</option>
        <   option value="receptive">Receptive</option>
        </TextInput >

        <TextInput select label= 'What Goals Did You Fulfill' source = 'goals'>
            <option value="confidence">Gain condfidence and skills</option>
            <option value="empathy">Valuing empathy and understanding</option>
        <   option value="explore">Explore and take action for solutions</option>
        </TextInput >

        <TextInput label="Describe what you learned" source='bio' />
       
      </SimpleForm>
    </Create>
  )
}

export default FormCreate