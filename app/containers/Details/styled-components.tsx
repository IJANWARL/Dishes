import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Header = styled.h2`
  margin: 10px 0;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`;

export const Column = styled(({ wide, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: calc(${({ wide }) => (wide ? 100 : 33)}% - 50px);
  margin-right: 50px;

  span {
    font-weight: 500;
  }
`;

export const ButtonLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
