import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const slides = [
  { src: '/images/slides/slide1.png', alt: 'Children playing in rural area' },
  { src: '/images/slides/slide2.jpg', alt: 'Health worker with patient' },
  { src: '/images/slides/slide3.jpg', alt: 'Clinic facility interior' },
  { src: '/images/slides/slide4.jpg', alt: 'Community health session' },
  { src: '/images/slides/slide5.jpg', alt: 'Medical supplies' },
  { src: '/images/slides/slide6.jpg', alt: 'Health education campaign' },
  { src: '/images/slides/slide7.jpg', alt: 'Doctors in PNG hospital' },
  { src: '/images/slides/slide8.jpg', alt: 'Healthcare outreach team' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex flex-col pt-[104px]">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden mb-10">
          {/* Text Overlay */}
          <div className="absolute z-20 inset-0 sm:w-1/2 flex items-center justify-center sm:justify-start px-5 sm:px-12">
            <div className="text-white text-center sm:text-left max-w-md">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-left mb-4 leading-snug">
                HEALTH IS EVERYBODY'S BUSINESS
              </h1>
              <h3 className="text-base sm:text-lg font-semibold text-justify mb-6">
                A project under the National Deaprtment of Health (NDoH), co-financed by loan from the Asian Development Bank (ADB) and a grant from the Australian Government
              </h3>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/about" className="w-full sm:w-1/2">
                  <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    About Us
                  </button>
                </Link>
                <Link to="/activities" className="w-full sm:w-1/2">
                  <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    What We Do
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Left fade effect */}
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-black to-transparent"></div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            speed={1000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.src}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* About Section */}
        <Section title="About the Project">
          <p>
            The HSSDP is a comprehensive initiative aimed at improving health services across Papua New Guinea. 
            It focuses on strengthening health systems, enhancing service delivery, and ensuring sustainable health outcomes for all.
          </p>
        </Section>

        {/* News Section */}
        <Section title="Latest News and Updates" bgColor="bg-blue-100">
          <p>
            Stay updated with the latest news, project updates, and announcements related to the HSSDP. 
            Our commitment is to keep you informed about our progress and achievements.
          </p>
        </Section>

        {/* Publications Section */}
        <Section title="Featured Publications, Newsletters">
          <p>
            Explore our publications to learn more about the HSSDP, its objectives, and its impact on health services in Papua New Guinea.
          </p>
        </Section>

        {/* Contact section */}
        <section className="bg-blue-100 py-12 px-5 sm:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-lg">
                Visit us at our office or reach out using the details below.
              </p>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Office Location:</h3>
                <p>Sec 68 Lot 07, Ruta Place, Gordons</p>
                <p>Port Moresby, N.C.D.</p>
                <p>Papua New Guinea</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Phone:</h3>
                <p>(+675) 325 1206 | 325 1275</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Email:</h3>
                <p>info@pnghssdp.org</p>
              </div>
            </div>

            {/* Right Column: Embedded Map */}
            <div className="h-[250px] sm:h-[400px] w-full">
              <iframe
                title="HSSDP Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.3642960041993!2d147.1945924368803!3d-9.453803239687476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6902377679c50ad3%3A0xb11541bc843d738!2sHealth%20Services%20Sector%20Development%20Project%20Office!5e0!3m2!1sen!2spg!4v1754624300023!5m2!1sen!2spg"
                className="w-full h-full rounded-lg border-2 border-gray-300 shadow-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="HSSDP Office Location Map"
              />
            </div>
          </div>
        </section>


        <Footer />
      </main>
    </>
  );
}

function Section({ title, children, bgColor = '' }) {
  return (
    <section className={`${bgColor} py-12 px-5 sm:px-12`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="text-base leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

function ContactDetail({ label, lines }) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{label}:</h3>
      {lines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
}
