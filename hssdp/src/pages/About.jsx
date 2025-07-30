import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-[#ffdfba] text-black">
            <Header />

            <main className="flex-grow px-6 md:px-12 lg:px-24 pt-28 pb-12 max-w-5xl mx-auto">
                <section className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        The Project – HSSDP
                    </h1>
                    <p className="text-justify text-base leading-relaxed">
                        The Health Services Sector Development Project (HSSDP) is a National Department of Health initiative, co-financed by loans from the Asian Development Bank and grants from the Australian Government. It supports the health-related Sustainable Development Goals (SDGs) and aims to progress toward universal health coverage (UHC) in Papua New Guinea.
                        <br /><br />
                        The project builds on the success of the Rural Primary Health Services Delivery Project and focuses on strengthening the health system through improvements in planning, governance, leadership, financial management, and community health awareness. It also aims to improve information systems, pharmaceutical availability, and medical supply chains.
                    </p>
                </section>

                <hr />
                <br/>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        Output No. 1
                    </h2>
                    <p className="text-justify text-base leading-relaxed">
                        The Project aims to strengthen overarching national regulatory, policy and planning frameworks and public finance management systems. The goal is to enable efficient, effective, and long-term sustainable health service delivery through:
                    </p>
                    <ol className="list-decimal ml-6 mt-3 text-base leading-relaxed">
                        <li>Improved fiscal and budgetary management</li>
                        <li>Better budget execution including public procurement</li>
                        <li>Stronger health sector governance and management</li>
                    </ol>
                    <p className="mt-3">
                        These reforms aim to enhance efficiency across the government, amplifying the impact on public expenditure and service delivery.
                    </p>
                </section>
                
                <hr />
                <br/>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        Output No. 2
                    </h2>
                    <p className="text-justify text-base leading-relaxed">
                        The Project aims to strengthen the Sub-National Health System to support:
                    </p>
                    <ol className="list-decimal ml-6 mt-3 text-base leading-relaxed space-y-1">
                        <li>Full rollout of the decentralized PHA (Provincial Health Authority) model across Papua New Guinea.</li>
                        <li>Sustaining and increasing health financing, and its direct transfer to PHAs.</li>
                        <li>Strengthening processes, systems, and management in PHAs.</li>
                    </ol>

                    <p className="mt-4 text-justify">
                        This includes support for the necessary subordinate legislation (e.g., PHA regulations and by-laws) and a PHA operational management manual. It also includes:
                    </p>

                    <ol className="list-decimal ml-6 mt-3 text-base leading-relaxed space-y-1">
                        <li>Better aligned funding for primary health and hospital services to PHAs, including direct channeling of health function grants.</li>
                        <li>Steps to identify and secure critical fund flows, reduce fragmentation, and prevent delays or reallocation.</li>
                    </ol>

                    <p className="mt-4">
                        Policy actions will support PHA efficiency and effectiveness in service delivery across all levels, reinforcing the planning and public finance management (PFM) cycle.
                    </p>
                </section>
                <hr />
                <br/>
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        Output No. 3
                    </h2>
                    <p className="text-justify text-base leading-relaxed mb-2">
                        The Project supports five key components for effective delivery of quality health services as part of progress toward Universal Health Coverage:
                    </p>
                    <ol className="list-decimal ml-6 text-base leading-relaxed space-y-1">
                        <li>Medical Supplies Strengthening</li>
                        <li>Health Sector Partnerships</li>
                        <li>Health Information Systems</li>
                        <li>Health Facility Infrastructure Improvements</li>
                        <li>Patient Referral Systems</li>
                    </ol>
                </section>
            </main>

            <Footer />
        </div>
    );
}
