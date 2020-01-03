import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: screenWidth, height} = Dimensions.get('window');

export const PostWrapper = styled.View`
  padding: 10px 0;
`;

export const PostFooter = styled.View`
  flex-direction: row;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Block = styled.View`
  flex-direction: column;
`;

export const Text = styled.Text`
  font-size: ${props => (props.big ? 20 : 16)}px;
  opacity: ${props => (props.big ? 1 : 0.5)};
  font-weight: ${props => (props.big ? 600 : 400)};
  color: #34495e;
`;

export const ItemWrapper = styled.View`
  align-items: center;
  height: ${screenWidth / 3};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
