import React from 'react';
import { TextField, FormLabel, Typography, Select, Grid, Input, Box, Paper, Button } from '@material-ui/core';
import { useStyles } from './AddProduct.styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useTexts from '../../hooks/useTexts';

const AddProduct: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  const [categoryName, setCategoryName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategoryName(event.target.value as string[]);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormLabel component="legend">
          <Typography variant="h4" gutterBottom>
            {texts.addProductFormTitle}
          </Typography>
        </FormLabel>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductProductLabel}</label>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                required
                id="standard-full-width"
                placeholder="What is the official name of your product"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductCategory}</label>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.textField}
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={categoryName}
                onChange={handleChange}
                input={<Input />}
                placeholder="Select Category"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductGroup}</label>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.textField}
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={categoryName}
                onChange={handleChange}
                input={<Input />}
                placeholder="Select Category"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductDescription}</label>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField
                className={classes.textBox}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Lorem Ipsum"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductProductLabel}</label>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">
                {texts.addProductButton} <CloudUploadIcon />
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductWebsite}</label>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                required
                id="standard-full-width"
                placeholder="Link to the product's website"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductDevelopment}</label>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.textField}
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={categoryName}
                onChange={handleChange}
                input={<Input />}
                placeholder="Select Category"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductPrice}</label>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.textField}
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={categoryName}
                onChange={handleChange}
                input={<Input />}
                placeholder="Select Category"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>{texts.addProductsSupportedPlatform}</label>
            </Grid>
            <Grid item xs={6}>
              <Select
                className={classes.textField}
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                multiple
                value={categoryName}
                onChange={handleChange}
                input={<Input />}
                placeholder="Select Category"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Box display="flex" justifyContent="flex-end" m={1} p={1}>
            <Button variant="outlined" color="primary">
              {texts.addProductFormTitle}
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default AddProduct;
