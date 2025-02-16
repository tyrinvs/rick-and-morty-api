import styles from './style.module.scss';

const CardsCount = ({ count }) => {
    return ( 
        <div className={styles.count}>
            Found characters: {count}
        </div>
     );
}
 
export default CardsCount;