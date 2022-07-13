import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .cards ol {
    list-style: none;
  }

  ol {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  ol li {
    width: 50px;
    height: 50px;
    border: 1px solid var(--light);
    background: var(--light);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  li img {
    width: 30px;
  }
`
