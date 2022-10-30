import styled, { css } from 'styled-components';
import media from '~/media';

const Text = styled.p`
  line-height: 1.75;
  margin: 1rem 0 0 0;
  hyphens: auto;
  color: ${(props) => props.theme.almostBlack};

  ${media.phone`
    line-height: 1.5;
  `};

  ${(props) =>
    props.hero &&
    css`
      color: #2e2e2e;
    `};

  ${(props) =>
    props.intro &&
    css`
      font-size: 1.25rem;

      ${media.tablet`
        font-size: 1rem;
      `};
    `};
`;

export default Text;
