import Link from "next/link";

export default function NavLink({ href, children }) {

    return (
    <Link
      className={`hover:text-[#65B1E0] text-2xl duration-150 focus:outline-none link-underline-animation text-[#65B1E0] ${
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
