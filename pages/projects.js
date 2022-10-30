import Layout from '~/components/layout';
import styled from 'styled-components';
import Heading from '~/components/heading';
import Section from '~/components/section';
import Project from '~/components/project';
import SpectroIcon from '~/components/icon/spectro';
import CljsIcon from '~/components/icon/cljs';
import NpmkitIcon from '~/components/icon/npmkit';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default () => (
  <Layout title="Projects">
    <Section>
      <Heading bold>
        Open-source &amp;
        <br />
        non&#8209;commercial projects
      </Heading>
      <Grid>
        <Project name="npmkit" icon={NpmkitIcon} href="https://npmkit.app">
          macOS menubar app for quick access to all your projects
        </Project>
        <Project
          name="💌 styled-email-components"
          href="https://github.com/sbekrin/styled-email-components"
        >
          Extension of styled-components for building email-first components
        </Project>
        <Project
          name="cljs-babel"
          icon={CljsIcon}
          href="https://github.com/sbekrin/cljs-babel"
        >
          Proof-of-concept ClojureScript compiler without binary dependencies
        </Project>
        <Project
          name="🔠 react-with-async-fonts"
          href="https://github.com/sbekrin/react-with-async-fonts"
        >
          Handy module for working with custom fonts
        </Project>

        <Project
          name="📑 transform-scss-import-to-string"
          href="https://github.com/researchgate/babel-plugin-transform-scss-import-to-string"
        >
          Babel plugin for inlining Sass sheets into variable declaration
        </Project>
        <Project
          name="🤖💬 react-converse"
          href="https://github.com/react-converse/react-converse"
        >
          Toolkit for creating declarative chatbots with React
        </Project>
        <Project
          name="Canvaz"
          icon={SpectroIcon}
          href="https://github.com/sbekrin/canvaz"
        >
          Component-based visual content editor for React
        </Project>
      </Grid>
    </Section>
  </Layout>
);
