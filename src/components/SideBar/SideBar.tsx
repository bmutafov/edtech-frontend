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
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';

const SideBar: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  const [value, setSubCategoryValue] = React.useState('subcategory');
  const [state, setPriceState] = React.useState({
    premium: false,
    free: false,
    paid: false,
  });
  const { premium, paid, free } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubCategoryValue((event.target as HTMLInputElement).value);
  };
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className={classes.sidenav} />
      <FormControl component="fieldset">
        <FormLabel component="legend">{texts.sideBarTitle}</FormLabel>
        <RadioGroup aria-label="category" name="subcategories" value={value} onChange={handleChange}>
          {arrayIndexingWithLength(3).map((v) => (
            <FormControlLabel value="subcategory" control={<Radio />} label="Subcategory" key={v} />
          ))}
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
