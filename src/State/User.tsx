import { useState } from "react"

type AuthUser = {
    name?: string,
    email?: string
}

export const User = () => {
    const [user, setUser]=useState<AuthUser|null>()
    const handleLogin = () => setUser({
        name: 'Tahiana', email:"tahian@yaho.com"})
    const handleLogout = () => {}

    return <div className="credential">
        { user ? 
        <button onClick={handleLogin}>Login</button> :
        <button onClick={handleLogout}>Logout</button>
        }
        <div className="info-mess">
            Username is {user?.name}
        </div>
        <div className="info-mess">
            Username is {user?.email}
        </div>
    </div>
    
}