import { useState, useEffect } from 'react'

export default function useIsVisible(ref) {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  })
  return isVisible
}
