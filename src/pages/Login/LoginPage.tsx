/** displays branding illustration at the left and login form on the rigth */

import styles from './LoginPage.module.scss';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.leftSection}>
            {/*Leftside branding and illustration*/}
                <h2 className={styles.logo}><img src="src/assets/logo.svg" alt="" />lendsqr</h2>
                <div className={styles.illustration}>
                    <img src="src/assets/loginGimmick.svg" alt="" />
                </div>
            </div>

            {/* Right side: login form */}
            <div className={styles.rightSection}>
                <div className={styles.formCard}>
                    <h1>Welcome!</h1>
                    <p>Enter details to login</p>
                    <form className={styles.form}>
                        <Input label="Email" type="email" className={styles.loginInput}/>
                        <Input label="Password" type="password" className={styles.loginInput}/>
                        <span className={styles.forgotPassword}>FORGOT PASSWORD?</span>

                        <Button className={styles.loginButton} text="LOG IN"/>
                    </form>
                </div>
            </div>
        </div>
    );
}