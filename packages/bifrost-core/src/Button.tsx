import * as React from "react";
import * as buttonStyles from "./buttonStyles.css";
import type { Variants } from "./buttonStyles.css";
export interface BaseButtonProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export type ButtonProps = BaseButtonProps & Variants;

export function Button(props: ButtonProps) {
    const { variant, color, ...restOfProps } = props;
    return (
        <button
            {...restOfProps}
            className={buttonStyles.variants({ variant, color })}
        >
            {props.children}
        </button>
    );
}

Button.displayName = "Button";
