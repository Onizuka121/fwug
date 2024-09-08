'use client'

import { useState } from "react"
import { sendMail } from "../../actions"
import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog"
import { Loader2 } from "lucide-react"

export default function Form() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMail = async (e) => {
    e.preventDefault()

    setError(null)
    setIsLoading(true)

    try {
      const result = await sendMail(email)
      if(result.error){
        setError(result.error)
      }
      setIsSuccessModalOpen(!result.error)
      
      
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSendMail} className="mt-4 flex flex-col">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent px-3 py-2 placeholder:text-white/50 md:max-w-[18rem] border border-[#F8E197] backdrop-blur-3xl shadow-xl rounded-lg md:w-auto md:font-semibold text-[#F8E197]"
          required
          disabled={isLoading}
        />

        <div className="flex animate-on-scroll flex-col items-center gap-3 mt-10 md:flex-row">
          <Button
            type="submit"
            className="flex group items-center chakra-petch-semibold justify-center w-full h-10 p-5 text-xl transition duration-300 hover:ring-1 hover:ring-[#F8E197] border border-[#F8E197] backdrop-blur-3xl shadow-xl rounded-lg md:w-auto md:font-semibold"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span className="text-xl text-[#F8E197]">Subscribing...</span>
              </>
            ) : (
              <span className="text-xl text-[#F8E197]">Subscribe</span>
            )}
          </Button>
        </div>
      </form>

      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
        <div className="mt-4 flex justify-center">
            <Image
              src="/images/image26.jpg"
              alt="Subscription success image"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
          <DialogHeader>
            <DialogTitle>Subscription Successful!</DialogTitle>
            <DialogDescription>
              Thank you for subscribing to our newsletter.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button onClick={() => setIsSuccessModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}