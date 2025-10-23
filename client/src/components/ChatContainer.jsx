import React, { useEffect ,useRef } from 'react';
import { asset, messagesDummyData } from '../assets/assets';

const ChatContainer = ({ selectedUser, setSelectedUser }) => {

  const scrollEnd = useRef();

  useEffect(() => { 
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoView({behavior:"smooth"});
    }
  },[])

  const currentUserId = '680f50e4f10f3cd28382ecf9'; // Bobby Manepalli

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* ----header----- */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={asset.profile_ravi} alt="Raviteja Pilla" className="w-8 rounded-full" />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Raviteja Pilla
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={asset.arrow_icon}
          alt="Back"
          className="md:hidden max-w-7 cursor-pointer"
        />
        <img src={asset.help_icon} alt="Help" className="max-md:hidden max-w-5" />
      </div>

      {/* -----chat area----- */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {Array.isArray(messagesDummyData) &&
          messagesDummyData.map((msg) => {
            const isCurrentUser = msg.senderId === currentUserId;
            const senderAvatar = isCurrentUser ? asset.avatar_icon : asset.profile_ravi;
            const messageTime = new Date(msg.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            });

            return (
              <div
                key={msg._id}
                className={`flex items-end gap-2 justify-end ${
                  !isCurrentUser ? 'flex-row-reverse' : ''
                }`}
              >
                {msg.image ? (
                  <img
                    src={msg.image}
                    alt="Chat media"
                    className="max-w-[230px] border border-gray-700 rounded-lg mb-8"
                  />
                ) : (
                  msg.text && (
                    <p
                      className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                        isCurrentUser ? 'rounded-br-none' : 'rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </p>
                  )
                )}

                <div className="text-center text-xs">
                  <img src={senderAvatar} alt="User avatar" className="w-7 rounded-full" />
                  <p className="text-gray-500">{messageTime}</p>
                </div>
              </div>
            );
          })}
          <div ref={scrollEnd} role='presentation'>

          </div>

          {/* -------bottom area------- */}

            <div className='absolute bottom-0 left-0 right-0 flex itemms-center gap-3 p-3'>
              <div className='flex-1 flex items-center bg-gray-100/12 rounded-full'>
                <input type="text" placeholder='Send a Message' 
                className='flex-1 text-sm p-3 border-none rounded-lg outline-none
                text-white placeholder-gray-400'/>
                <input type='file' id='image' accept='image/png, image/jpeg' hidden/>
                <label htmlFor='image'>
                  <img src={asset.gallery_icon} alt='' className='w-5 mr-2
                  cursor-pointer'/>
                </label>
              </div>
              <img src={asset.send_button} alt="" className='w-7 cursor-pointer' />
            </div>

      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={asset.logo_icon} alt="App Logo" className="max-md:hidden max-w-20" />
      <p className="text-3xl font-light text-white">Chat Realtime with your Loved Ones</p>
    </div>
  );
};

export default ChatContainer;