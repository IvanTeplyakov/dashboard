import React from "react";
import styles from "./base-checkbox.module.css";
import {BaseIcon} from "~/components";
import clsx from "clsx";

export type BaseCheckboxProps = {
    isChecked: boolean;
    whenClick: () => void;
    caption: string;
    error?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
};

export const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
    isChecked,
    whenClick,
    caption,
    error = false,
    indeterminate = false,
    disabled = false
}) => {
    const renderIcon = () => {
        if (indeterminate) {
            return (
                <BaseIcon
                    color="#FFFFFF"
                    width={15}
                    height={18}
                    className={styles.icon}
                    source="action_remove"
                />
            )
        }
        if (isChecked) {
            return (
                <BaseIcon
                    color="#FFFFFF"
                    width={15}
                    height={18}
                    className={styles.icon}
                    source="action_check"
                />
            )
        }
        return null
    }
    return (
        <div
            className={styles.container}
            onClick={whenClick}
        >
            <div className={clsx(
                styles.checkbox,
                {
                    [styles.none]: !isChecked && !indeterminate,
                    [styles.disabled]: disabled,
                    [styles.error]: error
                }
            )}>
                {renderIcon()}
            </div>
            <span className={styles.caption}>{caption}</span>
        </div>
    )
}