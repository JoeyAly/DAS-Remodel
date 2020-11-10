import React, { Component} from 'react';
import '../../App.css';

import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import FormList from '../FormsList/FormList'
import FormCreate from '../FormsList/FormCreate'
import FormEdit from '../FormsList/FormEdit'

class UserForms extends Component{
  render() {
    return (
      <div className="StudentsList">
        
        <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource
      name='forms'
      list={FormList}
      create={FormCreate}
      edit={FormEdit}

    />
    
  </Admin>
        
      </div>
    );
    }
  }

export default  UserForms