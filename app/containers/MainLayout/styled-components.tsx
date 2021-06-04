import styled from 'styled-components';

import colors from 'styles/mainTheme';

export const Header = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  padding-left: 20px;
  background-color: ${colors.geyser};

  h1 {
    font-weight: 500;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - 50px);
  padding: 20px;
  background-color: ${colors.aquaHaze};
`;
