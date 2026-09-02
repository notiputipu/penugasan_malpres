import Link from "next/link";

const Navbar = () => {
  return (
    <header className="grid h-20 grid-cols-3 items-center bg-black px-35 font-medium text-white">

      <h1 className="text-3xl">
        NAVBAR
      </h1>

      <nav className="flex justify-center gap-28">
        <Link href="#">Home</Link>
        <Link href="#">Menu</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact Us</Link>
      </nav>

      <div className="flex items-center justify-end gap-10">
        <Link href="#">Sign In</Link>

        <button className="rounded-full bg-button px-4 py-3 text-black">
          Sign Up
        </button>
      </div>

    </header>
  );
};

export default Navbar;