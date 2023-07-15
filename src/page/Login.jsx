import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageBg from "../component/PageBg"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email)
        console.log(password)
        const data = {
            email: email,
            password: password,
        }
        fetch("https://next-backend-example.vercel.app/auth", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const token = data.token
                localStorage.setItem("myToken", token)
                localStorage.setItem("email", email)
                navigate('/dashboard')
            })
    }
    return (
        <div>
            <PageBg />
            <div className="flex items-center justify-center relative w-full">
                <div className="w-1/3 m-5 p-12 shadow-xl rounded-2xl bg-white">
                    <div className="mb-6">

                        <h1 className="text-xl font-bold mb-6">Masuk</h1>
                        <span>Masukkan alamat email/nomor telepon dan kata sandi yang telah anda daftarkan.</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleEmail} placeholder={"user@user.com"} value={email} />
                        <input type="password" onChange={handlePassword} placeholder={"******"} value={password} />
                        <input className="border bg-black" type="submit" id="fsubmit" name="fsubmit" />
                    </form>
                </div>
            </div >
        </div>
    )
}





export default Login