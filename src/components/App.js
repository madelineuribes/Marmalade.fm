import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FeaturedMix from './FeaturedMix';
import Header from './Header';


const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <div className='flex-l justify-end'>
            {/* FeaturedMix */}
            <FeaturedMix />
            <div className='w-50-l relative z-1'>
              {/* Header */}
              <Header />
              {/* Routed Page */}
              <Route exact path="/" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
          </div>
          {/* AutioPlayer */}
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Fopen-hand-real-flames-22nd-january-2020%2F" frameBorder="0"
            className="db fixed bottom-0 z-5">
          </iframe>
        </div>
      </Router>
    );
  }
}

export default App;
