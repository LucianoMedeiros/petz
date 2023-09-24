import { styled } from 'styled-components'

export const SelectContainer = styled.div`
  &.inline {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;

    label {
      line-height: 45px;
      padding-right: 20px;
      width: 20%;
    }

    & > div {
      width: 80%;
    }

    input[type='text'] {
      margin: 0;
    }

    button {
      top: 8px;
    }
  }
`

export const SelectField = styled.select`
  background-color: transparent;
  width: 100%;
  border: none;
  padding: 0 14px;
  appearance: none;
  cursor: pointer;
`
export const Option = styled.option``

export const SelectLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  display: block;
`

const cssCommonArrow = `
  background-color: var(--red);
  content: '';
  width: 2px;
  height: 16px;
  position: absolute;
  top: 14px;
  display: block;
  border-radius: 10px;
`

export const SelectTextFieldContainer = styled.div`
  width: 100%;
  height: 45px;
  line-height: 45px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--light-grey);
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0;
  position: relative;
  z-index: 1;
  display: flex;
  cursor: pointer;

  &:after {
    ${cssCommonArrow}
    right: 15px;
    transform: rotate(20deg);
  }

  &:before {
    ${cssCommonArrow}
    right: 21px;
    transform: rotate(-20deg);
  }

  &.open {
    &:after {
      transform: rotate(340deg);
    }
    &:before {
      transform: rotate(20deg);
    }
  }
`
