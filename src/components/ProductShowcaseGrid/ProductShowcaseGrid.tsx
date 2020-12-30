import React, { useMemo } from 'react';
import { Paper, Typography, ButtonBase, Box, Button, Link, Hidden } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './ProductShowcaseGrid.styles';
import useTexts from '../../hooks/useTexts';
import { Fade } from 'react-awesome-reveal';
import useResponsive from '../../hooks/useResponsive';
import { theme } from '../../utils/theme';

const ProductShowcaseGrid: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  const { isTabletOrMobile } = useResponsive();
  const imageSize = isTabletOrMobile ? 80 : 150;

  const rating = useMemo(() => <Rating name="rating" readOnly value={Math.round(Math.random() * 5)} />, []);

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
          <Box marginBottom={theme.spacing.$1} flex={5} display="flex" flexDirection="column">
            <Link href="#" variant="h6" color="inherit" display="block">
              Product Title
            </Link>
            <Typography variant="caption" color="textSecondary" gutterBottom>
              {texts.productShowcaseByCompanyPrefix}{' '}
              <Link href="#" color="inherit">
                company name
              </Link>
            </Typography>
            <Hidden mdUp>{rating}</Hidden>
            <Hidden smDown>
              <Typography variant="body2" gutterBottom>
                Shortened version of the product description here.
              </Typography>
            </Hidden>
          </Box>

          <Hidden mdUp>
            Shortened version of the product description here.Shortened version of the product description
            here.Shortened version of the product description here.Shortened version of the product description here.
          </Hidden>

          <Hidden smDown>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Box>
                {rating}
                <Typography variant="subtitle1" align="right">
                  {Math.round(Math.random() * 60)} {texts.productsShowcaseGridreview}
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

export default ProductShowcaseGrid;
