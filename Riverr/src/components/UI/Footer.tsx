import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container className="mt-[100px]">
      <img
        className="w-full"
        src="https://cinestar.com.vn/catalog/view/theme/default/images/line-bg.png"
        alt="..."
      />
      <div className="footer-content">
        <div className="info">
          <div className="mt-[40px] grid grid-cols-12 md:gap-[50px] gap-[20px]">
            <div className="lg:col-span-2 sm:col-span-4 col-span-5">
              <p className="font-700 text-20 font-bold">
                <span className="text-[var(--primary-color)]">Cate</span>
                gories
              </p>
              <NavLink to="">Graphics & Design</NavLink>
              <NavLink to="">Digital Marketing</NavLink>
              <NavLink to="">Writing & Translation</NavLink>
              <NavLink to="">Video & Animation</NavLink>
              <NavLink to="">Music & Audio</NavLink>
              <NavLink to="">Programming & Tech</NavLink>
              <NavLink to="">Data</NavLink>
              <NavLink to="">Business</NavLink>
              <NavLink to="">LifeStyle</NavLink>
              <NavLink to="">Sitemap</NavLink>
            </div>
            <div className="lg:col-span-2 sm:col-span-4 col-span-5">
              <p className="font-700 text-20 font-bold">
                <span>About</span>
              </p>
              <NavLink to="">Careers</NavLink>
              <NavLink to="">Press & New</NavLink>
              <NavLink to="">Partnerships</NavLink>
              <NavLink to="">Privacy</NavLink>
              <NavLink to="">Terms of Services</NavLink>
              <NavLink to="">Intellectual Property Claims</NavLink>
              <NavLink to="">Investor Relations</NavLink>
            </div>
            <div className="lg:col-span-2 sm:col-span-4 col-span-5">
              <p className="font-700 text-20 font-bold">
                <span>Support</span>
              </p>
              <NavLink to="">Help & Support</NavLink>
              <NavLink to="">Trust & Safety</NavLink>
              <NavLink to="">Selling on Fiverr</NavLink>
              <NavLink to="">Buying on Fiverr</NavLink>
            </div>
            <div className="lg:col-span-2 sm:col-span-4 col-span-5">
              <p className="font-700 text-20 font-bold">
                <span>Communty</span>
              </p>
              <NavLink to="">Event</NavLink>
              <NavLink to="">Blog</NavLink>
              <NavLink to="">Forum</NavLink>
              <NavLink to="">Community Standards</NavLink>
              <NavLink to="">Popcast</NavLink>
              <NavLink to="">Affilliates</NavLink>
              <NavLink to="">Invite a Friend</NavLink>
              <NavLink to="">Become a Seller</NavLink>
              <NavLink to="">Fiverr Elevate</NavLink>
              <p className="text-gray-300 text-[13px]">Exclusive Benefits</p>
            </div>
            <div className="lg:col-span-2 sm:col-span-4 col-span-5">
              <p className="font-700 text-20 font-bold">
                <span>More From Fiverr</span>
              </p>
              <NavLink to="">Fiverr Business</NavLink>
              <NavLink to="">Fiverr Pro</NavLink>
              <NavLink to="">Fiverr Studios</NavLink>
              <NavLink to="">Fiverr Logo Maker</NavLink>
              <NavLink to="">Fiverr Guides</NavLink>
              <NavLink to="">Get Inspired</NavLink>
              <NavLink to="">ClearVoice</NavLink>
              <p className="text-gray-300 text-[13px]">Content Marketing</p>
              <NavLink to="">AND CO</NavLink>
              <p className="text-gray-300 text-[13px]">Invoice Sofware</p>
              <NavLink to="">Learn</NavLink>
              <p className="text-gray-300 text-[13px]">Online Courses</p>
            </div>
          </div>
        </div>
        <div className="foot-bottom ">
          <div className="flex my-[30px] justify-between">
            <div className="flex align-middle">
              <h1 className="text-[25px] text-gray-500 font-bold">fiverr</h1>
              <p className="text-gray-300 text-[13px] ms-[20px] align-middle pt-[5px]">
                Fiverr international Ltd.2021
              </p>
            </div>
            <div className="grid md:grid-cols-7 grid-cols-3 gap-[30px]">
              <NavLink to="https://www.twitter.com">
                <i className="fa-brands fa-twitter"></i>
              </NavLink>
              <NavLink to="https://www.facebook.com">
                <i className="fa-brands fa-facebook"></i>
              </NavLink>
              <NavLink to="">
                <i className="fa-brands fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="">
                <i className="fa-brands fa-pinterest"></i>
              </NavLink>
              <NavLink to="https://www.instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink to="">
                <i className="fa-solid fa-globe"></i> English
              </NavLink>
              <NavLink to="">
                <i className="fa-solid fa-dollar-sign"></i> USD
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  .footer-content {
    max-width: 100%;
    margin: auto;
    padding: 20px 40px;

    .info {
      a {
        transition: all 0.3s ease-in-out;
        display: block;
        margin-top: 16px;
        &:hover {
          color: var(--primary-color);
          text-shadow: var(--primary-color) 0 0 1px;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100%;
        background-color: gray;
        height: 2px;
      }
    }
  }

  .foot-bottom {
    i {
      font-size: 20px;
      color: gray;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
  .foot-bottom::after {
    content: "";
    display: block;
    background-color: black;
    height: 5px;
    width: 100%;
  }
`;
