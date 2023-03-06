import colors, { ColorKey, Colors, ColorScaleKey } from "../../colors";

export type GuideValue = string | ColorScaleKey | ((color: ColorKey) => string);

export type Guide = {
    baseBackground?: GuideValue;
    baseBorder?: GuideValue;
    baseColor?: GuideValue;

    hoverBackground?: GuideValue;
    hoverBorder?: GuideValue;
    hoverColor?: GuideValue;

    focusBackground?: GuideValue;
    focusBorder?: GuideValue;
    focusColor?: GuideValue;

    disabledBackground?: GuideValue;
    disabledBorder?: GuideValue;
    disabledColor?: GuideValue;
};

export const borderTemplate = (
    strings: TemplateStringsArray,
    getColor: (color: ColorKey) => string
) => {
    return (color: ColorKey) =>
        [strings[0], getColor(color), strings[1]].join("");
};

const applyColor = (scale: ColorScaleKey) => (color: ColorKey) =>
    colors[color][scale];

export const solid: Guide = {
    baseBackground: 500,
    baseColor: "#fff",
    hoverBackground: 600,
    hoverColor: "#fff",
    disabledColor: "#fff",
    disabledBackground: 200,
};

export const outlined: Guide = {
    baseBackground: "transparent",
    baseColor: 500,
    baseBorder: borderTemplate`1px solid ${applyColor(100)}`,
    hoverBackground: 100,
    hoverBorder: borderTemplate`1px solid ${applyColor(200)}`,
    hoverColor: 500,
    disabledColor: 100,
    disabledBackground: 100,
};

export const ghost: Guide = {
    baseBackground: "transparent",
    baseColor: 600,
    hoverBackground: 100,
    focusBackground: 200,
    disabledColor: 200,
};
