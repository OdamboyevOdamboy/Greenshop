import './Heeder.css'
import bigflow from './Pictures/bigflower.svg'
import flow2 from './Pictures/flow2.svg'
import flow3 from './Pictures/flow3.svg'
import flo1 from './Pictures/flo1.svg'
import search from './Pictures/search.svg'
import flo2 from './Pictures/flo2.svg'
import flo3 from './Pictures/flo3.svg'
import flo4 from './Pictures/flo4.svg'
import flo5 from './Pictures/flo5.svg'
import flo6 from './Pictures/flo6.svg'
import flo7 from './Pictures/flo7.svg'
import flo8 from './Pictures/flo8.svg'
import flo9 from './Pictures/flo9.svg'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import React from 'react';
// Swiper React komponentlari va modullari
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/pagination';

// Slaydlar uchun ma'lumotlar (Buni xohlagancha o'zgartirishingiz mumkin)
const slidesData = [
  {
    id: 1,
    welcome: "Welcome to Greenshop",
    title: "LET'S MAKE A ",
    titleGreen: "BETTER PLANET",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    img: bigflow // Birinchi rasm linki
  },
  {
    id: 2,
    welcome: "New Season Collection",
    title: "UPGRADE YOUR ",
    titleGreen: "LIVING SPACE",
    desc: "Discover our new arrivals of indoor plants that bring life and fresh air to your home office or living room. Starting from $12!",
    img: bigflow // Ikkinchi rasm linki
  }
];

const Hero = () => {
  return (
    <div className="hero-section" style={{ background: '#fbfbfb', padding: '40px 0' }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #46A358;"></span>`;
          }
        }}
        autoplay={{ 
          delay: 4000, // Har 4 sekundda o'zgaradi
          disableOnInteraction: false 
        }}
        loop={true}
        className="mySwiper"
        style={{ height: '450px' }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '0 8%',
              height: '100%'
            }}>
              {/* Matn qismi */}
              <div style={{ maxWidth: '550px', textAlign: 'left' }}>
                <p style={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: '500', color: '#3D3D3D' }}>
                  {slide.welcome}
                </p>
                <h1 style={{ fontSize: '65px', fontWeight: '900', margin: '10px 0', lineHeight: '1.2', color: '#3D3D3D' }}>
                  {slide.title} <span style={{ color: '#46A358' }}>{slide.titleGreen}</span>
                </h1>
                <p style={{ color: '#727272', fontSize: '14px', lineHeight: '24px', marginBottom: '35px' }}>
                  {slide.desc}
                </p>
                <button style={{ 
                  backgroundColor: '#46A358', 
                  color: 'white', 
                  border: 'none', 
                  padding: '12px 28px', 
                  borderRadius: '6px', 
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>
                  SHOP NOW
                </button>
              </div>

              {/* Rasm qismi */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                <img src={slide.img} alt="Plant" className='relative' />
                <img src={slide.img} alt="Plant" className='absolute size-33.75 bottom-7  left-11' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination (dumaloqlar) uchun qo'shimcha CSS */}
      <style>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </div>
  );
};
const Flocards = ({ img, text, text1, text2 }) => {
  return (
    <>
      <div className='w-64.5 bsd'>
        <div className='w-full h-75 flex items-center justify-center relative bg-[#FBFBFB]'>
          <div className='h-px bg-[#46A358] absolute top-0 std'></div>
          <img src={img} alt="" className='mix-blend-multiply' />
          <div className='w-31.25 h-8.75 absolute bottom-1.75 flex justify-between sgd'>
            <div className='size-8.75 rounded-sm flex items-center justify-center bg-white'>
              <FaCartShopping />
            </div>
            <div className='size-8.75 rounded-sm flex items-center justify-center bg-white'>
              <FaHeart className='text-red-500' />
            </div>
            <div className='size-8.75 rounded-sm flex items-center justify-center bg-white'>
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        <div className='text-[16px] text-[#3D3D3D] mt-3 font-semibold'>{text}</div>
        <div className='w-[130.78px] flex justify-between'>
          <div className='text-[16px] text-[#46A358] font-bold'>{text1}</div>
          <div>{text2}</div>
        </div>
      </div>
    </>
  )
}
const Home = () => {
  return (
    <>
      <Hero/>
      <div className='w-full mt-6.5 flex justify-between'>
        <div className='w-77.5 h-311'>
          <div className='w-full h-193.5 bg-[#FBFBFB] flex justify-center'>
            <div className='w-67 h-95.75 mt-3.5'>
              <div className='text-[18px] font-bold'>Categories</div>
              <div className='w-64 flex justify-between pl-2.5'>
                <div className='w-22.75 h-90 leading-10 text-[15px] text-[#3D3D3D]'>
                  <div className='text-[#46A358] font-semibold'>House Plants</div>
                  <div>Potter Plants</div>
                  <div>Seeds</div>
                  <div>Small Plants</div>
                  <div>Big Plants</div>
                  <div>Succulents</div>
                  <div>Trerrariums</div>
                  <div>Gardening</div>
                  <div>Accessories</div>
                </div>
                <div className='w-7 h-90 leading-10'>
                  <div className='text-[#46A358] font-semibold'>(33)</div>
                  <div>(12)</div>
                  <div>(65)</div>
                  <div>(39)</div>
                  <div>(23)</div>
                  <div>(17)</div>
                  <div>(19)</div>
                  <div>(13)</div>
                  <div>(18)</div>
                </div>
              </div>
              <div className='w-56.5 h-33.25 mt-9'>
                <div className='font-bold text-[18px]'>Price Range</div>
                <div className='flex ml-2 mt-5'>
                  <div className='w-38.75 h-1 bg-[#46A358] flex items-center relative'>
                    <div className='size-5 bg-[#46A358] rounded-[50%] border-[3px] border-[white] absolute -left-0.5'></div>
                  </div>
                  <div className='w-16 h-1 bg-[#46A35833] flex items-center relative'>
                    <div className='size-5 bg-[#46A358] rounded-[50%] border-[3px] border-[white] absolute -left-0.5'></div>
                  </div>
                </div>
                <div className='text-[#3D3D3D] w-31.25 h-4 flex items-center justify-between mt-5.25 text-[16px]'>Price:
                  <span className='font-semibold text-[#46A358]'>$39 - $1230</span>
                </div>
                <button className='bg-[#46A358] text-[white] text-[16px] font-semibold w-22.5 h-8.75 rounded-md mt-4'>Filter</button>
              </div>
              <div className='w-67 h-35.75 mt-11.5'>
                <div className='text-[18px] font-bold'>Size</div>
                <div className='w-64 flex justify-between pl-2.5'>
                  <div className='leading-10 text-[15px] text-[#3D3D3D]'>
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                  </div>
                  <div className='w-7.5 h-30 leading-10 text-[15px] text-[#3D3D3D]'>
                    <div>(119)</div>
                    <div>(86)</div>
                    <div>(78)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-117.5 lineargr relative'>
            <div className='w-full flex justify-around'><img src={flow2} alt="" /></div>
            <div className='w-full flex justify-around text-[23px] font-bold mt-2'>UP TO 75% OFF</div>
            <div className='size-3.75 rounded-[29px] lineargr1 top-29 left-9.5 absolute'></div>
            <div className='size-5.5 lineargr2 rounded-[7px] left-4 absolute top-74.75'></div>
            <div className='size-11.25 rounded-[29px] lineargr1 top-85.75 right-4.25 absolute'></div>
            <div className='h-92.5 relative flex justify-around items-center'>
              <div className='size-92.5 absolute -top-6.75'>
                <img src={flow3} alt="" className='mix-blend-multiply size-92.5' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-210'>
          <div className='w-full h-5.75 flex justify-between'>
            <div className='w-64.5 flex justify-between relative'>
              <div className='text-[15px] text-[#46A358] font-bold'>All Plants</div>
              <div className='text-[15px] text-[#3D3D3D]'>New Arrivals</div>
              <div className='text-[15px] text-[#3D3D3D]'>Sale</div>
              <div className='absolute bottom-0 h-0.5 bg-green-600 span-r transition-[0.8s] w-[66.28px]'></div>
            </div>
            <div className='flex'>
              <div className='text-[15px] text-[#3D3D3D]'>Short by:</div>
              <div className=''>
                <select name="" id="">
                  <option value="">Default sorting</option>
                </select>
              </div>
            </div>
          </div>
          <div className='w-full mt-7.75'>
            <div className='w-full flex justify-between'>
              <Flocards img={flo1} text={"Barberton Daisy"} text1={"$119.00"} />
              <Flocards img={flo2} text={"Angel Wing Begonia"} text1={"$169.00"} />
              <Flocards img={flo3} text={"African Violet"} text1={"$199.00"} text2={"$229.00"} />
            </div>
            <div className='w-full flex justify-between mt-17.5'>
              <Flocards img={flo4} text={"Beach Spider Lily"} text1={"$129.00"} />
              <Flocards img={flo5} text={"Blushing Bromeliad"} text1={"$139.00"} />
              <Flocards img={flo6} text={"Aluminum Plant"} text1={"$179.00"} text2={""} />
            </div>
            <div className='w-full flex justify-between mt-17.5'>
              <Flocards img={flo7} text={"Beach Spider Lily"} text1={"$129.00"} />
              <Flocards img={flo8} text={"Blushing Bromeliad"} text1={"$139.00"} />
              <Flocards img={flo9} text={"Aluminum Plant"} text1={"$179.00"} text2={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home