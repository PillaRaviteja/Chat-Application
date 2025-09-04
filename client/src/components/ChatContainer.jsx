import React from 'react'
import { asset } from '../assets/assets'

const ChatContainer = ({selectedUser ,setSelectedUser}) => {
  return selectedUser ?(
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      {/* ----header----- */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={asset.profile_ravi} alt=" "  className='w-8 rounded-full'/>
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Raviteja Pilla
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={()=> setSelectedUser(null)} src={asset.arrow_icon} alt="" className='md:hidden max-w-7'/>
        <img src={asset.help_icon} alt="" className='max-md:hidden max-w-5'/>
      </div>
      {/* -----chat area----- */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {}

      </div>
    </div>
  ) :(
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500
    bg-white/10 max-md:hidden '>
      <img src={asset.logo_icon} alt="" className='max-md:hidden max-w-20'/>
      <p className='text-3xl font-light text-white'>Chat Realtime with your Loved Ones</p>
    </div>
  )
}

export default ChatContainer