import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
         <div className="flex flex-col min-h-screen bg-[#ffdfba] items-center">
            <Header />
            <main className="flex-grow max-w-full pt-[100px] px-4 overflow-x-auto text-center items-center">
                <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    About Health Services Sector Development Project
                </h1>
            </main>
            <Footer />
         </div>
        </>
    )
}