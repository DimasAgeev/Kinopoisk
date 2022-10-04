import { Linkstyled } from "./styledLink";
export function HederLink({ children, title, to }: any) {
  return (
    <Linkstyled to={to}>
      {title}
      {children}
    </Linkstyled>
  );
}
