import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
export const myFont = localFont({ src: "font-custom.ttf" });

export default function SpanText({ text }) {
  return (
    <>
      <span className={`${myFont.className} text-4xl text-[#65B1E0]`}>
        {text}
      </span>
    </>
  );
}
