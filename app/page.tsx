import Image from 'next/image'
import { getAuthSession } from '@/lib/auth'
import Slider from '@/components/ComponentUnique/Slider'
import Portrait_Guillaume from '@/components/ComponentUnique/Portrait_Guillaume'

export default async function Home() {
  
  const session = await getAuthSession()
  return (
    <div className=" pt-20 flex overflow-hidden flex-col items-center justify-center p-5">
      <Image className='rounded-lg border border-indigo-600 flex items-center justify-center  m-auto object-cover '
      src={"/assets/acceuilTattou.png"}
      width={800}
      height={800}
      alt="acceuil"
      />
      <div className="pt-10">
      <Slider/>
      </div>
      <Portrait_Guillaume/>


   
      
    </div>
  )
}
