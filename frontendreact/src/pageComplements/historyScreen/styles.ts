import styled from 'styled-components'
import { colors } from '../../core/helpers'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Content = styled.div`
margin-top:5vh;
min-width:700px;
min-height:500px;
width:65vw;
border-radius:10px;
background-color:${colors().background};
border:1px ${colors().gray1} solid;
`

export const HistContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #00a1ff;
`;
