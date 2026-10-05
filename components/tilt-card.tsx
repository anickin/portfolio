'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

const MAX_TILT = 5

export function TiltCard({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    ref.current.style.setProperty('--ry', `${((x - 0.5) * MAX_TILT * 2).toFixed(2)}deg`)
    ref.current.style.setProperty('--rx', `${((0.5 - y) * MAX_TILT * 2).toFixed(2)}deg`)
    ref.current.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    ref.current.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  }

  function handleLeave() {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={style}
      className={cn('glass tilt rounded-xl', className)}
    >
      {children}
    </div>
  )
}
