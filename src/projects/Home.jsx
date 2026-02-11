import './Heeder.css'
import bigflow from './Pictures/bigflower.svg'
const Home=()=>{
  return(
    <>
    <div className="w-full bg-[#F5F5F580] flex p-flex">
      <div className="w-1/2 flex flex-col">
        <span className="text-[clamp(10px,2vmin,14px)] text-[#3D3D3D]">WELCOME TO GREENSHOP</span>
        <span className="text-[clamp(60px,2vmin,70px)] font-bold leading-19">LET’S MAKE A BETTER <span className="text-[#46A358]">PLANET</span></span>
        <span className="text-[clamp(12px,2vmin,16px)] text-[#727272]">We are an online plant shop offering a 
          wide range of cheap and trendy plants. 
          Use our plants to create an unique Urban Jungle. Order your favorite plants!</span>
          <button className="bg-[#46A358] w-[clamp(100px,2vmin,140px)] h-[clamp(30px,2vmin,40px)] text-[white] rounded-md mt-11">SHOP NOW</button>
      </div>
      <div className='w-1/2 flex'><img src={bigflow} alt="" className='w-1/4'/><img src={bigflow} alt="" className='w-[clamp(488px,9vmin,518px)]'/></div>
    </div>
    </>
  )
}
export default Home