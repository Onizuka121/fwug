import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex p-2 items-center justify-center mx-auto border border-[#F8E197] rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }