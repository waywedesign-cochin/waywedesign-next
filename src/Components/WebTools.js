import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
const WebTools = () => {
  return (
    <div className='py-2'>
    <section className="brand-two" style={{boxShadow: "0px 0px 17px -4px rgba(71,71,71,1)"}}>
<div className="container" >
<h5 className="section-title__title_tools text-center">Our Technologies </h5>
<div className="brand-two__inner">
  <Swiper className="thm-swiper__slider swiper-container"
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
}}'>
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/angular.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' style={{width:"150px"}} src="/assets/images/techno/aws.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/azure.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/css.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/goole-cloud.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/html-5.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/java.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/js.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
        <img className='techno-img' src="/assets/images/techno/php.png" alt="tool used" />
      </SwiperSlide>{/* /.swiper-slide */}
      <SwiperSlide className="swiper-slide">
       
        <img className='techno-img' src="/assets/images/techno/python.png" alt="tool used" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='techno-img' src="/assets/images/techno/react.png" alt="tool used" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
              <img className='techno-img' src="/assets/images/techno/sql.png" alt="tool used" />
            </SwiperSlide>{/* /.swiper-slide */}
        <SwiperSlide className="swiper-slide">
              <img className='techno-img' src="/assets/images/techno/wordpress.png" alt="tool used" />
            </SwiperSlide>{/* /.swiper-slide */}
        
    </div>
  </Swiper>
</div>
</div>
</section>

</div>
  )
}

export default WebTools