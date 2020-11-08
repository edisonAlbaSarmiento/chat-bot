import styled from 'styled-components';
import { resize } from '../../styles/global';


const bgColor = '#484848';
export const FooterStyle = styled.footer`
  background: ${bgColor};
  padding: 30px 0;

  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 15px;

    > div {
      margin-bottom: 60px;
    }
  }

  h2 {
    color: white;
    font-size: 45px;
    text-align: center;
  }

  p {
    color: white;
    line-height: 30px;
    max-width: 600px; 
    margin: 0 auto;
    text-align: center;

  }

  nav {
    margin: 0 auto;
    max-width: 800px;
    
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        > span {
          color: white;
          display: block;
          text-align: center;
        }

        ${resize.medium`
          margin-bottom: 40px;
        `}  
      }

      a {
        color: white;
      }

      .label {
        margin-bottom: 5px;
      }
      .icon {
        align-items: center;
        background: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        max-width: 43px;
        margin: 0 auto 18px;
        padding: 16px 6px;
        text-align: center;
        color: ${bgColor};
      }
      .icon-chat {
        align-items: center;
        background: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        max-width: 43px;
        margin: 0 auto 18px;
        padding: 16px 6px;
        text-align: center;
        color: ${bgColor};
      }

      ${resize.medium`
        display: block;
      `}
    }
  }
`;