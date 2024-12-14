import { ANIME } from "@consumet/extensions";
import ItemCard from "./card";

export const Recents = () => {
    const gogoanime = new ANIME.Gogoanime();
    const recents = gogoanime.fetchRecentEpisodes().then(data => {
        // console.log(data);
        return (
            <>
                {data.results.map((item, index) => {
                    return (
                        <ItemCard key={index} data={item} />
                    )
                })}
            </>
        )
    }
    );

    return recents;    

}