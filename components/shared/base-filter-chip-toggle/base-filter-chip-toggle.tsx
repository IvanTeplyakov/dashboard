import React from "react";
import styles from "./base-filter-chip-toggle.module.css";
import {Option, Size} from "~/types";
import {BaseSelector} from "~/components";
import clsx from "clsx";

export type BaseFilterChipToggleProps = {
    options: Option[]
    size?: Size
    whenClick: (option: Option) => void
    selected: Option
};

export const BaseFilterChipToggle: React.FC<BaseFilterChipToggleProps> = (props) => {
    return (
        <div className={styles.container}>
            {
                props.options.map((option) => (
                    <BaseSelector
                        className={clsx(
                            {
                                [styles.selector]: option.value !== props.selected.value
                            }
                        )}
                        selected={option.value === props.selected.value}
                        key={option.value}
                        size={props.size}
                        value={option.label}
                        whenClick={() => props.whenClick(option)}
                    />
                ))
            }
        </div>
    )
}