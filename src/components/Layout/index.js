import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../Routes';

import { Nav } from './styles';

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    console.log('unmount');
  }

  handleScroll = () => {
    console.log('scroll');
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/456415614561456">Post</Link>
          </Nav>
          <Routes />
          <Footer />
        </Router>
      </>
    );
  }
}

// export default function Layout() {
//   return (
//     <>
//       <Header />
//       <PostsList />
//       <Footer />
//     </>
//   );
// }
