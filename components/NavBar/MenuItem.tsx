import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const MenuItem = ({ href, label, onClick }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "underline" : "hover:underline"
      } text-black dark:text-gray-300 block px-4 py-2 underline-offset-8 md:text-xl`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
