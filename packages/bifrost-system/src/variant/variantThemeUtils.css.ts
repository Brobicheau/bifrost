import { createThemeContract, createVar } from "@vanilla-extract/css";

//Should extend this from the style guide thing
export type VariantPaletteStyles = {
    baseBackground: string;
    baseColor: string;
    baseBorder: string;
    hoverBackground: string;
    hoverColor: string;
    hoverBorder: string;
    focusBackground: string;
    focusColor: string;
    focusBorder: string;
    disabledBackground: string;
    disabledColor: string;
    disabledBorder: string;
};

export type VariantPalette = {
    [key: string]: VariantPaletteStyles;
};
export type VariantPaletteName = { name: string };

export type Palette = VariantPalette & VariantPaletteName;

export type VariantThemeContractProperties =
    typeof variantThemeContractDefinition;
export type VariantThemeContract = ReturnType<typeof createNewVariantContract>;
export type VariantThemeContractVars = ReturnType<
    typeof createThemeContract<VariantThemeContractProperties>
>;
export type VariantTheme = ReturnType<typeof createVariantTheme>;
export type VariantStyles = ReturnType<typeof createVariantStyles>;
export type VariantColors = {
    [key: ReturnType<typeof createVar>]: string;
};

export const variantProperiesContract = {
    background: null,
    color: null,
    border: null,
} as const;

export const variantThemeContractDefinition = {
    ...variantProperiesContract,
    hover: {
        ...variantProperiesContract,
    },
    focus: {
        ...variantProperiesContract,
    },
    disabled: {
        ...variantProperiesContract,
    },
} as const;

export const createVariantTheme = (
    palette: Palette,
    variantNames: string[]
) => {
    const variantContracts = variantNames.map(createNewVariantContract);
    const contractVars = variantContracts.reduce(
        (accum, contract) => ({ ...accum, ...contract.vars }),
        {}
    );

    const variantStlyes = variantContracts.map((contract) =>
        createVariantStyles(contract)
    );
    const variantColors = variantContracts.map((contract) =>
        createVariantColor(contractVars, variantNames, palette)
    );

    const colors = variantColors.reduce(
        (accum, color) => ({ ...accum, ...color }),
        {}
    );

    const variants = variantStlyes.reduce(
        (accum, color) => ({ ...accum, ...color }),
        {}
    );

    return {
        colors,
        variants,
    };
};

export const createNewVariantContract = (variantName: string) => ({
    name: variantName,
    vars: createThemeContract({
        [variantName]: variantThemeContractDefinition,
    }),
});

const createVariantColor = (
    contractVars: VariantThemeContract["vars"],
    variantNames: string[],
    palette: Palette
) => {
    const varsArray = variantNames.map((name) => ({
        name: createVariantPalette(contractVars[name], palette[name]),
    }));

    const vars = varsArray.reduce(
        (accum, { name }) => ({ ...accum, ...name }),
        {}
    );

    return { [palette.name]: { vars } };
};

export const createVariantPalette = (
    contractVars: VariantThemeContractVars,
    palette: VariantPaletteStyles
) => ({
    [contractVars.background]: palette.baseBackground,
    [contractVars.border]: palette.baseBorder,
    [contractVars.color]: palette.baseColor,

    [contractVars.hover.background]: palette.hoverBackground,
    [contractVars.hover.border]: palette.hoverBorder,
    [contractVars.hover.color]: palette.hoverColor,

    [contractVars.focus.background]: palette.focusBackground,
    [contractVars.focus.border]: palette.focusBorder,
    [contractVars.focus.color]: palette.focusColor,

    [contractVars.disabled.background]: palette.disabledBackground,
    [contractVars.disabled.border]: palette.focusBorder,
    [contractVars.disabled.color]: palette.focusColor,
});

const createVariantStyles = (contract: VariantThemeContract) => ({
    [contract.name]: {
        background: contract.vars[contract.name].background,
        color: contract.vars[contract.name].color,
        border: contract.vars[contract.name].border,
        ":hover": {
            background: contract.vars[contract.name].hover.background,
            color: contract.vars[contract.name].hover.color,
            border: contract.vars[contract.name].hover.border,
        },
        ":focus": {
            background: contract.vars[contract.name].focus.background,
            color: contract.vars[contract.name].focus.color,
            border: contract.vars[contract.name].focus.border,
        },
        ":disabled": {
            background: contract.vars[contract.name].disabled.background,
            color: contract.vars[contract.name].disabled.color,
            border: contract.vars[contract.name].disabled.border,
        },
    },
});
