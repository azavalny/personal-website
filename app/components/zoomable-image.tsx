'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ZoomableImage(props) {
  let [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    let onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${props.alt}`}
        className="relative block w-full rounded-lg overflow-hidden cursor-zoom-in transition hover:opacity-90 hover:shadow-md"
      >
        <Image
          alt={props.alt}
          className="rounded-lg object-contain w-full h-auto"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          {...props}
        />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={props.alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
        >
          <img
            src={props.src}
            alt={props.alt}
            className="max-h-full max-w-full rounded-lg bg-white"
          />
        </div>
      )}
    </>
  )
}
