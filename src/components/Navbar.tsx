import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div>
          <Link href="/">CB</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
