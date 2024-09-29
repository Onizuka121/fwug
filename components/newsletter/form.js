"use client";

import { useState } from "react";
import { sendMail } from "../../actions";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Loader2 } from "lucide-react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = async (e) => {
    e.preventDefault();

    setError(null);
    setIsLoading(true);

    try {
      const result = await sendMail(email);
      if (result.error) {
        setError(result.error);
      }
      setIsSuccessModalOpen(!result.error);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
          className="w-full bg-transparent px-3 py-2 placeholder:text-black  border-2 border-black backdrop-blur-3xl shadow-xl rounded-lg md:w-auto md:font-semibold text-[#65B1E0]"
          required
          disabled={isLoading}
        />

        <div className="flex animate-on-scroll flex-col items-center gap-3 mt-10 md:flex-row">
          <Button
            type="submit"
            className="flex group items-center justify-center w-full h-10 p-5 text-xl hover:ring-1 md:w-auto md:font-semibold  border-4 border-black 
              rounded-xl
              shadow-[0.40em_0.40em] 
              cursor-pointer 
              transition 
              duration-150 
              transform 
              hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.60em_0.60em] 
              active:translate-x-0 active:translate-y-0 active:shadow-[0.05em_0.05em]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin bungee" />
                <span className="text-lg text-[#65B1E0]">Subscribing...</span>
              </>
            ) : (
              <span className="text-lg text-[#65B1E0] bungee">Subscribe</span>
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
  );
}
