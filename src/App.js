import React, { useEffect } from 'react';
import './App.scss';
import Email from './icons/email';
import Chat from './icons/chat';

export default function App() {
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
        const widgetKey = { widget_key: yourKey };
        const customPositions = { mobile: { x: 10, y: 10 }, desktop: { x: 0, y: 0 } };
        window.ChatGen.init(widgetKey, customPositions);
      }
    }
    return () => {
      var widget = document.getElementById("selekt-chat-widget");
      if (widget) {
        window.ChatGen.cleanWidget('cleanWidget');
        document.body.removeChild(widget);
      }
    }
  }, []);

  return (
    <div>
      <aside className="profile-card">
        <header>
          <a>
            <img src="https://storage.googleapis.com/storage-prayasmittal/prayas.jpg" />
          </a>
          <h1>Prayas Mittal</h1>
          <h2>Frontend Developer</h2>
          <h2 className="company" onClick={() => window.open('https://chatgen.ai', '_blank')}>@chatgen.ai</h2>
          <h2 className="hobbies">Developer | Guitarist | Traveller | Poet</h2>
        </header>
        <div className="profile-bio">
          <p>"Frontend Developer and Python Enthusiast working on chatbots in Mumbai. Have a year of industry experience in developing futuristic products"</p>
        </div>
        <ul className="profile-social-links">
          <li>
            <a href="https://linkedin.com/in/prayas26">
              <i className="fab fa-linkedin-in social-icon" style={{ color: '#1e77b4' }} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/prayas26">
              <i className="fab fa-twitter social-icon" style={{ color: '#55acee' }} />
            </a>
          </li>
          <li>
            <a href="mailto:prayas.mittal@gmail.com">
              <Email size={35} />
            </a>
          </li>
          <li>
            <a href="mailto:prayas.mittal@gmail.com" onClick={() => window.ChatGen && window.ChatGen.startInteraction({ interactionId: 930019 })}>
              <Chat size={32} />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
