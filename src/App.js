/** @jsx jsx */
import { jsx, css} from '@emotion/core'
import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import './App.css';

const PinkDiv = styled.div`
color:pink;
flex:1;`;

const Button = styled.button`
  color: hotpink;
  
`

const Example = styled('span')`
  color: lightgreen;
  & > a {
    color: hotpink;
  }
`
const base = css`
  color: hotpink;
`
const danger = css`
  color: red;
`

const style = css`
  background-color: darkgreen;
  color: turquoise;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
    css={css`
      ${base};
      background-color: #eee;
    `}
  >
    This is compose style.
  </div>
  <div>
    <div css={style}>This is combine style</div>
    <div css={[danger, style]}>
      with emotion we can create styles and combine them
    </div>
    <div css={[style, danger]}>This will be red</div>
  </div>
        <Example>
          This is <a>nested</a>.
  </Example>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          as="a"
          href="https://github.com/emotion-js/emotion"
        >
          <div
            css={{
              backgroundColor: 'hotpink',
              '&:hover': {
                color: 'lightgreen'
              }
            }}
          >
            This has a hotpink background.
  </div>
          Emotion on GitHub
  </Button>
        <PinkDiv>Hello Emotion</PinkDiv>
      </header>

    </div>
  );
}

export default App;
