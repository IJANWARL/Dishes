import React from 'react';

import styled from 'styled-components';

import colors from 'styles/mainTheme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};

  border: 1px solid ${colors.geyser};
  border-radius: 5px;
`;

export const Row = styled(({ header, last, ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  overflow: hidden;
  font-weight: ${({ header }) => (header ? 500 : 400)};
  border-bottom: ${({ last }) => (last ? 0 : 1)}px solid ${colors.geyser};

  &:hover {
    background-color: ${({ header }) => (header ? 'inherit' : colors.aquaHaze)};
  }
`;

export const Column = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  width: 200px;
  margin-right: 50px;
  overflow: hidden;
  color: ${colors.black};
  white-space: nowrap;
  text-overflow: ellipsis;
`;
