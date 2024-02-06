import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = 
        useState<Boolean>(false)

    const handleLogin = () => setIsLoggedIn(true)
    const handleLogout = () => setIsLoggedIn(false)
    
    return <div className="gif">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div className="info-mess">User is 
            {isLoggedIn? "authenticated" : "Anonymous"}
        </div>
    </div>
}