import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation,Pagination,Autoplay} from "swiper/modules"
import{React} from "react"
const Carousel=() =>{
    return(
        <Swiper modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable:true}}
            autoplay={{delay:3000}}>

            <SwiperSlide>
                <img src="/diapositiva1.jpg" alt="Slide1" className="slide"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="/diapositiva2.jpg" alt="Slide2" className="slide"/>
            </SwiperSlide>
        
            <SwiperSlide>
                <img src="/diapositiva3.jpg" alt="Slide3" className="slide"/>
            </SwiperSlide>
        
        </Swiper>

    );
};

export default Carousel;