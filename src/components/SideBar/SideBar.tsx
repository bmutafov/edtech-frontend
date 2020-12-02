import React from 'react';
import {
  Divider,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from '@material-ui/core';
import { useStyles } from './SideBar.styles';
import useTexts from '../../hooks/useTexts';

const SideBar: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  const [value, setValue] = React.useState('subcategory');
  const [state, setState] = React.useState({
    premium: false,
    free: false,
    paid: false,
  });
  const { premium, paid, free } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <FormControl component="fieldset">
        <FormLabel component="legend">{texts.sideBarTitle}</FormLabel>
        <RadioGroup aria-label="category" name="subcategories" value={value} onChange={handleChange}>
          <FormControlLabel value="subcategory" control={<Radio />} label="Subcategory" />
          <FormControlLabel value="subcategory1" control={<Radio />} label="Subcategory" />
          <FormControlLabel value="subcategory2" control={<Radio />} label="Subcategory" />
        </RadioGroup>
      </FormControl>
      <Divider />
      <FormControl component="fieldset">
        <FormLabel component="legend">{texts.sideBarSubtitle}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={premium} onChange={handleChanges} name="premium" />}
            label="Premium"
          />
          <FormControlLabel control={<Checkbox checked={paid} onChange={handleChanges} name="paid" />} label="Paid" />
          <FormControlLabel control={<Checkbox checked={free} onChange={handleChanges} name="free" />} label="Free" />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default SideBar;
