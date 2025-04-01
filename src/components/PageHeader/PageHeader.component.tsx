interface IPageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: IPageHeaderProps) => {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="title-large">{title}</h1>
      <p className="body-medium">{description}</p>
    </header>
  );
};

export default PageHeader;
