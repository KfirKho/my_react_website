import styles from './Body.module.css'
import meimg from "../assets/me.jpg"

function Body()
{
    return(
        <div className={styles.homeBody}>
            <div className={styles.homeText}>
                <h2>
                    My name is Kfir Kholodovski
                </h2>
                <p>
                    And I want to be a Professional Engineer
                </p>
                <div className={styles.homeButton}>
                    <button>Phone</button>
                    <button>Email</button>
                </div>
            </div>
            <div className={styles.homeImg}>
                <img src={meimg} alt="Image Not Found" />
            </div>
        </div>
    );
}

export default Body
