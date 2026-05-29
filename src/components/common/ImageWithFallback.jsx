'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
}) {
  const [imageSrc, setImageSrc] =
    useState(src)

  const safeSrc =
    typeof imageSrc ===
      'string' &&
    imageSrc.includes(
      'placehold.co'
    )
      ? '/fallback.png'
      : imageSrc

  return (
    <Image
      src={
        safeSrc ||
        '/fallback.png'
      }
      alt={alt}
      fill={fill}
      priority={priority}
      onError={() =>
        setImageSrc(
          '/fallback.png'
        )
      }
      className={className}
    />
  )
}