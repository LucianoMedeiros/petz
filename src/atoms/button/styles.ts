import { darken } from 'polished'
import { styled } from 'styled-components'

export const ButtonContainer = styled.button.attrs({ type: 'button' })`
  background-color: var(--red);
  height: 42px;
  line-height: 42px;
  color: white;
  border: none;
  padding: 0 15px;
  border-radius: 21px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#E40F0F')};
  }

  &.secondary {
    background-color: white;
    border: 1px solid var(--grey);
    color: var(--grey);
    font-weight: 700;

    &:hover {
      background-color: var(--grey);
      color: white;
    }
  }

  &.icon-button {
    background-color: white;
    border: 2px solid var(--red);
    color: var(--red);
    font-weight: 900;
    font-size: 20px;
    width: 42px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: var(--red);
      color: white;
    }
  }

  &:disabled {
    color: #ddd;
    border: none;
    cursor: no-drop;
    background-color: var(--light-grey);
    &:hover {
      background-color: var(--light-grey);
      color: #ddd;
    }
  }
`
