import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './FilterBar.styles';
import useTexts from '../../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../../utils/arrayIndexingWithLength';
import useGetRequest from '../../../hooks/useGetRequest';
import { ICategory } from '../../../schemas';
import { Rating } from '@material-ui/lab';

enum FilterTypes {
  CATEGORY = 'category',
  RATING = 'rating',
}

export interface FiltersCheckboxState {
  [key: string]: string[];
}

interface Props {
  onFilterApplied: (state: FiltersCheckboxState) => void;
}

const FilterBar: React.FC<Props> = ({ onFilterApplied }) => {
  const texts = useTexts();
  const classes = useStyles();
  const [state, setState] = useState<FiltersCheckboxState>({});
  const [hasChanges, setHasChanges] = useState(false);
  const { data, loading } = useGetRequest<ICategory[]>('/categories');

  const handleResetAll = () => {
    const stateCopy = { ...state };

    Object.keys(stateCopy).forEach((key) => {
      stateCopy[key] = [];
    });

    setState(stateCopy);
    setHasChanges(true);
  };

  const manageState = (filterType: FilterTypes, key: string) => {
    if (state[filterType] === undefined) {
      setState((s) => ({ ...s, [filterType]: [] }));
      return false;
    }

    const currentState = state[filterType].find((f) => f === key);

    return !!currentState;
  };

  const handlePriceCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, type: FilterTypes) => {
    const { name, checked } = event.target;
    const filterArray = state[type];

    const newFilter: string[] = checked ? [...filterArray, name] : [...filterArray.filter((e) => e !== name)];

    setState({ ...state, [type]: newFilter });
    setHasChanges(true);
  };

  const handleSubmit = () => {
    setHasChanges(false);
    onFilterApplied(state);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" className={classes.filterTitle}>
        {texts.sidebarFiltersText}
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{texts.sideBarCategoryFilterTitle}</FormLabel>
        {loading && <CircularProgress />}
        {data?.map((category) => (
          <FormControlLabel
            value={manageState(FilterTypes.CATEGORY, category.id)}
            control={
              <Checkbox
                checked={manageState(FilterTypes.CATEGORY, category.id)}
                onChange={(event) => handlePriceCheckboxChange(event, FilterTypes.CATEGORY)}
                name={category.id}
              />
            }
            label={category.name}
            key={category.id}
          />
        ))}
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{texts.sidebarRatingFilterTitle}</FormLabel>
        {arrayIndexingWithLength(6).map((v) => (
          <FormControlLabel
            value={manageState(FilterTypes.RATING, v.toString())}
            control={
              <Checkbox
                checked={manageState(FilterTypes.RATING, v.toString())}
                onChange={(event) => handlePriceCheckboxChange(event, FilterTypes.RATING)}
                name={v.toString()}
              />
            }
            label={<Rating value={v} readOnly />}
            key={v}
          />
        ))}
      </FormControl>
      {/* <FormControl component="fieldset" className={classes.formControl}>
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
      </FormControl> */}
      <Box className={classes.buttonBox}>
        <Button onClick={handleResetAll}>{texts.sideBarResetButton}</Button>

        <Button variant="contained" color="primary" disableElevation onClick={handleSubmit} disabled={!hasChanges}>
          {texts.sideBarApplyButton}
        </Button>
      </Box>
    </Box>
  );
};

export default FilterBar;
