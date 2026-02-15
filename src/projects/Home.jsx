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
    <div className='w-full mt-6.5'>
      <div className='w-77.5 h-193.5 bg-[#FBFBFB] flex justify-center'>
        <div className='w-67 h-95.75 mt-3.5'>
          <div className='text-[18px] font-bold'>Categories</div>
          <div className='w-64 flex justify-between pl-7.5'>
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
          <div className='w-67 h-35.75 mt-11.5 ml-7.5'>
            <div className='text-[18px] font-bold'>Size</div>
            <div className='w-64 flex justify-between'>
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
    </div>
    </>
  )
}
export default Home