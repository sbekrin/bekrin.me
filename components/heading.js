import { createElement } from 'react';
import styled from 'styled-components';
import media from '~/media';

const Tag = ({ level = 2, bold, ...props }) =>
  createElement(`h${level}`, props);

const Heading = styled(Tag)`
  font-weight: ${(props) => (props.bold ? 600 : 500)};
  font-size: 36px;
  line-height: 1.5;
  margin: 0;
  letter-spacing: ${(props) => (props.bold ? -2 : 0)}px;

  ${media.tablet`
    font-size: 26px;
    letter-spacing: ${(props) => (props.bold ? -1 : 0)}px;
  `};
`;

export default Heading;
