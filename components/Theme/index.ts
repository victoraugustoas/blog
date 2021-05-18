import { createMuiTheme } from "@material-ui/core";

export type ThemeType = "dark" | "light";

export const theme = (type: ThemeType) => createMuiTheme({});
