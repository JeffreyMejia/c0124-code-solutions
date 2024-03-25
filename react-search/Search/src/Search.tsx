import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { List } from './List';

type SearhProps = {
  quotes: string[];
};

export function Search({ quotes }: SearhProps) {
  const [search, setSearch] = useState('');
  const searchFilter = quotes.filter((quote) =>
    quote.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <SearchBar value={search} search={(e) => setSearch(e.target.value)} />
      <List list={searchFilter} />
      {searchFilter.length === 0 ? <p>No items match the filter</p> : undefined}
    </>
  );
}
