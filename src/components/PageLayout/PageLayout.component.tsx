const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-[100px] md:ml-[240px] flex justify-center">
      <div className="flex flex-col gap-10 px-5 py-10 md:px-[40px] md:py-[130px] w-[800px]">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
