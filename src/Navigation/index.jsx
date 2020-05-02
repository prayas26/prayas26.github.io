import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faPortrait, faBookmark, faPhone } from '@fortawesome/free-solid-svg-icons';

const tabs = [
    {
        name: 'about',
        icon: faUserTie,
    },
    // {
    //     name: 'resume',
    //     icon: faPortrait,
    // },
    // {
    //     name: 'blog',
    //     icon: faBookmark,
    // },
    // {
    //     name: 'contact',
    //     icon: faPhone,
    // }
]

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation themeBackground">
                {tabs.map((tab, index) => (
                    <div className={`navigationItem ${this.props.currentTab === tab.name ? 'tabSelected' : 'white'}`} key={`menu${index}`} onClick={() => this.props.onTabChange(tab.name)} >
                        <FontAwesomeIcon icon={tab.icon} className="navigationImage" />
                        <div style={{ fontWeight: 600 }}>{tab.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}
