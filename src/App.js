import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import AppLayout from "./components/app.layout";
import StoryEditor from "./components/story.editor";
import FullNews from "./components/fullnews";

function App() {
  
  return (
    <div className="App">
    <Router>
    <Route exact path="/" component={AppLayout} />
    <Route path="/editor" component={StoryEditor} />
    <Route exact path="/readNews" component={FullNews} />
    </Router>
    </div>
  );
}

export default App;
