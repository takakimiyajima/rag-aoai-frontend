'use client'

import { selectMessage } from '@/features/messageSlice'
import { useAppSelector } from '@/hooks/useRTK'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import MessageItem from '@/components/MessageItem/MessageItem'

const MessageArea = () => {
  const pathname = usePathname()
  const message = useAppSelector(selectMessage)
  const data = message.onyourdata
  const scrollBottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [data])

  return (
    <div className="w-full overflow-auto pt-10">
      {data.length && data.map((d, index) => (
        <MessageItem
          key={index}
          isMan={d.isMan}
          message={d.message}
        />
      ))}
      <div ref={scrollBottomRef} />
    </div>
  )
}

export default MessageArea
