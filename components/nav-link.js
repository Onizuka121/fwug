import Link from "next/link";

export default function NavLink({ href, children , isLink=false }) {

    return (
    <Link
      className={`hover:text-[#65B1E0] text-xl duration-150 focus:outline-none link-underline-animation text-[#65B1E0] ${
        href === "pricing" ? " md:mr-auto" : " "
      } ${
        href === "features" ? " md:ml-40" : " "
      }`}
      href={`${isLink ? href : "#"+href}`}
    >
      {children}
    </Link>
  );
}
