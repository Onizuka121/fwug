import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from "../components/ui/button"

export default function VideoComponent({urlbase}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-4/5 max-w-[400px] shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.60em_0.60em] 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em] aspect-[9/16] bg-black border-4 border-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          playsInline
        >
          <source src={`video/${urlbase}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#4d8bb2] bg-[#F8E197]"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#4d8bb2] bg-[#F8E197]"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}