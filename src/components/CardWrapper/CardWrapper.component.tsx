const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-2 shadow-md text-primaryBlack bg-secondaryBlue w-full p-6 rounded-lg min-h-[150px]">
      {children}
    </div>
  );
};

export default CardWrapper;
