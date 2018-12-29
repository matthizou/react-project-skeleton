import React from 'react'
import styled from 'styled-components'
import { Button } from '../'
// import { media } from '../../style/media'

const Main = styled.main`
  display: flex;
  align-items: stretch;
  text-align: left;
  padding-top: 4.75em; /* 76px / 16px */
  min-width: 20em;
`

const LeftSection = styled.section`
  flex: 1;
  border-right: 1px solid ${props => props.theme.verticalSeparatorColor};
`
const RightSection = styled.section`
  flex: 1;
`
const InnerSection = styled.div`
  width: 67.1875%;
  margin: auto;
`

/** Top level component */
export const App = () => (
  <Main>
    <LeftSection>
      <InnerSection>
        <Button> Click me </Button>
      </InnerSection>
    </LeftSection>
    <RightSection>
      <InnerSection>
        <Button> Click me </Button>
      </InnerSection>
    </RightSection>
  </Main>
)
