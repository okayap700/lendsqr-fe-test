/** Rusable button component
 */

import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
}

export default function Button({text}: ButtonProps) {
    return <button className={styles.button}>{text}</button>;
};