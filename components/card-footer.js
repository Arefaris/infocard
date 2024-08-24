import React from "react"

export default function CardFooter(){
    const handleRedirectTwitter = () => {
        window.open('https://x.com/beepboopba', '_blank');
    }
    
    const handleRedirectGitHub = () => {
        window.open('https://github.com/Arefaris', '_blank');
    }
    
    
    return(
        <footer className="card-footer">
                    <i class="fa-brands fa-x-twitter" onClick={handleRedirectTwitter}></i>
                    <i class="fa-brands fa-square-github" onClick={handleRedirectGitHub}></i>
        </footer>
    )
}