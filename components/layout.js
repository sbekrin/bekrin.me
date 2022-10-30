import { Component } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import Header from '~/components/header';
import Content from '~/components/content';
import Footer from '~/components/footer';
import Section from '~/components/section';
import Menu from '~/components/menu';
import MenuItem from '~/components/menu/item';
import Link from '~/components/link';

class Layout extends Component {
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

  componentDidMount() {
    document.addEventListener('visibilitychange', this.toggleFavicon);
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
      : 'Sergey Bekrin, a Lead Frontend Engineer';

    return (
      <ThemeProvider theme={this.theme}>
        <div {...props}>
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
            <Link href="https://github.com/sbekrin/bekrin.me">
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
