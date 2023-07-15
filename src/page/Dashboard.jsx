import { useEffect } from "react"
import PageBg from "../component/PageBg"

export const Dashboard = () => {
    const foodFetch = async () => {
        const responses = await fetch('https://next-backend-example.vercel.app/foods')
        const data = await responses.json()
        console.log(data)
    }

    useEffect(() => {
        foodFetch()
    }, [])
    return (
        <>
            <PageBg />
            <div className="">
                <p>Dashboard</p>
            </div>
        </>
    )
}