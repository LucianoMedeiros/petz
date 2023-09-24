import { styled } from 'styled-components'

export const HomePageContainer = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 172px);
`
export const PageTitleText = styled.h1`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 5px var(--grey);
`
