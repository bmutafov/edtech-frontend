import React from 'react';
import { Card, CardContent, Button, Typography, Box, Grid, CardMedia } from '@material-ui/core';
import { useStyles } from './ProductPageBody.styles';
import { Rating } from '@material-ui/lab';
import { LocationCity, People } from '@material-ui/icons';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import useTexts from '../../hooks/useTexts';

const ProductPageBody: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(4);
  const [usabilityValue, setUsabilityValue] = React.useState<number | null>(2);
  const [engagementValue, setEngagementValue] = React.useState<number | null>(1);
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <div>
              <Card>
                <div className={classes.details}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {texts.productPageBodyDevelopmentTitle}
                    </Typography>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyDevelopmentSubtitle}</Typography>
                    </div>
                    <Typography component="h5" variant="h5">
                      {texts.productPageBodyDevelopmentTitle2}
                    </Typography>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyDevelopmentSubtitle2}</Typography>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
            <div className={classes.root1}>
              <Grid item xs={12}>
                <Card>
                  <div>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <CardContent>
                          <Typography component="h5" variant="h5">
                            {texts.productPageBodyReviewTitle}
                          </Typography>
                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating
                                  name="read-only"
                                  value={value}
                                  readOnly
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyOverall}</Box>
                            </Box>
                          </div>
                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating
                                  name="read-only"
                                  value={usabilityValue}
                                  readOnly
                                  onChange={(event, newValue) => {
                                    setUsabilityValue(newValue);
                                  }}
                                />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyUsability}</Box>
                            </Box>
                          </div>

                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating
                                  name="read-only"
                                  value={engagementValue}
                                  readOnly
                                  onChange={(event, newValue) => {
                                    setEngagementValue(newValue);
                                  }}
                                />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyEngagement}</Box>
                            </Box>
                          </div>
                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating name="read-only" value={value} readOnly />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyEffective}</Box>
                            </Box>
                          </div>
                          <div>
                            <Button size="medium" variant="outlined" color="primary">
                              {texts.productPageBodyButtonText}
                            </Button>
                          </div>
                        </CardContent>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CardContent>
                          <Typography component="h5" variant="h5">
                            {texts.productPageBodyReviewTitle2}
                          </Typography>
                          {arrayIndexingWithLength(3).map((v) => (
                            <Button className={classes.button} size="small" variant="contained" disabled key={v}>
                              {texts.productPageBodyDisabledText1}
                            </Button>
                          ))}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            </div>
            <div className={classes.root1}>
              <Grid item xs={12}>
                <Card>
                  <Grid container>
                    <Grid item xs={2}>
                      <CardMedia className={classes.cover} image="emptyimage.jpg" title="Products" />
                    </Grid>
                    <Grid item xs={10}>
                      <div className={classes.details}>
                        <CardContent>
                          <Typography component="h5" variant="h5">
                            {texts.productPageBodyAccountTitle}
                          </Typography>
                          <div>
                            <Typography variant="subtitle1">{texts.productPageBodyAccountSubtitle}</Typography>
                          </div>
                          <Typography className={classes.root1} component="h5" variant="h5">
                            {texts.productPageBodyAccountTitle2}
                          </Typography>
                          <div className={classes.root1}>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating
                                  name="read-only"
                                  value={value}
                                  readOnly
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyOverall}</Box>
                            </Box>
                          </div>
                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating
                                  name="read-only"
                                  value={usabilityValue}
                                  readOnly
                                  onChange={(event, newValue) => {
                                    setUsabilityValue(newValue);
                                  }}
                                />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyUsability}</Box>
                            </Box>
                          </div>

                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating
                                  name="read-only"
                                  value={engagementValue}
                                  readOnly
                                  onChange={(event, newValue) => {
                                    setEngagementValue(newValue);
                                  }}
                                />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyEngagement}</Box>
                            </Box>
                          </div>
                          <div>
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <Rating name="read-only" value={value} readOnly />
                              </Box>
                              <Box ml={2}>{texts.productPageBodyEffective}</Box>
                            </Box>
                          </div>
                          <Typography variant="subtitle1" className={classes.root1}>
                            {texts.productPageBodyAccountSubtitle2}
                          </Typography>
                          <Grid container className={classes.root1}>
                            <Grid item xs={2} md={1}>
                              <LocationCity />
                            </Grid>
                            <Grid item xs={10}>
                              <Typography>{texts.productPageBodyEducationalInstitution}</Typography>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={2} md={1}>
                              <People />
                            </Grid>
                            <Grid item xs={10}>
                              <Typography>{texts.productPageBodyNumberOfPeople}</Typography>
                            </Grid>
                          </Grid>
                          <Grid container className={classes.root1}>
                            <Grid item xs={12} md={6}>
                              <Typography component="h5" variant="h5">
                                {texts.productPageBodyReviewTitle2}
                              </Typography>
                              <Button className={classes.button} size="small" variant="contained" disabled>
                                {texts.productPageBodyDisabledText1}
                              </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Typography component="h5" variant="h5">
                                {texts.productPageBodyDrawbacks}
                              </Typography>
                              <Button className={classes.button} size="small" variant="contained" disabled>
                                {texts.productPageBodyDisabledText2}
                              </Button>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </div>
          </Grid>
          <Grid item md={3}>
            <Card>
              <div className={classes.details}>
                <div className={classes.details}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {texts.productPageBodyCompanyProfileTitle}
                    </Typography>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyCompanyProfileSubtitle}</Typography>
                    </div>
                    <Typography component="h5" variant="h5">
                      {texts.productPageBodyCompanyProfileContact}
                    </Typography>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyCompanyProfileEmail}</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyCompanyProfileNumber}</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyCompanyProfileWebsite}</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">{texts.productPageBodyCompanyProfilelocation}</Typography>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ProductPageBody;
