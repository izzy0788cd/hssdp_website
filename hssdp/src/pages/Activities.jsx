import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Activities() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Header />

            <main className="flex-grow px-6 md:px-12 lg:px-24 pt-28 pb-12 max-w-5xl mx-auto">
                <section className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Activities
                    </h1>
                    <p className="text-justify text-base leading-relaxed">
                        The Health Services Sector Development Project (HSSDP) is committed to enhancing the health system in Papua New Guinea through various activities. These activities are designed to strengthen health service delivery, improve governance, and ensure sustainable health financing.
                    </p>
                </section>

                <hr />
                <br/>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        Key Activities
                    </h2>
                    <p className="text-justify text-base leading-relaxed">
                        The project includes a range of activities aimed at achieving its objectives:
                    </p>
                    <ol className="list-decimal ml-6 mt-3 text-base leading-relaxed space-y-1">
                        <li>Capacity building for health workers and administrators.</li>
                        <li>Development of health infrastructure and facilities.</li>
                        <li>Implementation of health information systems.</li>
                        <li>Community engagement and awareness programs.</li>
                        <li>Strengthening supply chain management for pharmaceuticals.</li>
                    </ol>
                </section>

                <hr />
                <br/>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        Expected Outcomes
                    </h2>
                    <p className="text-justify text-base leading-relaxed">
                        Through these activities, HSSDP aims to achieve:
                    </p>
                    <ul className="list-disc ml-6 mt-3 text-base leading-relaxed space-y-1">
                        <li>Improved access to quality health services across Papua New Guinea.</li>
                        <li>Enhanced capacity of health authorities to manage resources effectively.</li>
                        <li>Increased community participation in health initiatives.</li>
                        <li>Better health outcomes aligned with the Sustainable Development Goals (SDGs).</li>
                    </ul>
                </section>
          </main>

          <Footer />
        </div>
    )};
