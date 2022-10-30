import Heading from '~/components/heading';
import Section from '~/components/section';
import Work from '~/components/work';
import Text from '~/components/text';
import Link from '~/components/link';
import CirculaIcon from '~/components/icon/circula';
import ResearchGateIcon from '~/components/icon/researchgate';
import GridDynamicsIcon from '~/components/icon/griddynamics';
import NopresetIcon from '~/components/icon/nopreset';
import Layout from '~/components/layout';
import Sup from '~/components/sup';
import Nowrap from '~/components/nowrap';
import Profile from '~/components/profile';

export default () => (
  <Layout itemScope itemType="http://schema.org/Person">
    <Section>
      <Profile.Card>
        <Heading bold>
          👋 Hey, I'm Sergey{' '}
          <Profile.Picture
            src="/static/userpic.jpg"
            alt="Sergey's photo"
            width={42}
            height={42}
          />
        </Heading>
        <Text intro>
          I'm a <span itemProp="jobTitle">JavaScript engineer</span> who
          appreciates thoughtful products and great developer experience. Aside
          from code, I love to travel, cooking, and to explore urban
          neighborhoods.
        </Text>
      </Profile.Card>
      <Work>
        <Sup>
          <Nowrap>Berlin, Germany</Nowrap> &#xb7;{' '}
          <Nowrap>Jul 2019 &ndash; present</Nowrap>
        </Sup>
        Currently, I'm taking care of the web product at{' '}
        <Link href="https://www.circula.com/en" itemProp="url" nowrap>
          <CirculaIcon /> <span itemProp="name">Circula</span>
        </Link>{' '}
        and helping the team with building the most effortless{' '}
        <i>expense management solution</i>, ensuring the best User Experience
        and supporting all departments within the company as a Lead Frontend
        Engineer.
      </Work>
      <Work>
        <Sup>
          <Nowrap>Berlin, Germany</Nowrap> &#xb7;{' '}
          <Nowrap>Sep 2017 &ndash; Jun 2019</Nowrap>
        </Sup>
        I worked as a Senior Software Engineer at{' '}
        <Link href="https://www.researchgate.net" itemProp="url" nowrap>
          <ResearchGateIcon /> ResearchGate
        </Link>
        . As part of <i>Frontend Infrastructure</i> team, we enabled the company
        to effectively ship a great product. Before that, I was helping with the
        technology behind internal design system and tooling around it in the{' '}
        <i>Design Systems</i> team.
      </Work>
      <Work>
        <Sup>
          <Nowrap>San Francisco, CA, US</Nowrap> &#xb7;{' '}
          <Nowrap>Saratov, Russia</Nowrap> &#xb7;{' '}
          <Nowrap>Oct 2015 &ndash; Aug 2017</Nowrap>
        </Sup>
        In the outsourcing company{' '}
        <Link href="https://griddynamics.com" nowrap>
          <GridDynamicsIcon /> Grid Dynamics
        </Link>
        , <Nowrap>I worked</Nowrap> as a UI Developer. At there I worked on a
        wide variety of projects for companies such as{' '}
        <i>cloud-based phone systems</i>{' '}
        <Link href="https://ringcentral.com">RingCentral</Link>,{' '}
        <i>ads analysis platform</i>{' '}
        <Link href="https://integralads.com">Integral Ad Science</Link>,{' '}
        <i>investment bank</i>{' '}
        <Link href="https://www.svb.com">Silicon Valley Bank</Link>, and{' '}
        <Link href="https://macys.com">Macy&apos;s</Link> <i>retailer</i>.
      </Work>
      <Work>
        <Sup>
          <Nowrap>Saratov, Russia</Nowrap> &#xb7;{' '}
          <Nowrap>June 2014 &ndash; Oct 2015</Nowrap>
        </Sup>
        At{' '}
        <Link href="https://nopreset.ru" nowrap>
          <NopresetIcon /> nopreset
        </Link>{' '}
        digital agency, I was playing roles of both backend and frontend
        engineer. As part of a small and dynamic team, I worked on projects like{' '}
        <i>agricultural machinery dealer</i>{' '}
        <Link href="https://agro.mirtech.ru">Mirtech</Link>,{' '}
        <i>security systems solutions provider</i>{' '}
        <Link href="https://centrsb.ru">CSB</Link>, and{' '}
        <i>power systems engineering company</i>{' '}
        <Link href="https://web.archive.org/web/20171228063459/www.energoin.com">
          Energoinvest
        </Link>
        .
      </Work>
    </Section>
  </Layout>
);
