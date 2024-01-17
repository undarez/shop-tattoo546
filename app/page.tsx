import Image from 'next/image'
import { getAuthSession } from '@/lib/auth'
import Slider from '@/components/ComponentUnique/Slider'
import Portrait_Guillaume from '@/components/ComponentUnique/Portrait_Guillaume'
import Service from '@/components/ComponentUnique/Service'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Power } from 'lucide-react'
import clsx from 'clsx'
import { buttonVariants } from '@/components/ui/button'
import { getUserEdit } from '@/src/themes/query/user.query'
import UploadForm from '@/components/ComponentUnique/UploaderForm'

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
      <UploadForm/>
      </div>
      <Portrait_Guillaume/>
      <Service/>
      <span className="textarea w-3/5 font-light text-wrap align-baseline text-sm ">Dans notre studio, votre sécurité est notre priorité. Chaque création est réalisée avec du matériel jetable, stérile et de qualité médicale. Nous surpassons les normes sanitaires pour vous offrir une expérience de tatouage sans compromis sur la sécurité et l`hygiène. Votre satisfaction et votre bien-être sont au cœur de notre engagement, assurant des souvenirs artistiques durables dans les conditions les plus sûres.</span>


   
      
    </div>
  )
}
