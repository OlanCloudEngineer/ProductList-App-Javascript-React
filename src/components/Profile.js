import React from 'react';
import JSONTree from 'react-json-tree';
import { Map } from 'immutable';
import theme from '../themes/themes';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';

const Profile=(props)=> {
    const json = props;
    return (
      <div >
          
                <h1>{props.children}</h1>
          <JSONTree data={json} 
         theme={theme} invertTheme={true} />
               
         
          
      </div>
    );
  }

  export default Profile;