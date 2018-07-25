import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubAppA} from './sub-app-a';
import {SubAppB} from './sub-app-b';

ReactDOM.render(    
    <>
    <SubAppA/>
    <SubAppB/>
    </>  
  ,
  document.getElementById('root'));