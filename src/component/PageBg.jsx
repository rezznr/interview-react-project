import React from "react";
import logo from "../assets/Logo.png";
import img1 from "../assets/bg-image/Vector 391.svg";
import img2 from "../assets/bg-image/person-facing-challenges-at-work 1.svg";
import img3 from "../assets/bg-image/person-planning-a-startup-business 1.svg";

function PageBg() {
    return (
        <div className="absolute -z-40 w-full">
            <div className="flex flex-col justify-between">
                <div className="mx-24 my-10">
                    <img src={logo} alt="pilih-jurusan-logo" />
                </div>
                <div className="relative mt-24">
                    <div className="absolute -z-50 w-full bottom-0">
                        <img src={img1} alt="" className="w-full" />
                    </div>
                    <div className="flex justify-between">
                        <img src={img3} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBg;
