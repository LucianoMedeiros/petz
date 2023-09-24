import { styled } from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--grey);
  min-height: 72px;

  & .safe-area {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: white;
`
