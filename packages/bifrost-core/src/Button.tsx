import * as React from "react";
import * as buttonStyles from "./buttonStyles.css";
import type { Variants } from "./buttonStyles.css";
import { bifrostClass } from "@bifrost/system/src";
export interface BaseButtonProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export type ButtonProps = BaseButtonProps & Variants;

export function RealButton(props: ButtonProps) {
    const { variant = "solid", color = "primary", ...restOfProps } = props;
    return (
        <button
            {...restOfProps}
            className={buttonStyles.variants({ variant, color })}
        >
            {props.children}
        </button>
    );
}

export const Button = () => {
    return (
        <div className={bifrostClass("flex space-around")}>
            <div className={bifrostClass("flex alignenter")}>
                <RealButton variant="solid" color="primary">
                    Hello
                </RealButton>
                <RealButton variant="outlined" color="primary">
                    Hello
                </RealButton>
                <RealButton variant="outlined" color="primary">
                    Hello
                </RealButton>
            </div>
            <div className={bifrostClass("flex space-around")}>
                <RealButton variant="solid" color="primary">
                    Hello
                </RealButton>
                <RealButton variant="outlined" color="primary">
                    Hello
                </RealButton>
                <RealButton variant="outlined" color="primary">
                    Hello
                </RealButton>
            </div>
        </div>
    );
};

Button.displayName = "Button";
