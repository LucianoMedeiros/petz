import Link from 'next/link'
import { styled } from 'styled-components'

export const BreadcrumbItemContainer = styled.li`
  &:not(:last-child) {
    &:after {
      content: '>';
      font-weight: 300;
      font-size: 12px;
      color: white;
      margin: 0 5px;
    }
  }
`

export const BreadcrumbItemLink = styled(Link)`
  background-color: var(--red);
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`
