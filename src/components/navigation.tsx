import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col bg-zinc-600 w-64 h-full">
      <Link href="/">Dashboard</Link>
      <Link href="/second"></Link>
      <Link href="/third">First</Link>
    </nav>
  );
};

export default Navigation;
