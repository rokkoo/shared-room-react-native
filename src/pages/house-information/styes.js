import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: screenWidth, height} = Dimensions.get('window');

export const Wrapper = styled.SafeAreaView`
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: ${props => (props.big ? 34 : props.medium ? 22 : 16)}px;
  opacity: ${props => (props.big ? 1 : 0.7)};
  font-weight: ${props => (props.big ? 600 : 600)};
  color: black;
  text-transform: capitalize;
  letter-spacing: 0.5;
`;

export const Price = styled.Text`
  background-color: #2ecc71;
  padding: 4px;
  border-radius: 5px;
  font-size: 25px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #2c3e50;
  margin: 20px 20px;
  opacity: 0.2;
  border-radius: 6px;
`;

export const UserBlock = styled.View`
  flex-direction: row;
  padding: 10px;
  margin: 20px 50px;
  background-color: #bdc3c7;
  align-items: center;
`;
