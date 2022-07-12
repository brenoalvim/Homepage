import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 15px;

  .search-container {
    background: #fff;
    height: 30px;
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.8s;
    padding-top: 15px;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  .search-container:hover > .search-input {
    width: 400px;
  }

  .search-container .search-input {
    background: transparent;
    border: none;
    outline: none;
    width: 0px;
    font-weight: 500;
    font-size: 16px;
    transition: 0.8s;
  }

  .search-container .search-btn .fas {
    color: #5cbdbb;
  }

  @keyframes hoverShake {
    0% {
      transform: skew(0deg, 0deg);
    }
    25% {
      transform: skew(5deg, 5deg);
    }
    75% {
      transform: skew(-5deg, -5deg);
    }
    100% {
      transform: skew(0deg, 0deg);
    }
  }

  .search-container:hover {
    animation: hoverShake 0.15s linear 3;
  }
`
