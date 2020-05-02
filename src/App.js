import React, { useState, useEffect } from 'react';
import './App.scss';
import './style.scss';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Navigation from './Navigation';

export default function App() {
  const [currentTab, setTab] = useState('about');

  useEffect(() => {
    var a = window.ChatGen || [];
    if (!a.loaded) {
      var s = document.createElement('script');
      s.type = "text/javascript";
      s.async = true;
      s.src = `https://app.chatgen.ai/cmp/chat-widget/bot.js`;
      var fs = document.getElementsByTagName('script')[0];
      fs.parentNode.insertBefore(s, fs);
      s.onload = function () {
        const yourKey = 'ZoDYoqOA';
        const widgetKey = { widget_key: yourKey }
        window.ChatGen.init(widgetKey);
      }
    }
    return () => {
      var widget = document.getElementById("selekt-chat-widget");
      if (widget) {
        window.ChatGen.cleanWidget('cleanWidget');
        document.body.removeChild(widget);
      }
    }
  }, [])

  const handleTabChange = (tab) => {
    setTab(tab)
  }

  return (
    <div className="App">
      <div className="container">
        {/* <Navigation currentTab={currentTab} onTabChange={handleTabChange} /> */}
        <LeftPanel />
        <RightPanel activeTab={currentTab} />
      </div>
    </div>
  );
}
