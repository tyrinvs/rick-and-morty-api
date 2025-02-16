import styles from './style.module.scss';

const Search = ({setSearch}) => {
    return ( 
        <form className={styles.search__form}>
            <input 
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                type='text' 
                placeholder='Search characters...' 
                className={styles.search__input}
                autoFocus
            />           
        </form>
     );
}
 
export default Search;