import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';

import '../styles/style.css';
import Navbar from '../components/Navbar';
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
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-[#ffdfba] items-center">
        <Navbar />
        <main className="max-w-full pt-20 px-4 overflow-x-auto text-center items-center">
          <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            "HEALTH IS EVERYBODY'S BUSINESS"
          </h1>
          <h3 className="text-black font-semibold text-2xl">
            A project co-financed by a loan from the Asian Development Bank and a grant from the Australian Government
          </h3>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            effect='coverflow'
            coverflowEffect={{
              rotate: -50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="my-8 w-full max-w-3xl mx-auto z-10"
           >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className='flex justify-center items-center'>
                <div className='w-full max-w-[800px] h-[450px] overflow-hidden rounded-lg shadow-lg'>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
                </div>
              </SwiperSlide>
            ))}                        
          </Swiper>
          <p className="text-black max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Welcome to the official website of the Health Services Sector Development Project (HSSDP). 
            Our mission is to enhance the health services in our community through innovative projects and initiatives.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}
