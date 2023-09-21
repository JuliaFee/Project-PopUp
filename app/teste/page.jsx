'use client';
import React, { useState } from 'react'
import PopUp from "../components/popup/PopUp"

function Show() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    function handleShowPopup(message, type, time) {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true)
        setTimeout(() => {
        setShowPopup(false)
        }, time)
    }

    return (
        <div>

            <button onClick={() => handleShowPopup('error', 'erro', 4000 )}>show ERROR message</button>
            <button onClick={() => handleShowPopup('success', 'sucesso', 4000 )}>show SUCCESS message</button>
            {
                showPopup && (
                    <PopUp message={popupMessage}
                        typeColor={popupType}></PopUp>
                )
            }
        </div>
    )
}

export default Show