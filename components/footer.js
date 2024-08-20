export default function Footer() {
  return (
    <>
      <footer>
        <div className="gap-8 px-8 py-12 flex justify-center mx-auto md:flex md:items-center border-[#F8E197]md:justify-between md:px-12 lg:px-32 max-w-7xl">
          <ul className="flex justify-center gap-6 sm:mt-0">
            <li>
              <a
                href="https://x.com/realfwug?s=21&t=sgfKFdBTnXZ1t7D-U9QVvw"
                rel="noreferrer"
                target="_blank"
                className="text-[#F8E197] transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
