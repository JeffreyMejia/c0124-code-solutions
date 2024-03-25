import { ChangeEvent } from 'react';

type Props = {
  search: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function SearchBar({ search, value }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => search(e)}
      type="text"
      placeholder="Search"
    />
  );
}
