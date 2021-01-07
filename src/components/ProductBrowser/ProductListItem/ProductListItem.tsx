import React, { useMemo } from 'react';
import { Paper, Typography, ButtonBase, Box, Button, Link, Hidden, Chip } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './ProductListItem.styles';
import useTexts from '../../../hooks/useTexts';
import { Fade } from 'react-awesome-reveal';
import useResponsive from '../../../hooks/useResponsive';
import { theme } from '../../../utils/theme';
import { ICategory } from '../../../schemas';
import { Label } from '@material-ui/icons';

interface Props {
  title?: string;
  byUser?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  categories?: ICategory[];
}

const getShortDescription = (description = ''): string => {
  const MAX_SIZE = 100;
  if (description.length < MAX_SIZE) return description;
  else return description.substring(0, MAX_SIZE) + '...';
};

const ProductListItem: React.FC<Props> = ({ title, byUser, description, rating, reviews, categories }) => {
  const classes = useStyles();
  const texts = useTexts();
  const { isTabletOrMobile } = useResponsive();
  const imageSize = isTabletOrMobile ? 80 : 150;

  const ratingComponent = useMemo(() => <Rating name="rating" precision={0.5} readOnly value={rating} />, [rating]);

  return (
    <Fade direction="up" duration={500}>
      <Paper elevation={0} className={classes.paper}>
        <Box className={classes.flexWrap}>
          <ButtonBase>
            <img
              className={classes.img}
              alt="complex"
              src={`//unsplash.it/${imageSize}/${imageSize}`}
              width={imageSize}
              height={imageSize}
            />
          </ButtonBase>
          <Box
            marginBottom={theme.spacing.$1}
            flex={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Link href="#" variant="h6" color="inherit" display="block">
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
                  <Chip
                    icon={<Label></Label>}
                    key={category.id}
                    // variant="outlined"
                    size="small"
                    label={category.name}
                  />
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
              <Button variant="outlined" color="secondary">
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
