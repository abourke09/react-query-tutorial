import React from 'react';
import { useQuery} from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (page) => {
    console.log(key);
    const res = await fetch(`http://swapi.dev/api/planets/?page=&{page}`);
    return res.json();
}

const Planets = () => {
    const { data, status } = useQuery([2], () => fetchPlanets( 2));

    return (
        <div>
            <h2>Planets</h2>
            {/* <p> { status }</p> */}

            {status === 'Loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    { data.results.map( planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}

        </div>
    );
}

export default Planets;