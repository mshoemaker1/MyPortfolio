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
        isActive
          ? "text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          : "text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      } block px-4 py-2 rounded-md transition-colors duration-200 ease-in-out`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
