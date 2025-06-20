import { useState } from 'react'

function App() {

  return (
    <>
     <div className='min-h-screen flex flex-col items-center justify-center gap-3 sm:gap-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4'>
         <div className='flex flex-col items-center justify-center text-center backdrop-blur-xl bg-black/70 p-3 sm:p-5 rounded-2xl'>
          <h1 className='font-mono font-bold text-3xl text-white sm:text-4xl md:text-5xl mb-2 sm:mb-3 p-2 sm:p-5'>POKEMON MEMORY GAME</h1>
          <div className='mb-3 sm:mb-5 text-white text-lg sm:text-xl md:text-2xl'>
            <p>Score: </p>
            <p>Best Score: </p>
          </div>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 w-full max-w-3xl">

         </div>
     </div>
    </>
  )
}

export default App
