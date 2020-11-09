import React, { Component} from 'react';
import '../../App.css';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from '../UsersList/PostList'



class StudentsList extends Component{
    render() {
      return (
        <div className="StudentsList">
          
          <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='posts'
        list={PostList}/>
        
    </Admin>
          
        </div>
      );
      }
    }

export default  StudentsList


