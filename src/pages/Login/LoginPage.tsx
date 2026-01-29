/** displays branding illustration at the left and login form on the rigth */

import styles from './LoginPage.module.scss';
import Input from '../../components/ui/Inpute';
import Button from '../../components/ui/button';

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            {/*Leftside branding and illustration*/}
            <div className={styles.leftSection}>
                <h2 className={styles.logo}>lendsqr</h2>
            </div>
            <div className={styles.illustration}><p>Illustration goes here</p></div>
        </div>
        {/* Right side: login form */}
        <div className={styles.rightSection}>
            <div className={styles.formCard}>
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
              <form className={styles.form}>
                <Input label="Email" type="email" />
                <Input label="Password" type="password"/>
                <span className={styles.forgotPassword}>FORGOT PASSWORD?</span>

                <Button text="LOG IN"/>
              </form>
            </div>
        </div>
    );
}