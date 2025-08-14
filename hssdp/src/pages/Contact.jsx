import React from "react";
import '../styles/style.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col pt-24 sm:pt-24">
        <section className="py-12 px-5 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            
            {/* Top Section: Contact Info + Map */}
            <div className="flex flex-col md:flex-row gap-10">
              
              {/* Contact Info */}
              <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md space-y-6">
                <h2 className="text-2xl font-semibold text-blue-800">Contact Us</h2>
                <p className="text-gray-700">Visit us at our office or reach out using the details below.</p>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <FaMapMarkerAlt className="text-blue-600 mt-1" />
                    <div>
                      <p>Sec 68 Lot 07, Ruta Place, Gordons</p>
                      <p>Port Moresby, N. C. D.</p>
                      <p>Papua New Guinea</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <FaPhone className="text-blue-600" />
                    <p>(+675) 325 1206 | 325 1275</p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <FaEnvelope className="text-blue-600" />
                    <p className="text-blue-700 hover:underline cursor-pointer">info@pnghssdp.org</p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <FaClock className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">Operating Hours:</p>
                      <p>Mon–Fri: 8:00 AM – 4:30 PM</p>
                      <p>Closed on weekends & public holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="md:w-1/2 h-[300px] sm:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.3642960041993!2d147.1945924368803!3d-9.453803239687476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6902377679c50ad3%3A0xb11541bc843d738!2sHealth%20Services%20Sector%20Development%20Project%20Office!5e0!3m2!1sen!2spg!4v1754624300023!5m2!1sen!2spg"
                  className="w-full h-full rounded-lg border-2 border-gray-300 shadow-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto w-full">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" required></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
