import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";



export const localStorageMiddleware = (store: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {

        next(action);

        if (action.type === 'pokemons/toggleFavorite') {
            const { pokemons } = store.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
            return
        }
    }
}