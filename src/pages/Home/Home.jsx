import { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import Cards from "../../components/Cards/Cards";
import CardsCount from "../../components/CardsCount/CardsCount";
import styles from './style.module.scss';

const Home = () => {
    let [search, setSearch] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let { results = [] } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/?name=${search}`;

    useEffect(() => { 
        if (search.length >= 3) {
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
        } else {
            updateFetchedData([]);
        }
    }, [search])

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Search setSearch={setSearch} />
                <div>
                    {results.length > 0 && (
                        <CardsCount count={results.length} />
                    )}
                </div>
            </div>

            <div className={styles.cards}>
                { results.length > 0 && (
                        <Cards results={results} />
                    )}
            </div>

        </div>
  );
}
 
export default Home;