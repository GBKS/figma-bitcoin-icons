import Fuse from 'fuse.js'
import React from 'react'

function useSearch(query: string, icons: {
  name: string;
  svg: string;
}[]) {
  const [results, setResults] = React.useState([...icons]);

  let fuse = new Fuse([...icons], {
    threshold: 0.2,
    keys: ['name'],
  })

  React.useEffect(() => {
    if (query.trim()) {
      setResults(fuse.search(query.trim()).map((result) => result.item));
    } else {
      setResults([...icons])
    }
  }, [query])

  React.useEffect(() => {
    fuse = new Fuse([...icons], {
      threshold: 0.2,
      keys: ['name'],
    });
    if (query.trim()) {
      setResults(fuse.search(query.trim()).map((result) => result.item));
    } else {
      setResults([...icons])
    }
  }, [icons])
  return results
}

export default useSearch
