import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Resources() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Header />

            <main className="flex-grow px-6 md:px-12 lg:px-24 pt-28 pb-12 max-w-5xl mx-auto">
                <section className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Resources
                    </h1>
                    <p className="text-justify text-base leading-relaxed">
                        The Health Services Sector Development Project (HSSDP) provides a variety of resources to support health professionals, policymakers, and the community in Papua New Guinea. These resources include reports, guidelines, training materials, and more.
                    </p>
                </section>

                <hr />
                <br/>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        Available Resources
                    </h2>
                    <ul className="list-disc ml-6 mt-3 text-base leading-relaxed space-y-1">
                        <li>Project Reports</li>
                        <li>Policy Guidelines</li>
                        <li>Training Manuals</li>
                        <li>Health Data and Statistics</li>
                        <li>Community Awareness Materials</li>
                    </ul>
                </section>

                <hr />
                <br/>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        How to Access Resources
                    </h2>
                    <p className="text-justify text-base leading-relaxed">
                        Resources can be accessed through our official website or by contacting the project office directly. We encourage stakeholders to utilize these resources to enhance health service delivery and improve health outcomes in Papua New Guinea.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}