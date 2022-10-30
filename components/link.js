import RouterLink from 'next/link';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  transition: color 200ms ease;
  white-space: ${(props) => (props.nowrap ? 'nowrap' : 'normal')};

  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export default Link;
