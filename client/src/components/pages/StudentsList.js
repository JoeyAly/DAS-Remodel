import React, { Component} from 'react';
import '../../App.css';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from '../UsersList/PostList'
import PostCreate from '../UsersList/PostCreate'
import PostEdit from '../UsersList/PostEdit'



class StudentsList extends Component{
    render() {
      return (
        <div className="StudentsList">
          
          <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      
    </Admin>
          
        </div>
      );
      }
    }

export default  StudentsList


