import React from "react";
import clsx from "clsx";
import { ReactSVG } from "react-svg";
import styles from "./base-icon.module.css";

export type BaseIconProps = {
    source: string
    color?: string
    width?: number
    height?: number
    className?: string
};

export const BaseIcon: React.FC<BaseIconProps> = ({ source, color, width = 24, height = 24, className }) => {
    const path = `/icons/${source}.svg`;

    return (
        <ReactSVG
            className={clsx(styles.icon, className)}
            beforeInjection={(svg) => {
                if (color) {
                    svg.querySelectorAll("path, circle, rect, polygon").forEach((el) => {
                        el.setAttribute("fill", color);
                    });
                }

                if (width) svg.setAttribute("width", width.toString());
                if (height) svg.setAttribute("height", height.toString());
            }}
            src={path}
        />
    );
};
