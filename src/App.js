import React, { useEffect } from 'react';
import './App.scss';

const socialLinks = [
  {
    className: 'fab fa-linkedin-in',
    href: 'https://linkedin.com/in/prayas26'
  },
  {
    className: 'fab fa-twitter',
    href: 'https://twitter.com/prayas26'
  },
  {
    className: 'fab fa-instagram',
    href: 'https://instagram.com/prayas26'
  },
  {
    className: 'fas fa-comments',
    onClick: () => window.ChatGen && window.ChatGen.startInteraction({ interactionId: 930019 })
  }
]

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
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="card-container">
          <img className="round" src="https://storage.googleapis.com/storage-prayasmittal/prayas.jpg" alt="user" />
          <h3>Prayas Mittal</h3>
          <h6>Mumbai, India</h6>
          <p className="company-post">Front-end developer</p>
          <p className="company"><a href="https://chatgen.ai">@chatgen.ai</a></p>
          <div className="buttons">
            <button className="primary">
              Message
            </button>
          </div>
          <div className="social-icons">
            {
              socialLinks.map((datum, key) => {
                return (
                  <a className="social-icon" href={datum.href} target={datum.target || '_blank'} onClick={datum.onClick || (() => { })}>
                    <i className={`${datum.className} font-image`} />
                  </a>
                )
              })
            }
          </div>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Python</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
