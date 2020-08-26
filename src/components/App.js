/*global Mixcloud*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import FeaturedMix from './FeaturedMix';
import Header from './Header';


const Home = () => <h1>Home</h1>
const Archive = () => <h1>Archive</h1>
const About = () => <h1>About</h1>

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      currentMix: ''
    };
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);

    await this.widget.ready;

    this.widget.events.pause.on(() => this.setState({
      playing: false
    }));

    this.widget.events.play.on(() => this.setState({
      playing: true
    }));

    console.log(this.widget);
  };

  componentDidMount() {
    // when app component is loaded to page, our component gets called 
    // so we can run mountAudio
    this.mountAudio()
  };

  togglePlay = () => {
    console.log('togglePlay');
    this.widget.togglePlay();
  };

  playMix = mixName => {
    // load mix by name and play it immediately 
    this.widget.load(mixName, true);
  };

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

              <div>
                <button onClick={this.togglePlay}>
                  {this.state.playing ? 'Pause' : 'Play'}
                </button>
              </div>

              <div>
                <button onClick={() => this.playMix('/NTSRadio/kit-grill-16th-august-2020/')}>
                  Play Mix
                </button>
              </div>

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
            className="db fixed bottom-0 z-5"
            ref={player => (this.player = player)}
            allow='autoplay'
          />
        </div>
      </Router>
    );
  }
}

export default App;
