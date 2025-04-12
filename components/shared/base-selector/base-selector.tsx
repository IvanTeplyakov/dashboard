import React from "react";
import styles from "./base-selector.module.css";
import {Size} from "~/types";
import {BaseButton} from "~/components";
import clsx from "clsx";

export type BaseSelectorProps = {
    value: string
    selected: boolean
    size?: Size
    disabled?: boolean
    whenClick?: () => void
    className?: string
}

export const BaseSelector: React.FC<BaseSelectorProps> = (props) => {
    return (
        <BaseButton
            variant={'white'}
            className={clsx(
                props.className,
                styles.selector,
                {
                    [styles.selected]: props.selected,
                    [styles.disabled]: props.disabled,
                }
            )}
            value={props.value}
            size={props.size}
            whenClick={props.disabled ? undefined : props.whenClick}
        />
    )
}