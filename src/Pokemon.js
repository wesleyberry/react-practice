import React, { useEffect, useState } from 'react'

const pokemonUrl = `https://pokeapi.co/api/v2/pokemon`

export default function Pokemon() {

    const [allPokemon, setAllPokemon] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState({});

    useEffect(async () => {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setAllPokemon(data.results);
        getSinglePokemon(data.results[0].name);
    }, [])

    async function getSinglePokemon(pokemon) {
        const response = await fetch(`${pokemonUrl}/${pokemon}`)
        const data = await response.json();
        setCurrentPokemon(data);
    }

    return (
        <div>
            <select
                onChange={e => getSinglePokemon(e.target.value)}>
                {allPokemon.map((pokemon, idx) => {
                    return <option
                        key={`${pokemon.name}-${idx}`}
                        value={pokemon.name}>{pokemon.name}
                    </option>
                })}
            </select>
            <div>{currentPokemon.name ?
                <>
                    <h1>{currentPokemon.name}</h1>
                    <img src={currentPokemon.sprites.front_default} />
                </> : ''}
            </div>
        </div>
    )
}
