/**Reusable input component for forms.
 * Ensures consistent styling and behavior across the application.
 */

import styles from './Input.module.scss';

interface InputProps {
    label: string;                  // inpute placeholder text
    type?: string;                  // input type - text, password, email
}

export default function Input({label, type = "text"} : InputProps) {
    return(
        <input
            className={styles.input}
            type={type}
            placeholder={label}
           />
    );
}