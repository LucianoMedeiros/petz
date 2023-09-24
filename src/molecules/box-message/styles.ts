import { styled } from 'styled-components'

export const BoxMessageContainer = styled.div`
  margin: 30px auto;
  width: 400px;
  border-radius: 8px;
  border: 1px solid var(--light-red);
  padding: 20px 20px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: rgba(223, 134, 134, 0.04);

  &.error {
    width: 550px;
  }
`
export const BoxMessageTitle = styled.strong`
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  text-align: center;
  display: block;
`
export const BoxMessageDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: center;
  color: var(--light-grey);
`
export const BoxMessageErrorList = styled.ul`
  list-style-type: square;
  padding-left: 20px;
`
export const BoxMessageErrorListItem = styled.li`
  font-size: 14px;
  margin-bottom: 10px;
`
