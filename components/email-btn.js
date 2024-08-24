import React from "react"

export default function EmailBtn() {
    const handleRedirect = () => {
        window.open('https://t.me/fenexxx', '_blank');
  };
    return (
        <button className="email-button" onClick={handleRedirect}><i class="fa-solid fa-envelope mail-icon"></i>Message me</button>
    )
}