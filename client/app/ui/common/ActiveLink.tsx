"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLinkProps } from "@/app/lib/definitions";
import { clsx } from "clsx";

const ActiveLink = ({
  children,
  href,
  className = "",
  activeClassName = "",
  exact = false,
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={clsx(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
};

export default ActiveLink;
