import { withStyles } from '@material-ui/core';
import styled from 'styled-components';

import TextField from 'components/inputs/TextField';

export const Header = styled.h2`
  margin: 15px 0 25px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`;

export const TextInput = withStyles({
  root: {
    width: 'calc(33% - 50px)',
    marginRight: 50
  }
})(TextField);

export const MediumTextInput = withStyles({
  root: {
    width: 'calc(50% - 50px)',
    marginRight: 50
  }
})(TextField);

export const BigTextInput = withStyles({
  root: {
    width: '100%',
    marginRight: 50,
    marginBottom: 50
  }
})(TextField);

export const AddButtonWrapper = styled.div`
  position: absolute;
  top: 225px;
  right: 20px;
`;

export const SaveButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
