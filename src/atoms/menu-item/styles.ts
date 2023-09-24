import Link from 'next/link'
import { darken } from 'polished'
import { styled } from 'styled-components'

export const _size = '40px'

export const MenuItemContainer = styled.li``

export const MenuItemLink = styled(Link)`
  color: var(--red);
  height: ${_size};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  border-radius: ${_size};
  padding: 0 24px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.08, '#fff')};
  }

  &.highlighted {
    color: white;
    background-color: var(--red);
    &:hover {
      background: ${darken(0.1, '#E40F0F')};
    }
  }
`
