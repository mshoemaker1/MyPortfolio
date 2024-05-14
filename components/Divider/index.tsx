interface DividerProps {
  borderColor?: "border-white" | "border-black";
}

export const Divider = ({ borderColor }: DividerProps) => (
  <div className="w-full flex justify-center">
    <div
      className={`flex self-center border-black border-b-[1px] w-11/12 my-32 dark:border-white ${borderColor}`}
    />
  </div>
);
