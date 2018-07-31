import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Lookup } from '../../model';
import { withStyles, WithStyles } from '@material-ui/core/styles';

const styles = {
  textField: {
    width: 500,
  },
};


interface Props extends WithStyles<typeof styles> {
  name: string;
  label: string;
  labelClassName?: string;
  wrapperClassName?: string;
  value: string | number;
  lookup: Lookup[];
  placeholder?: string;
  error?: string;
  onChange: any;
  disabled?: boolean;
}

// TODO: Add proper styling
// TODO: Add Unit testing (common component)
export const SelectInner : React.StatelessComponent<Props> = (props) => {
  return (
    <div className={props.wrapperClassName}>      
        <label htmlFor={props.name} className={props.labelClassName}>
          {props.label}
        </label>

        <TextField
          id={props.name}
          select
          label={props.label}
          value={props.value}
          onChange={onChange(props)}
          SelectProps={{
            native: true,
          }}          
          margin="normal"
        >
          {
            props.lookup.map(option => 
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            )
          }
        </TextField>

    </div>
  );
};

const onChange = (props: Props) => (e) => {
  props.onChange(props.name, e.target.value);
};

export const Select = withStyles(styles)<Props>(SelectInner);
