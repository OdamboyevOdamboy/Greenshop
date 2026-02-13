import cacktoose from './Pictures/cacktoose.svg'
import cacktop from './Pictures/cacktop.svg'
import cack1 from './Pictures/cack1.svg'
import flow1 from './Pictures/flow1.svg'
const Footer=()=>{
  return(
    <>
    <div className="w-full h-62.5 bg-[#FBFBFB] flex items-center">
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
        <div className='text-[18px] font-bold'>Would you like to join newsletters?</div>
        <div className='w-88.5 h-10'>
          <input type="text" name="" id="" className='rounded-md h-10 shadow-[0 0 20 0 to-black]' placeholder='enter your email address...'/>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer