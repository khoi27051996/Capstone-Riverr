import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const HomeTemplate = () => {
  return (
    <MainBody>
      <div className="Img-header"></div>
      <div className=" tabs">
        <div className="flex gap-10 justify-center items-center tabs_content">
          <NavLink to="">Trusted by: </NavLink>
          <NavLink to="">F A C E B O O K </NavLink>
          <NavLink to="">Google </NavLink>
          <NavLink to="">NETFLIX </NavLink>
          <NavLink to="">PsG </NavLink>
          <NavLink to="">PayPal </NavLink>
        </div>
      </div>
      <div className="carousel">
        <h1>Popular Professional Services</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          //   loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <img src="/images/Carousel-1.jpg" alt="" />
            <div className="carousel-content">
              <p>Build your brand</p>
              <h1 className="font-bold">Logo Design</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-2.jpg" alt="" />
            <div className="carousel-content">
              <p>Customize your site</p>
              <h1 className="font-bold">WordPress</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-3.jpg" alt="" />
            <div className="carousel-content">
              <p>Share your message</p>
              <h1 className="font-bold">Voice Over</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-4.jpg" alt="" />
            <div className="carousel-content">
              <p>Engage your audience</p>
              <h1 className="font-bold">Video Explainer</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-5.jpg" alt="" />
            <div className="carousel-content">
              <p>Reach more customers</p>
              <h1 className="font-bold">Social Media</h1>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          //   loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="/images/Carousel-1.jpg" alt="" />
            <div className="carousel-content">
              <p>Build your brand</p>
              <h1 className="font-bold">Logo Design</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-2.jpg" alt="" />
            <div className="carousel-content">
              <p>Customize your site</p>
              <h1 className="font-bold">WordPress</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-3.jpg" alt="" />
            <div className="carousel-content">
              <p>Share your message</p>
              <h1 className="font-bold">Voice Over</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-4.jpg" alt="" />
            <div className="carousel-content">
              <p>Engage your audience</p>
              <h1 className="font-bold">Video Explainer</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/carousel-5.jpg" alt="" />
            <div className="carousel-content">
              <p>Reach more customers</p>
              <h1 className="font-bold">Social Media</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="content-bg-color">
        <div className="content grid grid-cols-12">
          <div className="content_text md:col-span-6  col-span-12">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div>
              <h2>
                <i className="fa-regular fa-circle-check"></i>
                The best of for every budget
              </h2>
              <p>
                Find the right freelancer to begin working on your project
                within minutes
              </p>
            </div>
            <div>
              <h2>
                <i className="fa-regular fa-circle-check"></i>
                Quality work done quickly
              </h2>
              <p>
                Find the right freelancer to begin working on your project
                within minutes
              </p>
            </div>
            <div>
              <h2>
                <i className="fa-regular fa-circle-check"></i>
                Projected payment, every time
              </h2>
              <p>
                Always know that you'll pay upfront. Your payment isn't released
                until approve the work
              </p>
            </div>
            <div>
              <h2>
                <i className="fa-regular fa-circle-check"></i>
                27/7 support
              </h2>
              <p>
                Question? Our round-the-clock support team is available to help
                anytime, anywhere
              </p>
            </div>
          </div>
          <div className="content_video md:col-span-6 col-span-12">
            <iframe
              width="100%%"
              height="315"
              src="https://www.youtube.com/embed/cWOcyo4wTUk?si=WKqWEV0BpdSrPtf4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="carousel">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          //   loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-12 gap-5 justify-items-center align-middle">
              <div className="md:col-span-6  col-span-12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/CxMwlm2gRa8?si=FIqXzXoeMlVNreTF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="md:col-span-6  col-span-12 px-[20px]">
                <p>
                  Kay Kim, Co-Founded |{" "}
                  <span className="font-bold">rooted</span>
                </p>
                <h1 className="text-green-500 italic">
                  "It's extremelly exciting that Fiverr has freelancers from all
                  over the world - it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleep, someone's
                  working
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-12 gap-5 justify-items-center align-middle">
              <div className="md:col-span-6  col-span-12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/YffZGDI29sg?si=37o9RCBElDCBWRJf"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="md:col-span-6  col-span-12 px-[20px]">
                <p>
                  Kay Kim, Co-Founded |{" "}
                  <span className="font-bold">rooted</span>
                </p>
                <h1 className="text-green-500 italic">
                  "It's extremelly exciting that Fiverr has freelancers from all
                  over the world - it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleep, someone's
                  working
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="explore">
        <h1 className="font-bold text-[30px]">Explore the marketplace</h1>
        <div className=" grid md:grid-cols-5 grid-cols-2">
          <div className="explore_items">
            <i className="fa-solid fa-pen"></i>
            <p>Graphics & Design</p>
          </div>
          <div className="explore_items">
            <i className="fa-solid fa-computer"></i>
            <p>Digital Marketing</p>
          </div>
          <div className="explore_items">
            <i className="fa-regular fa-newspaper" />
            <p>Writing & translation</p>
          </div>
          <div className="explore_items">
            <i className="fa-solid fa-film"></i>
            <p>Video & Animation</p>
          </div>
          <div className="explore_items">
            <i className="fa-solid fa-microphone"></i>
            <p>Music & Audio</p>
          </div>
          <div className="explore_items">
            <i className="fa-solid fa-chalkboard-user"></i>
            <p>Programming & Tech</p>
          </div>
          <div className="explore_items">
            <i className="fa-regular fa-handshake"></i>
            <p>Business</p>
          </div>
          <div className="explore_items">
            <i className="fa-solid fa-mug-saucer"></i>
            <p>Lifestyle</p>
          </div>
          <div className="explore_items">
            <i className="fa-solid fa-database"></i>
            <p>Data</p>
          </div>
          <div className="explore_items">
            <i className="fa-brands fa-hire-a-helper"></i>
            <p>Support 24/7</p>
          </div>
        </div>
      </div>
    </MainBody>
  );
};

const MainBody = styled.body`
.mySwiper2{
  display: none;
}
  .Img-header {
    background-image: url("/images/Fiverr-Gig-Ideas.jpg");
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
  .tabs {
    background-color: #e8e6e6;
    color: #8c8989;
    .tabs_content {
      height: var(--header-height);
   
      margin: 0 auto;
    }
    .mySwiper {
      display: flex;
      flex-direction: column;
    }
  }
  .carousel {
    cursor: pointer;
    margin: 0 auto;
    h1 {
      font-weight: bold;
      font-size: 30px;
      color: #2d2b2b;
      margin: 20px 0;
    }
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      position: relative;
      border-radius: 5px;
      filter: brightness(70%);
    }
    .carousel-content {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      h1 {
        font-weight: bold;
        font-size: 20px;
        color: white;
        margin: 0;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .content-bg-color {
    background-color: #64c59358;
  }
  .content {

    margin: 50px 0;

    padding: 60px 20px;

    .content_text {
     
      h1 {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
      }
      h2 {
        font-weight: bold;
        i {
          margin-right: 10px;
        }
      }
      p {
        margin: 10px 0;
      }
    }
    .content_video {
      margin-top: 50px;
     
      height: 100%;
    }
  }

  .explore {
 
    margin: 50px auto;
    .explore_items {
      text-align: center;
      margin-top: 50px;
      i {
        color: #23c873d2;
        font-size: 30px;
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          margin-top: 10px;
          background-color: gray;
        }
      }
      p {
        color: gray;
      }
    }
  }
`;
