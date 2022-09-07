import React from "react";
import Cyber from "./Cyber";

import "./App.css";

/* Special options for creepify:
  luni.tools.creepify.options.top = true; 	// add diacritics on top. Default: true
  luni.tools.creepify.options.middle = true;	// add diacritics in the middle. Default: true
  luni.tools.creepify.options.bottom = true;	// add diacritics on the bottom. Default: true
  luni.tools.creepify.options.maxHeight = 15; // How many diacritic marks shall we put on top/bottom? Default: 15
  luni.tools.creepify.options.randomization: 100 // 0-100%. maxHeight 100 and randomization 20%: the height goes from 80 to 100. randomization 70%, height goes from 30 to 100. Default: 100
*/

function App() {
  return (
    <div className="App">
      <div className="cyber">
        <Cyber />
      </div>
      <div className="footer">
        <a id="link" href="https://github.com/inphoenix" target="_blank">
          inPhoenix Github
        </a>
      </div>
    </div>
  )
}

export default App;
