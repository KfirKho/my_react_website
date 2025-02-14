import styles from './Body.module.css'

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
            </div>
            <div className={styles.homeImg}>

            </div>
        </div>
    );
}

export default Body
