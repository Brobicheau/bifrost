import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { globalVariantsRecipe } from "./styles/globalVariants.css";

export type Variants = RecipeVariants<typeof variants>;
export const variants = recipe({
    variants: {
        variant: {
            ...globalVariantsRecipe.variant,
        },
        color: {
            ...globalVariantsRecipe.color,
        },
    },
});
