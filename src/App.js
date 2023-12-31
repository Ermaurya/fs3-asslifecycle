
import "./App.css";
import { useState } from "react";

import Image from "./Components/ImageComp/Image";
import Text from "./Components/TextComp/Text";
function App(props) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="App">
     
      <div style={{ margin: "50px auto" }}>
        <button
          onClick={() => {
            setShowImage(true);
          }}
        >
          Show Image
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            setShowImage(false);
          }}
        >
          Show Text
        </button>
      </div>
      {showImage ? <Image /> : <Text />}
    </div>
  );
}

export default App;
