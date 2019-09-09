import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppLayout from "./components/app.layout";
import StoryEditor from "./components/story.editor";

function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path="/" component={AppLayout} />
    <Route path="/editor" component={StoryEditor} />
    </Router>
    </div>
  );
}

export default App;
