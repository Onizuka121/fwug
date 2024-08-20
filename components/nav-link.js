import Link from "next/link";

export default function NavLink({ href, children }) {

    return (
    <Link
      className={`hover:text-[#f8e19779] text-md duration-150 focus:outline-none link-underline-animation text-[#f8e197d3] ${
        href === "pricing" ? " md:mr-auto" : " "
      } ${
        href === "features" ? " md:ml-40" : " "
      }`}
      href={`#${href}`}
    >
      {children}
    </Link>
  );
}
