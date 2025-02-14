import styles from './Header.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Header()
{
    return(
        <div className={styles.navHeader}>
            <h1>
                My Website
            </h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Connect with Me!</a></li>
                    <li>
                        <a href="https://linkedin.com/in/kfir-kholodovski" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/KfirKho" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    </ul>
            </nav>
        </div>
    );
}

export default Header