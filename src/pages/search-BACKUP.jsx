// import Topnav from '../component/topnav/topnav';
//import TitleM from '../component/text/title-m'
// import SearchPageCard from '../component/cards/searchpage-card';
// import { SEARCHCARDS } from '../data/index';

import { CyborgCard } from '../component/cyborgCard/';
import styles from './search.module.css';


// import styles from "./search.module.css";

function Search(){
    return (
        <div className={styles.SearchPage}>
            {/* <Topnav search={true}/> */}

            <CyborgCard />
            
            {/* <div className={styles.Search}>
                <TitleM>Explorar</TitleM>
                <div className={styles.SearchCardGrid}>
                    {SEARCHCARDS.map((card) => {
                        return (
                            <SearchPageCard 
                                key={card.title}
                                cardData={{
                                    bgcolor: card.bgcolor,
                                    title: card.title,
                                    imgurl: card.imgurl,
                                }}
                            />
                        );
                    })}
                </div>
            </div> */}
        </div>
    );
}

export default Search;