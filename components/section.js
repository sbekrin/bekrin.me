import styled, { css } from 'styled-components';
import media from '~/media';

const Content = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.hero &&
    css`
      background-color: ${props.theme.almostBlack};
      color: ${props.theme.almostWhite};
      border-radius: 0.25rem;
      padding: 5vmin;
      margin: 0 -5vmin;

      ${media.phone`
        border-radius: 0;
      `};
    `};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = (props) => (
  <Container>
    <Content {...props} />
  </Container>
);

export default Section;
