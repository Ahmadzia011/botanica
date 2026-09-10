import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function NavBar() {
  const { userId } = await auth();

  return (
    <>
    <div className="absolute top-0 inset-x-0 z-[60] h-7 bg-[#173b2c] text-[#e6c98f] flex items-center justify-center text-[9px] sm:text-[10px] uppercase tracking-[.2em] font-medium">
      This is a demo dummy project
    </div>
    <header className="fixed top-9 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-6xl z-50">
      <div className="bg-[#FAF9F5]/75 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_rgba(31,61,48,0.08)] rounded-full px-4 sm:px-6 h-18 flex items-center justify-between w-full">
        <Link
          href="/"
          className="text-sm sm:text-base font-semibold tracking-[0.28em] text-[#1E2B24] uppercase select-none"
        >
          Botanica
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-[#2B4C3F] transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-[#2B4C3F] transition-colors">
            Shop
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-[#2B4C3F] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {!userId ? (
          <div className="flex items-center gap-2">
            <SignInButton>
              <button className="text-xs cursor-pointer font-semibold text-gray-700 hover:text-[#2B4C3F] px-3 py-2 transition-colors">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="text-xs cursor-pointer font-bold bg-[#1F3D30] text-white hover:bg-[#152a21] transition-all px-4 py-2 rounded-full shadow-sm hover:shadow-md">
                Sign up
              </button>
            </SignUpButton>
          </div>
        ) : (
          <div className="flex items-center pr-1">
            <UserButton />
          </div>
        )}
      </div>
    </header>
    </>
  );
}
