import { SectionTitleContainer } from "./styled";

interface SectionTitleProps {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export function SectionTitle({ title, subTitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div className="contentHeader">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </SectionTitleContainer>
  );
}
