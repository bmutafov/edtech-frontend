import qs from 'qs';
import { useEffect, useState } from 'react';
import { FiltersCheckboxState } from './FilterBar/FilterBar';

type SearchClause = unknown[];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchClause[]>([]);
  const [searchByString, setSearchByString] = useState<SearchClause[]>([]);

  const onFilterApplied = (_filters: FiltersCheckboxState): void => {
    const ratingsFilter: SearchClause = _filters.rating.map((r: string) => [{ rating_gt: +r - 1, rating_lte: +r }]);

    setFilters([[{ 'categories.id_in': _filters.category }], [{ _or: [...ratingsFilter] }]]);
  };

  const onSearchQueryChanged = (_searchQuery: string) => {
    const clauses =
      _searchQuery !== ''
        ? [
            [{ name_contains: _searchQuery }],
            [{ 'user.username_contains': _searchQuery }],
            [{ website_contains: _searchQuery }],
          ]
        : [];

    setSearchByString([...clauses]);
  };

  useEffect(() => {
    const query = qs.stringify({
      _where: [...filters, { _or: [...searchByString] }],
    });

    setSearchQuery(query);
  }, [filters, searchByString]);

  return {
    searchQuery,
    onSearchQueryChanged,
    onFilterApplied,
  };
};

export default useFilters;
