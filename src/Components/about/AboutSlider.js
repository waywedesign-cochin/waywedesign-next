import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
const AboutSlider = () => {
  const logos = [
    {
      image:"abet.png"
    },
    {
      image:"ad-school.png"
    },
    {
      image:"alta-Reg.png"
    },
    {
      image:"annai.png"
    },
    {
      image:"aoglogo.png"
    },
    {
      image:"beveron.png"
    },
    {
      image:"bhc-logo.jpg"
    },
    {
      image:"bimex.png"
    },
    {
      image:"bt.png"
    },
    {
      image:"caits.jpg"
    },
    {
      image:"carrytrip.png"
    },
    {
      image:"CeeCee.jpg"
    },
    {
      image:"chess.ed.png"
    },
    {
      image:"chungath.png"
    },
    {
      image:"Cosmos.png"
    },
    {
      image:"dailychakka.jpg"
    },
    {
      image:"enroute.jpg"
    },
    {
      image:"euromax.jpg"
    },
    {
      image:"evershine.jpg"
    },
    {
      image:"foodro.jpg"
    },
    {
      image:"foxtech.jpg"
    },
    {
      image:"icl-fin.jpg"
    },
    {
      image:"imagem.jpg"
    },
    {
      image:"kohinoor.jpg"
    },
    {
      image:"kreditbee.jpg"
    },
    {
      image:"Krishnmorgan.jpg"
    },
    {
      image:"lifecare24.jpg"
    },
    {
      image:"millow.jpg"
    },
    {
      image:"momstherapy.jpg"
    },
    {
      image:"nahiraljamal.jpg"
    },
    {
      image:"nakshathra.jpg"
    },
    {
      image:"popees.jpg"
    },
    {
      image:"refelectionz.jpg"
    },
    {
      image:"revauniversity.jpg"
    },
    {
      image:"seacco.jpg"
    },
    {
      image:"sicagen.jpg"
    },
    {
      image:"skydent.jpg"
    },
    {
      image:"skynursing.jpg"
    },
    {
      image:"sunnydental.jpg"
    },
    {
      image:"tetra.jpg"
    },
    {
      image:"trio.png"
    },
    {
      image:"tutelink.jpg"
    },
    {
      image:"zudio.jpg"
    },
    
  ]
  return (
    <div>
        <section className="brand-two">
  <div className="container py-4">
  <h2 className="section-title__title text-center pb-2">Our Clients</h2>
    <div className="brand-two__inner">
      <Swiper className="thm-swiper__slider swiper-container"
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
  }}'>
        <div className="swiper-wrapper">
          {
            logos.map((logo,index)=>{
              return(
                <SwiperSlide key={index} className="swiper-slide">
            <img src={`assets/images/brand/${logo.image}`} alt="brand logo" />
          </SwiperSlide>
              )
            })
          }
          </div>
      </Swiper>
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutSlider