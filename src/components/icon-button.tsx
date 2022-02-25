import { jsx } from '@emotion/react'
import theme from '../theme'

interface IconButtonProps {
  name: string
  contents: string
}

function IconButton({ name, contents }: IconButtonProps) {
  return (
    <button
      key={name}
      aria-label={name}
      onClick={() => parent.postMessage({ pluginMessage: { type: name } }, '*')}
      css={{
        padding: theme.space[2],
        color: '#333',
        background: 'transparent',
        border: 0,
        borderRadius: theme.radii[1],
        appearance: 'none',
        outline: 0,
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.06)',
        },
        '&:focus, &:active': {
          boxShadow: `inset 0 0 0 2px ${theme.colors.blue}`,
        },
      }}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  )
}

export default IconButton
