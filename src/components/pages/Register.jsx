import { useState, useEffect } from "react"
import { useNavigate } from "react-router";

import "./LoginRegister.css"
import { HomeHeader } from "../organisms/HomeHeader"

export const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [password, setPassword] = useState()
    const [repeatPassword, setRepeatPasword] = useState()
    const [email, setEmail] = useState()

    const handleRegister = () => {
        console.log(name, lastname, password, repeatPassword, email)

        navigate("/login")
    }

    return (
        <>
            <HomeHeader />
            <main>
                <article className="userFormContainer">
                    <h1>Register</h1>
                    <form action="" className="userForm">
                        <input type="text" placeholder="Your name" onChange={(event) => setName(event.target.value)} />
                        <input type="text" placeholder="Your lastname" onChange={(event) => setLastname(event.target.value)} />
                        <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                        <input type="password" placeholder="Repeat password" onChange={(event) => setRepeatPasword(event.target.value)} />
                        <input type="email" placeholder="Your email" onChange={(event) => setEmail(event.target.value)} />
                        <button type="primary" onClick={handleRegister}>Register</button>
                    </form>
                </article>
            </main>
        </>
    )
}
