import { useRef, useState, type ReactNode } from 'react'
import video from '@/shared/public/video.mp4'
import { Play } from 'lucide-react'

export const PlayerPage = (): ReactNode => {
  const [isPlaying, setIsPlaying] = useState(false)
  const refContainer = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (refContainer.current) {
      refContainer.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((_error) => {
          setIsPlaying(false)
        })
    }
  }

  return (
    <div className="w-screen h-screen relative bg-background">
      <video ref={refContainer} src={video} loop={true} autoPlay={false} muted className="w-screen h-screen bg-cover" />
      {!isPlaying && (
        <div className="z-50 fixed inset-0 bg-black/50 flex justify-center items-center">
          <button
            className="size-40 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-all duration-200"
            onClick={handlePlay}
          >
            <Play className="size-20 stroke-3 rounded-full hover:cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  )
}
