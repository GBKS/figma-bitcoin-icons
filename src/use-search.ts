import Fuse from 'fuse.js'
import { useEffect, useState } from 'react'

function useSearch(query: string, icons: {
  name: string;
  svg: string;
}[]) {
  const [results, setResults] = useState([...icons]);

  let fuse = new Fuse([...icons], {
    threshold: 0.2,
    keys: ['name'],
  })

  useEffect(() => {
    if (query.trim()) {
      setResults(fuse.search(query.trim()).map((result) => result.item));
    } else {
      setResults([...icons])
    }
  }, [query])

  useEffect(() => {
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
