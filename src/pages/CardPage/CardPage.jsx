import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.scss';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const CardPage = () => {

    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, location, origin, gender, species, status, type, created} = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=> {     
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api])

    return ( 
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__img}>
                    <img src={image} alt={name} className={styles.img} />
                </div>
                <div className={styles.card__info}>
                    <ul className={styles.card__list}>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Name: </span>{name}
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Gender: </span>{gender}
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Location: </span>{location?.name}
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Origin: </span>{origin?.name}
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Species: </span>{species}
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Status: </span><span className={status === "Alive" ? styles.success : (status === "Dead" ? styles.danger : styles.secondary)}>{status}</span>
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Type: </span>{type === "" ? "Unknown" : type}
                        </li>
                        <li className={styles.card__item}>
                            <span className={styles.card__desc}>Created: </span>{formatDate(created)}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default CardPage;