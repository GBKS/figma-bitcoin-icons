import { Global, jsx } from '@emotion/react'
import packageJson from '@runcitadel/bitcoin-icons-svg/package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import IconButton from './components/icon-button'
import SearchInput from './components/search-input'
import theme from './theme'
import './ui.css'
import useSearch from './use-search'
import * as filledIcons from "@runcitadel/bitcoin-icons-svg/filled/index.js";
import * as outlineIcons from "@runcitadel/bitcoin-icons-svg/outline/index.js";
import Toggle, { type ToggleProps } from 'react-toggle'

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
  const [availableIcons, setAvailableIcons] = React.useState([...allOutlineIcons]);
  const [query, setQuery] = React.useState('')
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
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
            }}
      >
        <Toggle
          id='isFilled'
          defaultChecked={false}
          icons={false}
          onChange={handleOutlineChange} />
        <label htmlFor='isFilled'
          css={{
            marginRight: '1rem',
          }}>Use filled icons</label>
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

ReactDOM.render(<App />, document.getElementById('react-page'))
