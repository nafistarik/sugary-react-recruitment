"use client"

import { useRef, useCallback, useState, useEffect } from "react"

export const useInfiniteScroll = (loadMore: () => void, hasMore: boolean, isLoading: boolean) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting && hasMore && !isLoading) {
        loadMore()
      }
    },
    [loadMore, hasMore, isLoading],
  )

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    })

    if (element) {
      observer.current.observe(element)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [handleObserver, element])

  return { setElement }
}
