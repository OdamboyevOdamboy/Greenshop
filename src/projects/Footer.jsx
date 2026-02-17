import cacktoose from './Pictures/cacktoose.svg'
import cacktop from './Pictures/cacktop.svg'
import cack1 from './Pictures/cack1.svg'
import flow1 from './Pictures/flow1.svg'
import './Heeder.css'
import flover from './Pictures/flover.svg'
import local from './Pictures/local.svg'
import gmail from './Pictures/gmail.svg'
import phone from './Pictures/phone.svg'
import fasebook from './Pictures/fasebook.svg'
import instagram from './Pictures/instagram.svg'
import twitter from './Pictures/twitter.svg'
import linkedin from './Pictures/linkedin.svg'
import union from './Pictures/union.svg'
import cards from './Pictures/cards.svg'
const Footer=()=>{
  return(
    <>
    <div className="w-full h-62.5 bg-[#FBFBFB] flex items-center justify-center mt-25">
      <div className='w-6xl h-50.25 flex items-center'>
        <div className='w-65 pt-11.5 pl-5.75'>
          <div className="bg-[#46A35821] size-18.5 rounded-[50%] relative">
            <div className='absolute -top-6 -right-1.5'>
              <img src={cacktop} alt="" />
              <img src={cacktoose} alt="" />
            </div>
          </div>
          <div className='text-[17px] mt-3.75 font-bold'>Garden Care</div>
          <div className='text-[14px] leading-5.5 w-51'>We are an online plant shop offering a wide range of cheap and trendy plants.</div>
        </div>
        <div className='w-0.5 h-46.75 bg-[#46A3581A]'></div>
        <div className='w-65 pt-11.5 pl-5.75'>
          <div className="bg-[#46A35821] size-18.5 rounded-[50%] relative">
            <div className='absolute -top-4 -right-2'>
              <img src={cack1} alt="" />
            </div>
          </div>
          <div className='text-[17px] mt-3.75 font-bold'>Plant Renovation</div>
          <div className='text-[14px] leading-5.5 w-51'>We are an online plant shop offering a wide range of cheap and trendy plants.</div>
        </div>
        <div className='w-0.5 h-46.75 bg-[#46A3581A]'></div>
        <div className='w-65 pt-11.5 pl-5.75'>
          <div className="bg-[#46A35821] size-18.5 rounded-[50%] relative">
            <div className='absolute -top-3 -right-3.5'>
              <img src={flow1} alt="" />
            </div>
          </div>
          <div className='text-[17px] mt-3.75 font-bold'>Plant Renovation</div>
          <div className='text-[14px] leading-5.5 w-51'>We are an online plant shop offering a wide range of cheap and trendy plants.</div>
        </div>
        <div>
          <div className='text-[18px] font-bold mt-9.25'>Would you like to join newsletters?</div>
          <div className='w-88.5 h-10 flex relative mt-4.5 rounded-md shadow1'>
            <input type="text" name="" id="" className='rounded-md h-10 w-88.5 pl-2.75' placeholder='enter your email address...'/>
            <button className='absolute right-0 w-21.25 h-10 bg-[#46A358] rounded-r-md text-[white] font-bold'>Join</button>
          </div>
          <div className='w-88.5 mt-4.25 text-[13px]'>We usually post offers and challenges in newsletter. We’re your 
            online houseplant destination. We offer a wide range of houseplants and 
            accessories shipped directly from our (green)house to yours! </div>
        </div>
      </div>
    </div>
    <div className='w-full h-22 bg-[#46A3581A] flex items-center justify-around pr-66.75'>
      <div>
        <div className="w-37.5 flex items-center"><img src={flover} alt="" className='size-[34.3px]'/><span className='text-[#46A358] font-bold text-[18.7px]'>GREENSHOP</span></div>
      </div>
      <div className='flex w-51.25 justify-between'>
        <img src={local} alt="" />
        <div className='w-44 h-11 leading-5.5 text-[14px]'>70 West Buckingham Ave. Farmingdale, NY 11735</div>
      </div>
      <div className='flex w-[184.78px] justify-between items-center'>
        <img src={gmail} alt="" className='size-5'/>
        <div className='text-[14px] h-5.5'>contact@greenshop.com</div>
      </div>
      <div className='flex w-[147.2px] justify-between items-center'>
        <img src={phone} alt="" className='size-5'/>
        <div className='text-[14px] h-5.5'>+88 01911 717 490</div>
      </div>
    </div>
    <div className='w-full h-59 bg-[#FBFBFB] flex justify-around items-center'>
      <div>
        <div className='text-[18px] font-bold'>My Account</div>
        <div className='leading-7.5 text-[14px]'>
          <div>My Account</div>
          <div>Our stores</div>
          <div>Contact us</div>
          <div>Career</div>
          <div>Specials</div>
        </div>
      </div>
      <div>
        <div className='text-[18px] font-bold'>Help & Guide</div>
        <div className='leading-7.5 text-[14px]'>
          <div>Help Center</div>
          <div>How to Buy</div>
          <div>Shipping & Delivery</div>
          <div>Product Policy</div>
          <div>How to Return</div>
        </div>
      </div>
      <div>
        <div className='text-[18px] font-bold'>Categories</div>
        <div className='leading-7.5 text-[14px]'>  
          <div>House Plants</div>
          <div>Potter Plants</div>
          <div>Seeds</div>
          <div>Small Plants</div>
          <div>Accessories</div>
        </div>
      </div>
      <div className='pr-38.75'>
        <div className='text-[18px] font-bold'>Social Media</div>
        <div className='text-[14px] flex justify-between w-47.5 mt-5'> 
          <div className='size-7.5 rounded-sm border border-[#46A35833] flex justify-center items-center'>
            <img src={fasebook} alt="" />
          </div>
          <div className='size-7.5 rounded-sm border border-[#46A35833] flex justify-center items-center'>
            <img src={instagram} alt="" />
          </div>
          <div className='size-7.5 rounded-sm border border-[#46A35833] flex justify-center items-center'>
            <img src={twitter} alt="" />
          </div>
          <div className='size-7.5 rounded-sm border border-[#46A35833] flex justify-center items-center'>
            <img src={linkedin} alt="" />
          </div>
          <div className='size-7.5 rounded-sm border border-[#46A35833] flex justify-center items-center'>
            <img src={union} alt="" />
          </div>
        </div>
        <div className='text-[18px] font-bold mt-8.25'>We accept</div>
        <div className='mt-3.25'><img src={cards} alt="" /></div>
      </div>
    </div>
    <div className='w-full flex justify-center mt-1.75'>
      <div className='text-[14px]'>© 2021 GreenShop. All Rights Reserved.</div>
    </div>
    </>
  )
}
export default Footer