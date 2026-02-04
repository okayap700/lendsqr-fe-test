/**Reusable input component for forms.
 * Ensures consistent styling and behavior across the application.
 */

import { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps {
    label: string;                  // inpute placeholder text
    type?: string;                  // input type - text, password, email
    className?: string;
}

export default function Input({label, className , type = "text"} : InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return(
        <div className={`${styles.inputContainer} ${className}`}>
            <input
                className={styles.inputField}
                type={isPassword ? (showPassword ? "text" : "password") : type}
                placeholder={label}
            />
            {isPassword && ( 
                <button 
                  type="button" className={styles.toggleButton}
                  onClick={() => setShowPassword(!showPassword)}
                >{showPassword ? "HIDE" : "SHOW"}</button>
            )}
        </div>
    );
}