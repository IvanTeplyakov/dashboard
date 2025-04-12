import React from "react";
import styles from "./base-input.module.css";
import {Size} from "~/types";
import clsx from "clsx";
import {BaseIcon} from "~/components";

export type BaseInputProps = {
    value: string
    whenChange: (value: string) => void
    rightIcon?: string
    leftIcon?: string
    title?: string
    size?: Size
    disabled?: boolean
    placeholder?: string
};

export const BaseInput: React.FC<BaseInputProps> = ({
    value,
    whenChange,
    rightIcon,
    leftIcon,
    title,
    size = 'medium',
    disabled = false,
    placeholder,
}) => {
    return (
        <div className={styles.container}>
            {title}
            <div className={styles.content}>
                {leftIcon && (
                    <BaseIcon
                        className={styles.leftIcon}
                        source={leftIcon}
                    />
                )}
                <input
                    className={clsx(
                        styles.input,
                        {
                            [styles.leftIconActive]: leftIcon,
                            [styles.rightIconActive]: rightIcon,
                            [styles.disabled]: disabled,
                        },
                        styles[size],
                    )}
                    value={value}
                    onChange={(e) => whenChange(e.target.value)}
                    type="text"
                    placeholder={placeholder}
                    disabled={disabled}
                />
                {rightIcon && (
                    <BaseIcon
                        className={styles.rightIcon}
                        source={rightIcon}
                    />
                )}
            </div>
        </div>
    )
};