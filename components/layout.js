import { Component } from 'react';
import { any, string } from 'prop-types';
import ReactGA from 'react-ga';
import Head from 'next/head';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { initialize } from 'react-ga';
import Header from '~/components/header';
import Content from '~/components/content';
import Footer from '~/components/footer';
import Section from '~/components/section';
import Menu from '~/components/menu';
import MenuItem from '~/components/menu/item';
import Link from '~/components/link/external';
import GlobalStyles from '~/components/global-styles';

class Layout extends Component {
  static propTypes = {
    children: any.isRequired,
    title: string,
  };

  theme = {
    blue: '#0f58fb',
    red: '#ad0051',
    white: '#fff',
    lightGrey: 'f6f6f6',
    grey: '#666',
    darkGrey: '#333',
    almostBlack: '#111',
    almostWhite: '#eee',
  };

  state = {
    useAltFavicon: false,
  };

  toggleFavicon = () => {
    this.setState({ useAltFavicon: document.hidden });
  };

  triggerPageView = () => {
    if (!window.IS_GA_INITIALIZED) {
      window.IS_GA_INITIALIZED = true;
      initialize('UA-19088106-7', {
        debug: process.env.NODE_ENV === 'development',
      });
    }
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };

  componentDidMount() {
    document.addEventListener('visibilitychange', this.toggleFavicon);
    this.triggerPageView();
  }

  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.toggleFavicon);
  }

  renderFavicon(favicon) {
    return <link rel="icon" type="image/png" href={`/static/${favicon}.png`} />;
  }

  render() {
    const { useAltFavicon } = this.state;
    const { title, children, ...props } = this.props;
    const formattedTitle = title
      ? `${title} — Sergey Bekrin`
      : 'Sergey Bekrin, a Software Engineer';

    return (
      <ThemeProvider theme={this.theme}>
        <div {...props}>
          <GlobalStyles />
          <Head>
            <title>{formattedTitle}</title>
            {this.renderFavicon(useAltFavicon ? 'favicon-alt' : 'favicon')}
          </Head>
          <Header>
            <Section>
              <Menu>
                <MenuItem href="/">About me</MenuItem>
                <MenuItem href="/projects">Projects</MenuItem>
                <MenuItem href="/contacts">Contacts</MenuItem>
              </Menu>
            </Section>
          </Header>
          <Content>{children}</Content>
          <Footer>
            Last updated {process.env.LAST_UPDATE_DATE} &#xb7;{' '}
            <Link href="//github.com/sbekrin/bekrin.me" trackAs="github-source">
              View&nbsp;source
            </Link>
          </Footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default styled(Layout)`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;
