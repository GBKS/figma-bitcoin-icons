import * as filledIcons from "@runcitadel/bitcoin-icons-svg/filled";
import * as outlineIcons from "@runcitadel/bitcoin-icons-svg/outline";
import Fuse from 'fuse.js'
import React from 'react'

function toCapitalizedWords(name: string) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
}

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}


function useSearch(query: string) {
  const allFilledIcons = Object.values(filledIcons).map(icon => {
    return {
      name: toCapitalizedWords(icon.name + "Filled"),
      svg: icon.svg
    }
  });
  const allOutlineIcons = Object.values(outlineIcons).map(icon => {
    return {
      name: toCapitalizedWords(icon.name + "Outline"),
      svg: icon.svg
    }
  });
  const [results, setResults] = React.useState([...allFilledIcons, ...allOutlineIcons]);

  const fuse = new Fuse([...allFilledIcons, ...allOutlineIcons], {
    threshold: 0.2,
    keys: ['name'],
  })

  React.useEffect(() => {
    if (query.trim()) {
      setResults(fuse.search(query.trim()).map((result) => result.item));
    } else {
      setResults([...allFilledIcons, ...allOutlineIcons])
    }
  }, [query])

  return results
}

export default useSearch
