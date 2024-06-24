import { ILayout } from "./interfaces";

const updateTheme = async (data: ILayout, source: any, newMode?: string) => {
  if (source?.target?.type === "color" && source?.target?.value) source = source.target.value;
  const theme = await ui("theme", source) as IBeerCssTheme;
  data.theme.dark = theme.dark;
  data.theme.light = theme.light;
  updateMode(data, newMode ?? ui("mode") as string);
};

const updateMode = (data: ILayout, newMode?: string) => {
  const mode = newMode ?? (ui("mode") === "dark" ? "light" : "dark");
  void ui("mode", mode);
  data.theme.selected = mode;
  data.isDark = mode === "dark";
};

export default {
  updateTheme,
  updateMode,
};
