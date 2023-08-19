import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
    padding: 10px 20px;
    background-color: #ff6b6b;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #e24d4d;
    }
  }
`;

export const Options = styled.div`
  ul {
    list-style: none;
    margin-left:500px;
    padding: 0;
    display:flex;   

    li {
      margin-left:30px;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: 600;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #ff6b6b;
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
    color: #ff6b6b;
  }
`;
