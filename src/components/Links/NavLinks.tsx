import { NavLinkstyled } from "./styledNavLink";
export function HederNavLink({ children, title, to }: any) {
  return (
    <NavLinkstyled to={to}>
      {title}
      {children}
    </NavLinkstyled>
  );
}
