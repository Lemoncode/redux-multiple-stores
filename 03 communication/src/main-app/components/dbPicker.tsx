import * as React from 'react';
import { Select } from '../../common/components/form';

interface Props {
  databaseId : number;
  onChange : (number) => void;
}

export const DbPicker = (props : Props) => 
  <div>
    <Select
      name = "db"
      label = "Choose Database:"    
      value = {props.databaseId}
      lookup={[{id: 1, name:'CRM DB'}, {id: 2, name: 'ERP DB'}]}      
      onChange={(fieldName, value) => props.onChange(value)}
    />
  </div>