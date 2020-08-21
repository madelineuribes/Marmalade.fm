import React, { Component } from 'react';

import FeaturedMix from './FeaturedMix';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div >
        <div className='flex-l justify-end'>
          {/* FeaturedMix */}
          <FeaturedMix />
          <div>
            {/* Header */}
            <Header />
            {/* Routed Page */}
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
    );
  }
}

export default App;
