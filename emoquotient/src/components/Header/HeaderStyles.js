import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #ffffff;
  padding-left:80px;
  padding-right:80px;
  padding-top:20px;
  padding-bottom : 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  position: sticky; /* Make the header sticky */
  top: 0; /* Stick to the top of the viewport */

  @media (max-width: 768px) {
    padding:20px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 50px;
    height: auto;
    margin-right: 15px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 20px 30px;
    background-color:black;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color:#7F00FF;
      font-weight:bold;
    }
  }
`;

export const Options = styled.div`
  ul {
    list-style: none;
    margin-left:380px;
    padding: 0;
    display:flex;   

    li {
      margin-left:50px;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: 600;
      transition: color 0.3s ease-in-out;

      &:hover {
        color:#7F00FF;
      }
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    padding: 20px 0;
    border-radius: 10px;
    z-index: 10; /* Ensure it overlays the header */

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    li {
      margin: 10px 0;
    }
  }
`;
export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  display: none;
  transition: color 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color:#7F00FF;
  }
`;
