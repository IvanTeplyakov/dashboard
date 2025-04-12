import React from "react";
import styles from "./base-radio.module.css";
import clsx from "clsx";

export type DefaultRadioProps = {
    isChecked: boolean;
    whenClick: () => void;
    caption: string;
    error?: boolean;
    disabled?: boolean;
};

export const BaseRadio: React.FC<DefaultRadioProps> = ({
    isChecked,
    whenClick,
    caption,
    error = false,
    disabled = false,
}) => {
    return (
        <div
            className={styles.container}
            onClick={whenClick}
        >
            <div className={clsx(
                styles.radio,
                {
                    [styles.none]: !isChecked,
                    [styles.error]: error,
                    [styles.disabled]: disabled,
                }
            )}>
                {!disabled && <div className={styles.content}/>}
            </div>
            <span className={styles.caption}>{caption}</span>
        </div>
    )
};