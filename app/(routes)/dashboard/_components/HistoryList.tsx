// import React, { useState } from 'react'
// import Image from 'next/image'

// function HistoryList() {
//   const [historyList, setHistoryList] = useState([]);
//   return (
//     <div>
//       {
//         historyList.length == 0 ?
//         <div>
//           <Image src={'medical-assistance.png'} alt='empty' width={200} height={200} />
//         </div>
//         :<div>List</div>
        
      
//       }
      
//     </div>
//   )
// }

// export default HistoryList


"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className='mt-10'>
      {
        historyList.length === 0 ?
        <div className='flex items-center flex-col justify-center p-7 border border-dashed rounded-3xl border-2'>
          <Image 
            src="/medical-assistance.png"
            alt="empty"
            width={150}
            height={150}
          />
          <h2 className='font-bold text-xl mt-2'>No Recent  Consultations</h2>
          <p>It looks like you haven't consulted with any doctors yet.</p>
          <Button className='mt-3'>+ Start a Consultation</Button>
        </div>
        : <div>List</div>
      }
    </div>
  )
}

export default HistoryList;