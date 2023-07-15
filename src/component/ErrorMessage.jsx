import { Toast } from "flowbite-react";

const Error = () => {
    return (
        <Toast className="bg-#EB2811">
            <div>
                Email atau kata sandimu salah!
            </div>
            <Toast.Toggle />
        </Toast>
    )
}

export default Error