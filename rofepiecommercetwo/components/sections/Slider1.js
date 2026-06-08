'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },

}

import Link from "next/link"

export default function Slider1() {
    return (
        <>
            <section className="slider-area pb-25">
                <div className="container">
                    <div className="row justify-content-xl-end">
                        <div className="col-xl-9 col-xxl-7 col-lg-9">
                            <div className="tp-slider-area p-relative">
                                <div className="swiper-container slider-active">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="tp-slide-item">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Inversión inteligente</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Ahorra<i> <br/>+ del 20% <img src="/assets/img/icon/title-shape-02.jpg" alt="" /></i> 
                                                          <br/>Trato directo</h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop">Cotiza ahora <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="/assets/img/slider/banner-1.png" alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tp-slide-item">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Entregas a tiempo</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Te lo firmamos
                                                        <i> <br/>en contrato
                                                            <img src="/assets/img/icon/title-shape-02.jpg" alt="" />
                                                        </i>
                                                          <br/>Somos fabricantes
                                                    </h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop">Te cotizamos <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="/assets/img/slider/banner-2.jpg" alt="" />
                                                </div>
                                            </div>
                                            
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tp-slide-item">
                                                <div className="tp-slide-item__content">
                                                    <h4 className="tp-slide-item__sub-title">Haz realidad tu proyecto</h4>
                                                    <h3 className="tp-slide-item__title mb-25">Te damos tu prototipo <i> <br/>en un día <img src="/assets/img/icon/title-shape-02.jpg" alt="" /></i> 
                                                         <br/>Sin compromiso</h3>
                                                    <Link className="tp-slide-item__slide-btn tp-btn" href="/shop">Cotiza ahora <i className="fal fa-long-arrow-right" /></Link>
                                                </div>
                                                <div className="tp-slide-item__img">
                                                    <img src="/assets/img/slider/banner-3.jpeg" alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="slider-pagination" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-xxl-3 col-lg-3">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="tpslider-banner tp-slider-sm-banner mb-30">
                                        <Link href="/shop-details">
                                            <div className="tpslider-banner__img">
                                                <img src="/assets/img/slider/banner-slider-01.png" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">Soluciones Integrales</span>
                                                    <h4 className="tpslider-banner__title">Pregunta por  <br /> el paquete  <br />completo  <br /> y sin costos <br />ocultos</h4>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="tpslider-banner">
                                        <Link href="/shop-details">
                                            <div className="tpslider-banner__img">
                                                <img src="/assets/img/slider/banner-slider-02.png" alt="" />
                                                <div className="tpslider-banner__content">
                                                    <span className="tpslider-banner__sub-title">AQL 1.5</span>
                                                    <h4 className="tpslider-banner__title">Desde el corte hasta empaque <br /> 
                                                        Calidad Garantizada</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
