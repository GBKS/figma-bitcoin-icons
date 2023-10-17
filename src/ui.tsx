import { Global, jsx } from '@emotion/react'
import packageJson from '@bitcoin-design/bitcoin-icons-svg/package.json'
import { useState } from 'react'
import type React from 'react'
import { createRoot } from 'react-dom/client'
import IconButton from './components/icon-button'
import SearchInput from './components/search-input'
import theme from './theme'
import './ui.css'
import useSearch from './use-search'
import * as filledIcons from "@bitcoin-design/bitcoin-icons-svg/filled/index.js";
import * as outlineIcons from "@bitcoin-design/bitcoin-icons-svg/outline/index.js";
import Toggle from 'react-toggle'

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

function toCapitalizedWords(name: string) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
}

function App() {
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
  const [availableIcons, setAvailableIcons] = useState([...allOutlineIcons]);
  const [query, setQuery] = useState('')
  const results = useSearch(query, availableIcons)
  const handleOutlineChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setAvailableIcons(target.checked ? [...allFilledIcons] : [...allOutlineIcons]);
  }
  return (
    <div>
      <Global
        styles={{ body: { margin: 0, fontFamily: 'Inter, sans-serif' } }}
      />
      <SearchInput
        value={query}
        onChange={event => setQuery(event.target.value)}
        css={{
          position: 'sticky',
          top: 0,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      />
      <div
        className="filledIconsToggle"
        css={{
              height: '3rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
      >
        <label htmlFor='isFilled'
          css={{
            marginRight: '1rem',
          }}>Outlined</label>
        <Toggle
          id='isFilled'
          defaultChecked={false}
          icons={false}
          onChange={handleOutlineChange} />
        <label htmlFor='isFilled'
          css={{
            marginLeft: '1rem',
          }}>Filled</label>
      </div>
      <div css={{ padding: theme.space[2] }}>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridGap: theme.space[1],
          }}
        >
          {results.map(icon => (
            <IconButton name={icon.name} contents={icon.svg} />
          ))}
        </div>
        <div
          css={{
            marginTop: theme.space[2],
            padding: theme.space[2],
            fontSize: theme.fontSizes[0],
            color: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          Bitcoin Icons v{packageJson.version}
        </div>
      </div>
    </div>
  )
}

const container = document.getElementById('react-page')
const root = createRoot(container!)
root.render(<App />)
