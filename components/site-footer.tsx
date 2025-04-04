import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                className="h-8 text-primary"
              />
             
            </Link>
            <p className="max-w-xs">Detailing Management Solution</p>
          </div>
        </div>

        <div className="flex justify-center rounded-md border-neutral-700/20 py-4 px-8">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              DetailerPro
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}