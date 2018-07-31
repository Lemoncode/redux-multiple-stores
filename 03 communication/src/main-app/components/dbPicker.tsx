import * as React from 'React';
import { Select } from '../../common/components/form';

export const DbPicker = () => 
  <div>
    <Select
      name = "db"
      label = "Choose Database:"    
      value = {1}
      lookup={[{id: 1, name:'CRM DB'}, {id: 2, name: 'ERP DB'}]}      
      onChange={(fieldName, value) => console.log(value)}
    />
  </div>