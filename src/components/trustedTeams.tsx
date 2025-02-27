'use client'

import Image from "next/image";
import figmaColor from '../../public/images/figma-color.svg'
import ramp from '../../public/images/ramp.svg'
import toyotaColor from '../../public/images/toyota-color.svg'
import vercel from '../../public/images/vercel.svg'

const images = [
    {
        image: toyotaColor,
        alt: 'Toyota'
    },
    {
        image: vercel,
        alt: 'Vercel'
    },
    {
        image: figmaColor,
        alt: 'Figma'
    },
    {
        image: ramp,
        alt: 'Ramp'
    },
]

export default function ImageCollection() {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-start gap-x-10">
        {images.map((img, index) => (
          <div key={index} className="relative h-10 w-21">
            <Image
              src={img.image}
              alt={img.alt}
              fill
              className="object-contain z-1"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
