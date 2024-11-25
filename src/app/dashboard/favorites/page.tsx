import { FavoritePokemons, PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: 'Favorites',
    description: 'Project with Next.js',
};


export default async function PokemonsPage() {


    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Favorites Pokemon <small className="text-blue-500">Global State</small></span>

            {/* <PokemonGrid pokemons={[]} /> */}
            <FavoritePokemons />

        </div>
    );
}