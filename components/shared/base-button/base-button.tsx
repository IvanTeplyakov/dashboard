import React from "react";
import styles from './base-button.module.css'
import {BaseIcon} from "~/components";
import clsx from "clsx";
import {ButtonVariant, Size} from "~/types";

export type BaseButtonProps = {
    variant?: ButtonVariant
    leftIcon?: string
    value?: string
    size?: Size
    disabled?: boolean
    whenClick?: () => void
}

export const BaseButton: React.FC<BaseButtonProps> = ({
    variant = 'primary',
    leftIcon,
    value = '',
    size = 'medium',
    disabled = false,
    whenClick,
}) => {
    const getIconColor = () => {
        if(disabled) {
            return '#FFFFFF'
        }

        switch (variant) {
            case 'secondary':
            case 'white':
                return '#1E5EFF'

            case 'destructiveSecondary':
                return '#F0142F'

            default:
                return '#FFFFFF'
        }
    }

    return (
        <button
            onClick={whenClick}
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                {
                    [styles.disabled]: disabled
                },
            )}
        >
            {
                leftIcon
                    ? (
                        <BaseIcon
                            color={getIconColor()}
                            source={leftIcon}
                        />
                    )
                    : null
            }
            {value}
        </button>
    )
}