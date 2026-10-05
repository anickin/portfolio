'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; r: number }
type Packet = { from: number; to: number; t: number; speed: number }

const LINK_DISTANCE = 160

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const styles = getComputedStyle(document.documentElement)
    const lineColor = styles.getPropertyValue('--net-line').trim() || '#5d6470'
    const nodeColor = styles.getPropertyValue('--net-node').trim() || '#8a909a'
    const packetColor = styles.getPropertyValue('--primary').trim() || '#f0661a'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let packets: Packet[] = []
    let frame = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(90, Math.round((width * height) / 17000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() < 0.12 ? 2.2 : 1.2,
      }))
      packets = []
    }

    function spawnPacket() {
      const from = Math.floor(Math.random() * nodes.length)
      const a = nodes[from]
      let best = -1
      let bestDist = LINK_DISTANCE
      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue
        const d = Math.hypot(nodes[i].x - a.x, nodes[i].y - a.y)
        if (d < bestDist && Math.random() > 0.35) {
          best = i
          bestDist = d
        }
      }
      if (best >= 0) packets.push({ from, to: best, t: 0, speed: 0.006 + Math.random() * 0.006 })
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)

      ctx!.strokeStyle = lineColor
      ctx!.lineWidth = 0.5
      ctx!.globalAlpha = 0.15
      for (let x = 0; x < width; x += 48) {
        ctx!.beginPath()
        ctx!.moveTo(x, 0)
        ctx!.lineTo(x, height)
        ctx!.stroke()
      }
      for (let y = 0; y < height; y += 48) {
        ctx!.beginPath()
        ctx!.moveTo(0, y)
        ctx!.lineTo(width, y)
        ctx!.stroke()
      }
      ctx!.globalAlpha = 1

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20
      }

      ctx!.strokeStyle = lineColor
      ctx!.lineWidth = 1.2
      ctx!.lineCap = 'round'
      ctx!.lineJoin = 'round'
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const mx = (nodes[i].x + nodes[j].x) / 2
            ctx!.globalAlpha = 0.2 + (1 - dist / LINK_DISTANCE) * 0.55
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(mx, nodes[i].y)
            ctx!.lineTo(mx, nodes[j].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      ctx!.fillStyle = nodeColor
      for (const n of nodes) {
        ctx!.globalAlpha = n.r > 2 ? 0.7 : 0.5
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      if (packets.length < 6 && Math.random() < 0.03) spawnPacket()
      ctx!.fillStyle = packetColor
      packets = packets.filter((p) => {
        p.t += p.speed
        const a = nodes[p.from]
        const b = nodes[p.to]
        if (!a || !b || p.t >= 1) return false
        const midpoint = (a.x + b.x) / 2
        const segment = p.t * 3
        const x =
          segment < 1
            ? a.x + (midpoint - a.x) * segment
            : segment < 2
              ? midpoint
              : midpoint + (b.x - midpoint) * (segment - 2)
        const y =
          segment < 1
            ? a.y
            : segment < 2
              ? a.y + (b.y - a.y) * (segment - 1)
              : b.y
        ctx!.globalAlpha = Math.sin(p.t * Math.PI) * 0.85
        ctx!.beginPath()
        ctx!.arc(x, y, 1.8, 0, Math.PI * 2)
        ctx!.fill()
        return true
      })
      ctx!.globalAlpha = 1

      if (!reducedMotion) frame = requestAnimationFrame(draw)
    }

    function handleVisibility() {
      cancelAnimationFrame(frame)
      if (!document.hidden) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  )
}
