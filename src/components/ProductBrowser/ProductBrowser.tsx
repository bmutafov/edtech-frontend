import React, { useEffect, useMemo, useRef, useState } from 'react';
import ProductListItem from './ProductListItem';
import { useStyles } from './ProductBrowser.styles';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';

import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import { theme } from '../../utils/theme';
import useResponsive from '../../hooks/useResponsive';
import useGetRequest from '../../hooks/useGetRequest';
import { IProduct } from '../../schemas';
import useFilters from './useFilters';

interface ProductCount {
  count?: number;
}

const ProductBrowser: React.FC = () => {
  const classes = useStyles();
  const { isTabletOrMobile } = useResponsive();

  const PAGE_SIZE = 15;
  const isFirstRender = useRef(true);
  const [pageOffset, setPageOffset] = useState(PAGE_SIZE);

  const [products, setProducts] = useState<IProduct[]>([]);
  const { data, loading, refetch } = useGetRequest<IProduct[]>(`/products`, { start: 0, limit: PAGE_SIZE });
  const { data: count, loading: countLoading, refetch: refetchCount } = useGetRequest<ProductCount>(`/products/count`);

  const { onFilterApplied, onSearchQueryChanged, searchQuery } = useFilters();

  const loadMore = () => {
    if (!loading && !countLoading && products.length < (count || 0)) {
      setPageOffset((_offset) => _offset + PAGE_SIZE);
      refetch({ start: pageOffset, limit: PAGE_SIZE, query: searchQuery });
    }
  };

  useEffect(() => {
    if (data) {
      setProducts([...products, ...data]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setProducts([]);
    setPageOffset(0);
    refetch({ query: searchQuery, start: 0, limit: PAGE_SIZE });
    refetchCount({ query: searchQuery });
  }, [refetch, refetchCount, searchQuery]);

  const mappedProducts = useMemo(
    () =>
      products.map((product) => (
        <ProductListItem
          id={product.id}
          key={product.id}
          title={product.name}
          byUser={product.user.username}
          description={product.description}
          reviews={product.reviews.length}
          rating={product.rating}
          categories={product.categories}
          imageURL={product.images[0]?.url as string}
        />
      )),
    [products]
  );

  const emptyState = useMemo(
    () => (
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginY={theme.spacing.$3}>
        <img src="/images/search.png" className={classes.emptyState} />
        <Typography variant="h6">No results found</Typography>
      </Box>
    ),
    [classes.emptyState]
  );

  return (
    <Box
      bgcolor="white"
      display="flex"
      flexDirection={isTabletOrMobile ? 'column' : 'row'}
      padding={theme.spacing.$3}
      paddingTop={theme.spacing.$3}
    >
      <Box flex={1}>
        <FilterBar onFilterApplied={onFilterApplied} />
      </Box>
      <Box flex={3}>
        <Box marginBottom={theme.spacing.$3}>
          <SearchBar onSubmit={onSearchQueryChanged} />
        </Box>
        <Box className={classes.flexContainer} position="relative">
          {loading ? (
            <Box className={products.length ? classes.loaderWrapper : ''}>
              <CircularProgress size={120} className={classes.loader} />
            </Box>
          ) : (
            <>
              Showing {products.length} of {count} results
            </>
          )}
          {!products.length && !loading && emptyState}
          {!!products.length && (
            <InfiniteScroll pageStart={pageOffset} loadMore={loadMore} hasMore={!!data?.length && !loading}>
              {mappedProducts}
            </InfiniteScroll>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBrowser;
