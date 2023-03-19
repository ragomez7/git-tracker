import { useEffect, useState } from 'react'

export default function useTypingEffect(text: string) {
  const [count, setCount] = useState(0)
  const [renderedText, setRenderedText] = useState('')
  useEffect(() => {
    if (count <= text.length) {
      setTimeout(() => {
        setCount(count + 1)
        setRenderedText(text.split('').splice(0, count).join(''))
      }, 20)
    }
  }, [count, text])

  return renderedText
}
