const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-10 px-[100px] py-[130px]">{children}</div>;
};

export default PageLayout;
