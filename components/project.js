import styled from 'styled-components';
import Text from '~/components/text';
import Link from '~/components/link';
import media from '~/media';

const Card = styled(Text)`
  box-sizing: border-box;
  margin: 2rem 0 0 0;
  flex: 0 50%;

  ${media.phone`
    flex: 0 100%;
    margin: 1rem 0;
  `};
`;

const Label = styled.b`
  display: block;
`;

const Description = styled.span`
  display: block;
  color: ${(props) => props.theme.darkGrey};
`;

const Project = ({ name, icon: Icon, href, children }) => (
  <Card>
    <Link href={href}>
      <Label>
        {Icon && (
          <span>
            <Icon inline />
            &nbsp;
          </span>
        )}
        {name}
      </Label>
      <Description>{children}</Description>
    </Link>
  </Card>
);

export default Project;
