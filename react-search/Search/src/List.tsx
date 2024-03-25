type Props = {
  list: string[];
};

export function List({ list }: Props) {
  const listItems = list.map((quote, index) => <li key={index}>{quote}</li>);

  return <ul className="quote-list">{listItems}</ul>;
}
