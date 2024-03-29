import { styled } from 'styled-components'

export const SafeAreaContainer = styled.section`
  width: 100%;
  transition: width 0.5s;

  @media screen and (min-width: 576px) {
    width: 540px;
  }
  @media screen and (min-width: 768px) {
    width: 720px;
  }
  @media screen and (min-width: 992px) {
    width: 960px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
  @media screen and (min-width: 1400px) {
    width: 1320px;
  }
`
