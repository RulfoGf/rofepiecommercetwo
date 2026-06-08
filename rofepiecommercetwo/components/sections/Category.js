
import Link from "next/link"

export default function Category() {
    return (
        <>
            <section className="category-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tpsection mb-40">
                                <h4 className="tpsection__title">Categorias <span> preferidas <img src="/assets/img/icon/title-shape-01.jpg" alt="" /></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row category-border pb-45 justify-content-xl-between">
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon p-relative">
                                <img src="/assets/img/svg/outline/uniforme.svg" alt="" className="fn__svg" />
                                <span>20</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/">Uniformes <br /> Corporativos</Link></h5>
                            </div>
                        </div>

                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon p-relative">
                                <img src="/assets/img/svg/outline/deportiva.svg" alt="" className="fn__svg" />
                                <span>20</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/">Sudaderas <br /> Deportiva</Link></h5>
                            </div>
                        </div>


                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/outline/shirtformal.svg" alt="" className="fn__svg" />
                                <span>12</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/">Camisas <br /> Polo</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/outline/T-shirt.svg" alt="" className="fn__svg" />
                                <span>03</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/">Playera <br /> T-shirt </Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/outline/uniformemujeres.svg" alt="" className="fn__svg" />
                                <span>09</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/"> Uniforme <br /> Femenino </Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/outline/interior.svg" alt="" className="fn__svg" />
                                <span>10</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/">Ropa  <br />  Interior</Link></h5>
                            </div>
                        </div>
                        <div className="tpcategory mb-40">
                            <div className="tpcategory__icon">
                                <img src="/assets/img/svg/outline/shorts.svg" alt="" className="fn__svg" />
                                <span>05</span>
                            </div>
                            <div className="tpcategory__content">
                                <h5 className="tpcategory__title"><Link href="/">Shorts <br /> Deportivos</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
