import React from 'react';
import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Typography,
  Select,
  Grid,
  MenuItem,
  Input,
  Box,
  Paper,
  Button,
} from '@material-ui/core';
import { useStyles } from './AddProduct.styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const AddProduct: React.FC = () => {
  const classes = useStyles();
  const [categoryName, setCategoryName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategoryName(event.target.value as string[]);
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormLabel component="legend">
          <Typography variant="h4" gutterBottom>
            Add Product
          </Typography>
        </FormLabel>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>Product Name</label>
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
              <label>Category</label>
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
              <label>Group</label>
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
              <label>Description</label>
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
              <label>Product Name</label>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">
                Upload <CloudUploadIcon />
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <label>Website</label>
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
      </Paper>
    </div>
  );
};

export default AddProduct;
