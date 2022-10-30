import { Component } from 'react';
import ErrorSection from '~/components/error';

export default class Error extends Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode =
      (res && res.statusCode) || (jsonPageRes && jsonPageRes.status) || 404;

    return { statusCode };
  }

  render() {
    const statusCode = this.props.statusCode.toString();
    return <ErrorSection message={statusCode} />;
  }
}
