import { styled } from 'styled-components'

export const InputTextContainer = styled.div``

export const InputTextLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  display: block;
`
export const InputTextField = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 45px;
  line-height: 45px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--light-grey);
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0;
  padding: 14px;
`
