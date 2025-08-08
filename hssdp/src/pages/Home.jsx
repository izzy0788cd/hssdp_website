import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';

import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const slides = [
  { src: '/images/slides/slide1.png', alt: 'Slide 1' },
  { src: '/images/slides/slide2.jpg', alt: 'Slide 2' },
  { src: '/images/slides/slide3.jpg', alt: 'Slide 3' },
  { src: '/images/slides/slide4.jpg', alt: 'Slide 4' },
  { src: '/images/slides/slide5.jpg', alt: 'Slide 5' },
  { src: '/images/slides/slide6.jpg', alt: 'Slide 6' },
  { src: '/images/slides/slide7.jpg', alt: 'Slide 7' },
  { src: '/images/slides/slide8.jpg', alt: 'Slide 8' },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col pt-26 sm:pt-26">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden mb-10">
          {/* Text Content */}
          <div className="absolute z-20 top-0 left-0 h-full w-full sm:w-1/2 flex items-center justify-center sm:justify-start px-5 sm:px-12">
            <div className="text-white text-center sm:text-left max-w-md">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
                "HEALTH IS EVERYBODY'S BUSINESS"
              </h1>
              <h3 className="text-base sm:text-lg font-semibold">
                A project co-financed by a loan from the Asian Development Bank and a grant from the Australian Government
              </h3>
            </div>
          </div>

          {/* Left fade effect */}
          <div className="absolute z-10 left-0 top-0 h-full w-full sm:w-1/1 bg-gradient-to-r from-black to-transparent"></div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* About section */}
        <section className="py-12 px-5 sm:px-12">
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8'>
            <h2 className="text-2xl font-semibold mb-3">About the Project</h2>
            <p className="text-base leading-relaxed">
              The HSSDP is a comprehensive initiative aimed at improving health services across Papua New Guinea. 
              It focuses on strengthening health systems, enhancing service delivery, and ensuring sustainable health outcomes for all.
            </p>
          </div>
        </section>

        {/* Latest news, updates section */}
        <section className="bg-blue-100 py-12 px-5 sm:px-12">
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8'>
            <h2 className="text-2xl font-semibold mb-3">Latest News and Updates</h2>
            <p className="text-base leading-relaxed">
              Stay updated with the latest news, project updates, and announcements related to the HSSDP. 
              Our commitment is to keep you informed about our progress and achievements.
            </p>
          </div>
        </section>

        {/* Publication section */}
        <section className="py-12 px-5 sm:px-12">
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8'>
          <h2 className="text-2xl font-semibold mb-3">
            Featured Publications, Newsletters
          </h2>
          <p className="text-base leading-relaxed">
            Explore our publications to learn more about the HSSDP, its objectives, and its impact on health services in Papua New Guinea.
          </p>
        </div>
        </section>

        {/* Contact section */}
        <section className="bg-blue-100 py-12 px-5 sm:px-12">
          
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Contact Text - Left */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold mb-6 text-left ">Contact Us</h2>
              <p className="text-lg">
                Visit us at our office or reach out using the details below.
              </p>

              <div>
                <h3 className="font-semibold text-lg">Office Location:</h3>
                <p>Sec 68 Lot 07, Ruta Place, Gordons</p>
                <p>Port Moresby, N. C. D.</p>
                <p>Papua New Guinea</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone:</h3>
                <p>(+675) 325 1206 | 325 1275</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email:</h3>
                <p>info@pnghssdp.org</p>
              </div>
            </div>

            {/* Map - Right */}
            <div className="md:w-2/2 h-[250px] sm:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.3642960041993!2d147.1945924368803!3d-9.453803239687476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6902377679c50ad3%3A0xb11541bc843d738!2sHealth%20Services%20Sector%20Development%20Project%20Office!5e0!3m2!1sen!2spg!4v1754624300023!5m2!1sen!2spg"
                className="w-full h-full rounded-lg border-2 border-gray-300 shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
