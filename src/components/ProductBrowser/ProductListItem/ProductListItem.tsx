import React, { useMemo } from 'react';
import { Paper, Typography, ButtonBase, Box, Button, Link, Hidden, Chip } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './ProductListItem.styles';
import useTexts from '../../../hooks/useTexts';
import { Fade } from 'react-awesome-reveal';
import { theme } from '../../../utils/theme';
import { ICategory } from '../../../schemas';
import { Label } from '@material-ui/icons';
import getBaseUri from '../../../utils/getBaseUri';
import { useHistory } from 'react-router-dom';
import defaultImage from '../../../images/no-image.jpg';

interface Props {
  id: string;
  title?: string;
  byUser?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  imageURL?: string;
  categories?: ICategory[];
}

const getShortDescription = (description = ''): string => {
  const MAX_SIZE = 100;
  if (description.length < MAX_SIZE) return description;
  else return description.substring(0, MAX_SIZE) + '...';
};

const ProductListItem: React.FC<Props> = ({
  id,
  title,
  byUser,
  description,
  rating,
  reviews,
  categories,
  imageURL,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const texts = useTexts();

  const productLink = `/product/${id}`;
  const image = imageURL ? getBaseUri() + imageURL : defaultImage;

  const handleRedirect = () => {
    history.push(productLink);
  };

  const ratingComponent = useMemo(
    () => (
      <Box display="flex" alignItems="center">
        <Typography variant="h6" className={classes.ratingText}>
          {rating || ''}
        </Typography>
        <Rating name="rating" precision={0.5} readOnly value={rating} style={{ marginLeft: `5px` }} />
      </Box>
    ),
    [classes.ratingText, rating]
  );

  return (
    <Fade direction="up" duration={500}>
      <Paper elevation={0} className={classes.paper}>
        <Box className={classes.flexWrap}>
          <ButtonBase onClick={handleRedirect}>
            <img className={classes.img} alt="complex" src={image} />
          </ButtonBase>
          <Box
            marginBottom={theme.spacing.$1}
            flex={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Link href={productLink} variant="h6" color="inherit" display="block">
                {title}
              </Link>
              <Typography variant="caption" color="textSecondary" gutterBottom>
                {texts.productShowcaseByCompanyPrefix}{' '}
                <Link href="#" color="inherit">
                  {byUser}
                </Link>
              </Typography>
              <Hidden mdUp>{ratingComponent}</Hidden>
              <Hidden smDown>
                <Typography variant="body2" gutterBottom>
                  {getShortDescription(description)}
                </Typography>
              </Hidden>
            </Box>
            <Box className={classes.categoryChip}>
              {categories &&
                categories.map((category) => (
                  <Chip icon={<Label></Label>} key={category.id} size="small" label={category.name} />
                ))}
            </Box>
          </Box>

          <Hidden mdUp>{getShortDescription(description)}</Hidden>

          <Hidden smDown>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Box>
                {ratingComponent}
                <Typography variant="subtitle1" align="right">
                  {reviews} {texts.productsShowcaseGridreview}
                </Typography>
              </Box>
              <Button variant="outlined" color="secondary" onClick={handleRedirect}>
                {texts.productShowcaseViewButtonText}
              </Button>
            </Box>
          </Hidden>
        </Box>
      </Paper>
    </Fade>
  );
};

export default ProductListItem;
