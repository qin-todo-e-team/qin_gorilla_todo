type Props = {
  color: string;
  isSelected: boolean;
  handleSelected: () => void;
};

export const RadioButton = ({ color, handleSelected, isSelected }: Props) => {
  const bgColor: string = isSelected ? color : "bg-white";
  return (
    <>
      <div
        className="flex justify-center p-[0.15rem] mr-1 w-5 h-5 rounded-full ring-2 ring-gray-200"
        onClick={handleSelected}
      >
        <button
          title="button"
          className={`outline-none w-full h-full rounded-full ${bgColor}`}
        />
      </div>
    </>
  );
};
