import React from 'react';
import { Card, CardMedia, CardContent, Button, Typography, Box, Grid, Chip } from '@material-ui/core';
import { useStyles } from './ProductInfoCard.styles';
import useTexts from '../../hooks/useTexts';
import { Rating } from '@material-ui/lab';
import { Email, Home, Label, Language, Phone } from '@material-ui/icons';
import { IProduct } from '../../schemas';
import { theme } from '../../utils/theme';
import getBaseUri from '../../utils/getBaseUri';
import defaultImage from '../../images/no-image.jpg';

interface Props {
  product: IProduct;
}

const ProductInfoCard: React.FC<Props> = ({ product }) => {
  const texts = useTexts();
  const classes = useStyles();

  const categories = product?.categories;
  const rating = product?.rating || 0;
  const image = product.images.length > 0 ? `${getBaseUri()}${product.images[0].url}` : defaultImage;
  return (
    <Card elevation={0} className={classes.paper}>
      <CardContent>
        <Box className={classes.container}>
          <Box className={classes.leftCol}>
            <CardMedia className={classes.cover} image={image} title="Products" />
            <Button variant="contained" size="small" color="primary">
              {texts.productInfoCardButtonText}
            </Button>
          </Box>

          <Box className={classes.rightCol}>
            <Typography variant="h4">{product?.name}</Typography>
            <Box marginTop={theme.spacing.$1} className={classes.ratingBox}>
              <Rating name="read-only" value={rating} readOnly />
              <span>
                {rating} {texts.productInfoCardRating}
              </span>
            </Box>
            <Box marginTop={theme.spacing.$2}>
              <Typography variant="h6">{texts.productInfoCardSubtitle2}</Typography>
              <Box className={classes.categoryChip}>
                {categories &&
                  categories.map((category) => (
                    <Chip icon={<Label />} key={category.id} size="small" label={category.name} />
                  ))}
              </Box>
            </Box>
            <Box marginTop={theme.spacing.$2}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12}>
                  <Typography variant="h6">{texts.productInfoCardPrice}</Typography>
                  <Typography variant="subtitle1">{texts.productInfoCardPriceSubtitle}</Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Typography variant="h6">{texts.productInfoCardGrade}</Typography>
                  <Typography variant="subtitle1">{texts.productInfoCardGradeSubtitle}</Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Typography variant="h6">{texts.productInfoCardPlatform}</Typography>
                  <Typography variant="subtitle1">{texts.productInfoCardPlatformSubtitle}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className={classes.infoBox}>
            <Typography component="h5" variant="h5">
              {texts.productPageBodyCompanyProfileTitle}
            </Typography>
            <Typography variant="subtitle1">{texts.productPageBodyCompanyProfileSubtitle}</Typography>
            <Box marginTop={theme.spacing.$2}>
              <Typography component="h5" variant="h5">
                {texts.productPageBodyCompanyProfileContact}
              </Typography>
              <Box className={classes.companyInfo}>
                <Email />
                <Typography variant="subtitle1">sampleEmail@mail.com</Typography>
              </Box>
              <Box className={classes.companyInfo}>
                <Phone />
                <Typography variant="subtitle1">+31 992 001 992</Typography>
              </Box>
              <Box className={classes.companyInfo}>
                <Language />
                <Typography variant="subtitle1">fakewbsite.com</Typography>
              </Box>
              <Box className={classes.companyInfo}>
                <Home />
                <Typography variant="subtitle1">Tokyo, Japan, Hakayada Street, 99</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ProductInfoCard;
