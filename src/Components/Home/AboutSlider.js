import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from 'next/image'
import "swiper/css";

const logos = [
  { image: '/assets/images/brand/abet.png',
alt:"abet" },
  { image: '/assets/images/brand/ad-school.png' ,
  alt:"ad-school"},
  { image: '/assets/images/brand/alta-Reg.png',
  alt:"alta reg" },
  { image: '/assets/images/brand/annai.png' ,
  alt:"annai"},
  { image: '/assets/images/brand/aoglogo.png',
  alt:"aoglogo" },
  { image: '/assets/images/brand/beveron.png' ,
  alt:"beveron"},
  { image: '/assets/images/brand/bhc-logo.jpg',
  alt:"bhc logo" },
  { image: '/assets/images/brand/bimex.png',
  alt:"bimex" },
  { image: '/assets/images/brand/bt.png',
  alt:"bt logo" },
  { image: '/assets/images/brand/caits.jpg',
  alt:"catis" },
  { image: '/assets/images/brand/carrytrip.png',
  alt:"carrytrip" },
  { image: '/assets/images/brand/CeeCee.jpg',
  alt:"ceecee" },
  { image: '/assets/images/brand/chess.ed.png',
  alt:"chess.ed" },
  { image: '/assets/images/brand/chungath.png',
  alt:"chungath" },
  { image: '/assets/images/brand/Cosmos.png',
  alt:"cosmos" },
  { image: '/assets/images/brand/dailychakka.jpg',
  alt:"dailychakka" },
  { image: '/assets/images/brand/enroute.jpg',
  alt:"enroute" },
  { image: '/assets/images/brand/euromax.jpg',
  alt:"euromax" },
  { image: '/assets/images/brand/evershine.jpg',
  alt:"evershine" },
  { image: '/assets/images/brand/foodro.jpg',
  alt:"foodro" },
  { image: '/assets/images/brand/foxtech.jpg',
  alt:"foxtech" },
  { image: '/assets/images/brand/icl-fin.jpg',
  alt:"icl fin" },
  { image: '/assets/images/brand/imagem.jpg',
  alt:"imagem" },
  { image: '/assets/images/brand/kohinoor.jpg',
  alt:"kohinoor" },
  { image: '/assets/images/brand/kreditbee.jpg',
  alt:"kreditbee" },
  { image: '/assets/images/brand/Krishnmorgan.jpg',
  alt:"krishnmorgan" },
  { image: '/assets/images/brand/lifecare24.jpg',
  alt:"lifecare 24" },
  { image: '/assets/images/brand/millow.jpg' ,
  alt:"millow"},
  { image: '/assets/images/brand/momstherapy.jpg' ,
  alt:"momstherapy"},
  { image: '/assets/images/brand/nahiraljamal.jpg',
  alt:"nahiraljamal" },
  { image: '/assets/images/brand/nakshathra.jpg',
  alt:"nakshatra" },
  { image: '/assets/images/brand/popees.jpg',
  alt:"popees" },
  { image: '/assets/images/brand/refelectionz.jpg',
  alt:"reflectionz" },
  { image: '/assets/images/brand/revauniversity.jpg',
  alt:"reva university" },
  { image: '/assets/images/brand/seacco.jpg',
  alt:"seacco" },
  { image: '/assets/images/brand/sicagen.jpg',
  alt:"sicagen" },
  { image: '/assets/images/brand/skydent.jpg',
  alt:"skydent" },
  { image: '/assets/images/brand/skynursing.jpg',
  alt:"skynursing" },
  { image: '/assets/images/brand/sunnydental.jpg',
  alt:"sunnydental" },
  { image: '/assets/images/brand/tetra.jpg',
  alt:"tetra" },
  { image: '/assets/images/brand/trio.png',
  alt:"trio" },
  { image: '/assets/images/brand/tutelink.jpg',
  alt:"tutelink" },
  { image: '/assets/images/brand/zudio.jpg',
  alt:"zudio" },
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
                delay: 1000,
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
                    <Image width="220" height="80" src={logo.image} alt={logo.alt} />
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
