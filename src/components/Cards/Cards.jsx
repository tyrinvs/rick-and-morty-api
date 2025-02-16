import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const Cards = ({ results }) => { 
        if (results) {
            let content = results.map((x, index) => {
                let { id, name, species, status, created } = x;
                const isFirstTwo = index < 2;
                return (
                    <Link to={`${id}`} key={id} className={isFirstTwo ? styles.cards__top : styles.cards__bottom}>
                        <div className={styles.card}>
                            <h2 className={isFirstTwo ? styles.card__title_top : styles.card__title_bottom}>{name} - {species}</h2>
                            <div className={styles.card__desc}>
                                <div className={styles.card__status}> 
                                    <div className={styles.status__info}>
                                        <p className={styles.status__text}>Status: <span className={status === "Alive" ? styles.success : (status === "Dead" ? styles.danger : styles.secondary)}>{status}</span></p>
                                    </div>
                                </div>
                                <div><p className={styles.created}>Created: {formatDate(created)}</p></div>
                            </div>
                        </div>
                    </Link>
                );
            });
            return (
                <div className={styles.cards__output}>
                    {content}
                </div>
            )
        }
}
 
export default Cards;