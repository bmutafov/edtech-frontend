import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import { useStyles } from './SideBar.styles';
import useTexts from '../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';

interface CheckboxState {
  [key: string]: boolean;
}

const SideBar: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  const [state, setState] = React.useState<CheckboxState>({});

  const handleResetAll = () => {
    const stateCopy = { ...state };

    Object.keys(stateCopy).forEach((key) => {
      stateCopy[key] = false;
    });

    setState(stateCopy);
  };

  const manageState = (key: string) => {
    const currentState = state[key];

    if (currentState === undefined) {
      setState((s) => ({ ...s, [key]: false }));
      return false;
    }

    return currentState;
  };

  const handlePriceCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" className={classes.filterTitle}>
        {texts.sidebarFiltersText}
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{texts.sideBarTitle}</FormLabel>

        {arrayIndexingWithLength(3)
          .map((v) => `category_${v}`)
          .map((v: keyof typeof state) => (
            <FormControlLabel
              value={state[v]}
              control={
                <Checkbox
                  checked={manageState(v.toString())}
                  onChange={handlePriceCheckboxChange}
                  name={v.toString()}
                />
              }
              label={v}
              key={v}
            />
          ))}
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{texts.sideBarSubtitle}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={manageState('premium')} onChange={handlePriceCheckboxChange} name="premium" />}
            label="Premium"
          />
          <FormControlLabel
            control={<Checkbox checked={manageState('paid')} onChange={handlePriceCheckboxChange} name="paid" />}
            label="Paid"
          />
          <FormControlLabel
            control={<Checkbox checked={manageState('free')} onChange={handlePriceCheckboxChange} name="free" />}
            label="Free"
          />
        </FormGroup>
      </FormControl>
      <Box className={classes.buttonBox}>
        <Button onClick={handleResetAll}>Reset all</Button>

        <Button variant="contained" color="primary" disableElevation>
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
