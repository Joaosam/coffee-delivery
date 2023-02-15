import "styled-components";
import { themeDefault } from "../styles/themes/default";

type themeType = typeof themeDefault;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
