import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from 'next/image'
import "swiper/css";

const logos = [
  { image: '/assets/images/brand/abet.png' },
  { image: '/assets/images/brand/ad-school.png' },
  { image: '/assets/images/brand/alta-Reg.png' },
  { image: '/assets/images/brand/annai.png' },
  { image: '/assets/images/brand/aoglogo.png' },
  { image: '/assets/images/brand/beveron.png' },
  { image: '/assets/images/brand/bhc-logo.jpg' },
  { image: '/assets/images/brand/bimex.png' },
  { image: '/assets/images/brand/bt.png' },
  { image: '/assets/images/brand/caits.jpg' },
  { image: '/assets/images/brand/carrytrip.png' },
  { image: '/assets/images/brand/CeeCee.jpg' },
  { image: '/assets/images/brand/chess.ed.png' },
  { image: '/assets/images/brand/chungath.png' },
  { image: '/assets/images/brand/Cosmos.png' },
  { image: '/assets/images/brand/dailychakka.jpg' },
  { image: '/assets/images/brand/enroute.jpg' },
  { image: '/assets/images/brand/euromax.jpg' },
  { image: '/assets/images/brand/evershine.jpg' },
  { image: '/assets/images/brand/foodro.jpg' },
  { image: '/assets/images/brand/foxtech.jpg' },
  { image: '/assets/images/brand/icl-fin.jpg' },
  { image: '/assets/images/brand/imagem.jpg' },
  { image: '/assets/images/brand/kohinoor.jpg' },
  { image: '/assets/images/brand/kreditbee.jpg' },
  { image: '/assets/images/brand/Krishnmorgan.jpg' },
  { image: '/assets/images/brand/lifecare24.jpg' },
  { image: '/assets/images/brand/millow.jpg' },
  { image: '/assets/images/brand/momstherapy.jpg' },
  { image: '/assets/images/brand/nahiraljamal.jpg' },
  { image: '/assets/images/brand/nakshathra.jpg' },
  { image: '/assets/images/brand/popees.jpg' },
  { image: '/assets/images/brand/refelectionz.jpg' },
  { image: '/assets/images/brand/revauniversity.jpg' },
  { image: '/assets/images/brand/seacco.jpg' },
  { image: '/assets/images/brand/sicagen.jpg' },
  { image: '/assets/images/brand/skydent.jpg' },
  { image: '/assets/images/brand/skynursing.jpg' },
  { image: '/assets/images/brand/sunnydental.jpg' },
  { image: '/assets/images/brand/tetra.jpg' },
  { image: '/assets/images/brand/trio.png' },
  { image: '/assets/images/brand/tutelink.jpg' },
  { image: '/assets/images/brand/zudio.jpg' },
];

const AboutSlider = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <section className="brand-two">
        <div className="container py-4">
          <h2 className="section-title__title text-center pb-2">Our Clients</h2>
          <div className="brand-two__inner">
            <Swiper
              className="thm-swiper__slider swiper-container"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              spaceBetween={100}
              slidesPerView={5}
              loop={true}
              breakpoints={{
                "0": {
                  "spaceBetween": 30,
                  "slidesPerView": 2
                },
                "375": {
                  "spaceBetween": 30,
                  "slidesPerView": 2
                },
                "575": {
                  "spaceBetween": 30,
                  "slidesPerView": 3
                },
                "767": {
                  "spaceBetween": 50,
                  "slidesPerView": 4
                },
                "991": {
                  "spaceBetween": 50,
                  "slidesPerView": 5
                },
                "1199": {
                  "spaceBetween": 100,
                  "slidesPerView": 6
                }
              }}
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                "0": {
                  "spaceBetween": 30,
                  "slidesPerView": 2
                },
                "375": {
                  "spaceBetween": 30,
                  "slidesPerView": 2
                },
                "575": {
                  "spaceBetween": 30,
                  "slidesPerView": 3
                },
                "767": {
                  "spaceBetween": 50,
                  "slidesPerView": 4
                },
                "991": {
                  "spaceBetween": 50,
                  "slidesPerView": 5
                },
                "1199": {
                  "spaceBetween": 100,
                  "slidesPerView": 6
                }
              }}'
            >
              <div className="swiper-wrapper">
                {logos.map((logo, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <Image width="220" height="80" src={logo.image} alt="brand logo" />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSlider;
