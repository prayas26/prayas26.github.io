import React, { useEffect } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const profileImage = "https://storage.googleapis.com/storage-prayasmittal/prayas.jpg";

export default function LeftPanel() {

    const openResume = () => {
        window.open("https://storage.googleapis.com/storage-prayasmittal/Prayas's%20Resume.pdf", '_blank')
    }

    return (
        <div className="leftPanel">
            <img src={profileImage} className="profileImage" alt="profile" />
            <div className="profileName white">Prayas Mittal</div>
            <div className="footer">
                <div className="downloadCV white" onClick={openResume}>
                    <div>Download CV</div>
                    <FontAwesomeIcon icon={faDownload} className="footerIcon" />
                </div>
                <div className="callMe white">
                    Contact Me
                </div>
            </div>
        </div>
    );
}