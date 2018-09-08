import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.svg';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
    -webkit-transform: rotate(0deg);
    -webkit-transform-origin: 50% 50%;
  }

  to {
    transform: rotate(360deg);
    transform-origin: 50% 50%;
    -webkit-transform: rotate(360deg)
    -webkit-transform-origin: 50% 50%;
  }
`;

const Spin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate360} 1.4s linear infinite;
`;

const Footer = styled.div`
  font-size: 16px;
  position: fixed;
  bottom: 0;
  text-align: center;
  margin-bottom: 10px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <CenteredContainer>
      <Spin>
        <img src={logo} height={150} width={150} />
      </Spin>
      {children}
      <Footer>
        You can check out the code{' '}
        <a href='https://github.com/colinricardo/rts'>here</a>.<div>🤓</div>
      </Footer>
    </CenteredContainer>
  );
};

export default Layout;
