import { styled } from 'styled-components'

export const GridRowContainer = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${(props) => props.gap}px;
  margin-bottom: ${(props) => props.gap}px;

  &.vertical-align-bottom {
    align-items: flex-end;
  }
  &.vertical-align-middle {
    align-items: center;
  }
`
export const GridColContainer = styled.div`
  &.horizontal-align-center {
    display: flex;
    justify-content: center;
  }
  &.horizontal-align-right {
    display: flex;
    justify-content: flex-end;
  }
  &.grid-1 {
    width: calc(100% / 12 * 1);
  }
  &.grid-2 {
    width: calc(100% / 12 * 2);
  }
  &.grid-3 {
    width: calc(100% / 12 * 3);
  }
  &.grid-4 {
    width: calc(100% / 12 * 4);
  }
  &.grid-5 {
    width: calc(100% / 12 * 5);
  }
  &.grid-6 {
    width: calc(100% / 12 * 6);
  }
  &.grid-7 {
    width: calc(100% / 12 * 7);
  }
  &.grid-8 {
    width: calc(100% / 12 * 8);
  }
  &.grid-9 {
    width: calc(100% / 12 * 9);
  }
  &.grid-10 {
    width: calc(100% / 12 * 10);
  }
  &.grid-11 {
    width: calc(100% / 12 * 11);
  }
  &.grid-12 {
    width: calc(100% / 12 * 12);
  }
`
