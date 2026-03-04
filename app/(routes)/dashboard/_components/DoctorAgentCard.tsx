import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type doctorAgent={
    id: number,
    specialist: string,
    description: string,
    image: string,
    agentPrompt: string
}

type props={
    doctorAgent: doctorAgent
}

function DoctorAgentCard({doctorAgent}: props) {
  return (
    <div>
      <Image src={doctorAgent.image} alt={doctorAgent.specialist} width={200} height={200} className='rounded-lg'/>
      <h3 className='font-bold text-lg mt-2'>{doctorAgent.specialist}</h3>
      <p className='text-sm text-gray-600'>{doctorAgent.description}</p>  
        <Button className='mt-2'>Consult<ArrowRight className="ml-2 w-4 h-4" /></Button>
     
    </div>
  )
}

export default DoctorAgentCard
