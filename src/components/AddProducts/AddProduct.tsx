import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Box,
  Button,
  FormControl,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import { useStyles } from './AddProduct.styles';
import useTexts from '../../hooks/useTexts';
import useGetRequest from '../../hooks/useGetRequest';
import { ICategory } from '../../schemas';
import { theme } from '../../utils/theme';
import Section from '../Section';
import { useForm } from 'react-hook-form';
import usePostRequest from '../../hooks/usePostRequest';
import useAuthState from '../../Auth/useAuthState';
import { Alert } from '@material-ui/lab';
import { Check, Close } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';

const TextFieldWrapper: React.FC = ({ children }) => (
  <Grid item md={10} sm={12} xs={12}>
    {children}
  </Grid>
);

type LabelProps = { text: string; className: string };
const Label: React.FC<LabelProps> = ({ text, className }) => (
  <Grid item md={2} sm={12} xs={12} className={className}>
    {text}
  </Grid>
);

interface Inputs {
  name: string;
  description: string;
  website: string;
}

const AddProduct: React.FC = () => {
  const { userInfo } = useAuthState();
  const classes = useStyles();
  const texts = useTexts();

  const { data: categoriesData } = useGetRequest<ICategory[]>('/categories');
  const [submitData, { loading }] = usePostRequest<FormData>('/products');

  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const handleCategoryChange = (category: string): void => {
    const isSelected = selectedCategories.find((c) => c === category);

    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category: string): boolean => {
    return !!selectedCategories.find((c) => c === category);
  };

  const handleImageUpload = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.target as HTMLInputElement;
    if (!!files?.length) {
      setSelectedFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(undefined);
  };

  const hadnleFormSubmit = async (inputs: Inputs) => {
    const formData = new FormData();
    const data = { ...inputs, categories: selectedCategories, user: userInfo?.id || '' };

    if (selectedFile) {
      formData.append(`files.images`, selectedFile, selectedFile?.name);
    }

    formData.append('data', JSON.stringify(data));

    const result = await submitData(formData);

    if (result?.status === 200) {
      setIsSuccessful(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(hadnleFormSubmit)}>
      <Box bgcolor="white" padding={theme.spacing.$3} paddingTop={theme.spacing.$3}>
        <Section title={texts.addProductFormTitle}>
          {isSuccessful && (
            <Box marginBottom={theme.spacing.$2}>
              <Alert severity="success">{texts.addProductSuccessAlert}</Alert>
            </Box>
          )}
          <Grid container spacing={3}>
            <Label text={texts.addProductProductLabel} className={classes.labelWrapper} />
            <TextFieldWrapper>
              <TextField
                name="name"
                inputRef={register({
                  required: texts.registerErrorFieldRequired,
                })}
                fullWidth
                variant="outlined"
                className={classes.textField}
                placeholder={texts.addProductsLabelPlaceholder}
                helperText={errors.name && errors.name.message}
                disabled={loading}
                error={!!errors.name}
              />
            </TextFieldWrapper>
          </Grid>
          <Grid container spacing={3}>
            <Label text={texts.addProductCategory} className={classes.labelWrapper} />
            <TextFieldWrapper>
              <FormControl component="fieldset" className={classes.textField}>
                {loading && <CircularProgress />}
                {categoriesData?.map((category) => (
                  <FormControlLabel
                    value={isCategorySelected(category.id || '')}
                    control={
                      <Checkbox
                        checked={isCategorySelected(category.id || '')}
                        onChange={() => handleCategoryChange(category.id || '')}
                        name={category.id}
                      />
                    }
                    label={category.name}
                    key={category.id}
                  />
                ))}
              </FormControl>
            </TextFieldWrapper>
          </Grid>
          {/* <Grid container spacing={3}>
        <Label text={texts.addProductGroup} className={classes.labelWrapper} />
        <TextFieldWrapper>
          <TextField
            select
            fullWidth
            variant="outlined"
            className={classes.textField}
            id="productGroup"
            onChange={handleChange}
            placeholder={texts.addProductsCategoryPlaceholder}
          />
        </TextFieldWrapper>
      </Grid> */}
          <Grid container spacing={3}>
            <Label text={texts.addProductDescription} className={classes.labelWrapper} />
            <TextFieldWrapper>
              <TextField
                name="description"
                inputRef={register({
                  required: texts.registerErrorFieldRequired,
                })}
                variant="outlined"
                fullWidth
                className={classes.textBox}
                id="description"
                multiline
                placeholder={texts.addProductDescriptionPlaceholder}
              />
            </TextFieldWrapper>
          </Grid>
          <Grid container spacing={3}>
            <Label text={texts.addProductUploadLabel} className={classes.labelWrapper} />
            <TextFieldWrapper>
              <Box display="flex" alignItems="center">
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span" disableElevation>
                    {texts.addProductUploadButtonText}
                  </Button>
                </label>
                {selectedFile && (
                  <Box className={classes.fileInfoBox} alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Check style={{ color: green[500] }} />
                      {selectedFile?.name}
                    </Box>
                    <IconButton aria-label="delete" color="secondary" onClick={handleRemoveFile}>
                      <Close fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </TextFieldWrapper>
          </Grid>

          {/* <Grid container spacing={3}>
        <Label text={texts.addProductButton} className={classes.labelWrapper} />
        <TextFieldWrapper>
          <Button variant="contained" disableElevation>
            {texts.addProductButton} <CloudUploadIcon />
          </Button>
        </TextFieldWrapper>
      </Grid> */}
          <Grid container spacing={3}>
            <Label text={texts.addProductWebsite} className={classes.labelWrapper} />
            <TextFieldWrapper>
              <TextField
                name="website"
                fullWidth
                inputRef={register({
                  required: texts.registerErrorFieldRequired,
                })}
                variant="outlined"
                className={classes.textField}
                id="website"
                placeholder={texts.addProductsWebsitePlaceholder}
                helperText={errors.website && errors.website.message}
                disabled={loading}
                error={!!errors.website}
              />
            </TextFieldWrapper>
          </Grid>
          {/* <Grid container spacing={3}>
        <Label text={texts.addProductDevelopment} className={classes.labelWrapper} />
        <TextFieldWrapper>
          <TextField
            select
            fullWidth
            variant="outlined"
            className={classes.textField}
            id="productDevelopment"
            onChange={handleChange}
            placeholder={texts.addProductsCategoryPlaceholder}
          />
        </TextFieldWrapper>
      </Grid>
      <Grid container spacing={3}>
        <Label text={texts.addProductPrice} className={classes.labelWrapper} />
        <TextFieldWrapper>
          <TextField
            select
            fullWidth
            variant="outlined"
            className={classes.textField}
            id="addPrice"
            onChange={handleChange}
            placeholder={texts.addProductsCategoryPlaceholder}
          />
        </TextFieldWrapper>
      </Grid>
      <Grid container spacing={3}>
        <Label text={texts.addProductsSupportedPlatform} className={classes.labelWrapper} />
        <TextFieldWrapper>
          <TextField
            select
            fullWidth
            variant="outlined"
            className={classes.textField}
            id="addSupportedPlatform"
            onChange={handleChange}
            placeholder={texts.addProductsCategoryPlaceholder}
          />
        </TextFieldWrapper>
      </Grid> */}
        </Section>
        <Box display="flex" justifyContent="flex-end" paddingY={theme.spacing.$1}>
          <Button type="submit" variant="contained" color="primary" disableElevation>
            {texts.addProductSubmitButtonText}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddProduct;
