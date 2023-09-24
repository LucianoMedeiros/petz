import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

export const _sizeOpened = '210px'
export const _sizeClosed = '60px'
export const _space = '13px'

const collapseLogo = keyframes`
  0% {
    width: ${_sizeOpened};
  }
  100% {
    width: ${_sizeClosed};
  }
`

export const LogoContainer = styled(Link)`
  background-color: var(--red);
  width: ${_sizeOpened};
  display: inline-flex;
  align-items: center;
  gap: ${_space};
  padding: ${_space};
  border-radius: 30px;
  transition: width 0.5s;

  &.collapse {
    animation: ${collapseLogo} 1s forwards 5s;

    &:hover {
      width: ${_sizeOpened} !important;
    }
  }
`

export const LogoText = styled.span`
  color: white;
  white-space: nowrap;
  transition: all 0.5s;
  text-overflow: clip;
  overflow: hidden;
`
