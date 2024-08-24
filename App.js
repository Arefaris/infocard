import React from "react"
import UserAvatar from "./components/user-avatar.js"
import UserNameProfession from  "./components/user-name-profession.js"
import EmailBtn from "./components/email-btn.js"
import About from "./components/about.js"
import Interests from "./components/interests.js"
import CardFooter from "./components/card-footer.js"

export default function App(){
    return (
        <div className="container">
            <div className="card">
                <UserAvatar />
                <UserNameProfession />
                <EmailBtn />
                <About />
                <Interests />
            </div>
                <CardFooter />
        </div>
        
    )
}