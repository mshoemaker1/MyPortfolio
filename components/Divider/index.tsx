interface DividerProps {
  borderColor?: "border-white" | "border-black";
  marginTop?: boolean;
  marginBottom?: boolean;
}

export const Divider = ({
  borderColor,
  marginBottom = true,
  marginTop = true,
}: DividerProps) => (
  <div className="w-full flex justify-center">
    <div
      className={`flex self-center border-black border-b-[1px] w-11/12 
      ${marginTop ? "mt-32" : ""}
      ${marginBottom ? "mb-32" : ""}
      ${borderColor}
      dark:border-white
      `}
    />
  </div>
);
