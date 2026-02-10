/** Rusable button component
 */

import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    className?: string;
}

export default function Button({ text, className }: ButtonProps) {
    return (<button
                className={`${styles.button} ${className || ""}`}
            >{text}</button>);
};