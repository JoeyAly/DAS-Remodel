import React, { Component} from 'react';
import OppText from '../../OppText';

import { homeObjOne, homeObjTwo } from './Data';


class StudentOpportunities extends Component{
  render() {
  return (
    <div className="StudentOpportunities">
    <>
      <OppText {...homeObjOne} />
      <OppText {...homeObjTwo} />
      
    </>
    </div>
  );
}
}


export default  StudentOpportunities