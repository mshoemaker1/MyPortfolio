const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  const d = isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16";

  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={d}
      />
    </svg>
  );
};

export default HamburgerIcon;
