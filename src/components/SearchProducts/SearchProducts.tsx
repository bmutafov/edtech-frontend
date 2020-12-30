import React, { useState } from 'react';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseGrid from '../ProductShowcaseGrid';
import { useStyles } from './SearchProducts.styles';
import { Box, LinearProgress } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';

import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import { theme } from '../../utils/theme';
import useResponsive from '../../hooks/useResponsive';

const SearchProducts: React.FC = () => {
  const classes = useStyles();
  const { isTabletOrMobile } = useResponsive();

  // ! Temporary till we fetch real data
  const [itemCount, setItemCount] = useState(5);

  const loadMore = () => {
    setTimeout(() => setItemCount((prev) => prev + 10), 1000);
  };

  return (
    <Box
      bgcolor="white"
      display="flex"
      flexDirection={isTabletOrMobile ? 'column' : 'row'}
      padding={theme.spacing.$3}
      paddingTop={theme.spacing.$3}
    >
      <Box flex={1}>
        <SideBar />
      </Box>
      <Box flex={3}>
        <Box marginBottom={theme.spacing.$3}>
          <SearchBar />
        </Box>
        <Box className={classes.flexContainer}>
          Showing {itemCount} results
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={itemCount < 30}
            loader={<LinearProgress color="secondary" key={0} />}
          >
            {arrayIndexingWithLength(itemCount).map((v) => (
              <ProductShowcaseGrid key={v} />
            ))}
          </InfiniteScroll>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchProducts;
