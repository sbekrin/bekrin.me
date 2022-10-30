import Link from 'next/link';
import styled, { css, withTheme } from 'styled-components';
import { withRouter } from 'next/router';
import media from '~/media';

const Container = styled.span`
  align-items: center;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  margin-right: 1.75rem;
  font-size: 18px;

  ${media.phone`
    margin: 0;
  `};

  a {
    transition: color 200ms ease;
    text-decoration: none;
    font-weight: bold;
    white-space: nowrap;
    color: ${(props) =>
      props.active ? props.theme.darkGrey : props.theme.blue};
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
    pointer-events: ${(props) => (props.active ? 'none' : 'initial')};

    &:active {
      outline: none;
    }

    &:hover {
      color: ${(props) =>
        props.active ? props.theme.darkGrey : props.theme.red};
    }
  }
`;

const MenuItem = ({ href, children, active }) => (
  <Container active={active}>
    <Link href={href}>{children}</Link>
  </Container>
);

const withActiveFlag = (Target) => (props) =>
  <Target {...props} active={props.router.pathname === props.href} />;

export default withTheme(withRouter(withActiveFlag(MenuItem)));
