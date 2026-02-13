import './Heeder.css'
import bigflow from './Pictures/bigflower.svg'
const Home=()=>{
  return(
    <>
    <div className="w-full h-112.5 bg-[#F5F5F580] flex relative justify-center">
      <div className="w-1/2 flex flex-col p-flex">
        <span className="text-[14px] text-[#3D3D3D]">WELCOME TO GREENSHOP</span>
        <span className="text-[70px] font-bold leading-17.5 mt-1.75">LET’S MAKE A BETTER <span className="text-[#46A358]">PLANET</span></span>
        <span className="text-[16px] text-[#727272] mt-1.25">We are an online plant shop offering a 
          wide range of cheap and trendy plants. 
          Use our plants to create an unique Urban Jungle. Order your favorite plants!</span>
          <button className="bg-[#46A358] w-35 h-10 text-[white] rounded-md mt-11 text-[16px]">SHOP NOW</button>
      </div>
      <div className='w-1/2'>
        <div className='relative -right-27 -top-12'>
          <img src={bigflow} alt=""/>
          <img src={bigflow} alt="" className='w-33.75 absolute bottom-8.75 ml-13.75'/>
        </div>
      </div>
      <div className='absolute bottom-4.25 w-10 h-2 flex justify-around'>
        <div className='size-2 bg-[#46A3584D] rounded-[50%]'></div>
        <div className='size-2 bg-[#46A358] rounded-[50%]'></div>
        <div className='size-2 bg-[#46A3584D] rounded-[50%]'></div>
      </div>
    </div>
    </>
  )
}
export default Home