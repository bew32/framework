import './App.css'
import AppHeader from './components/AppHeader';
import FrameworkPost from './components/FrameworkPost';
import Frameworkitem from './components/Frameworkitem';
import { useState } from 'react';


function App() {
  const [selectedFrame,setSelectedFrame] = useState(null);
  const [searchText,setSearchText] = useState('');
  function onframeOpenClick() {
    setSelectedFrame(frames[1]);
  }

  function onframeCloseClick(){
    setSelectedFrame(null);
  }

  const filteredFrames = frame.filter((frame) => {
    return frame.title.includes(seachText);
  });
  const frameElements = frames.filter(((frame) => {
    return frame.title.includes(seachText);
  })map((frame,index) => {
    return <Frameworkitem key={index} frame={frame} onFrameClick={onframeOpenClick}/>;
  });

  let framePost = null;
  if (!!selectedFrame) {
    frameworkPost = FrameworkPost frame={selectedFrame} onBgclick={onframeCloseClick} />
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
        <AppSeach value={searchText} onValueChange={setSearchText}>
      <div className="app-grid">
        <Frameworkitem frame={frame1}/>
      </div>
        </div>
      </section>
      {framePost}
    </div>
  );
}

export default App;
