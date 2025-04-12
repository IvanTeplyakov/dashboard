import React from "react";
import styles from "./base-toggle.module.css";

export type BaseToggleProps = {
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
    caption: string;
    disabled?: boolean;
};

export const BaseToggle: React.FC<BaseToggleProps> = ({ isChecked, onToggle, disabled = false, caption }) => {
    return (
        <div className={styles.container}>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => onToggle(e.target.checked)}
                    disabled={disabled}
                />
                <span className={styles.slider}></span>
            </label>
            <span>{caption}</span>
        </div>
    );
};
