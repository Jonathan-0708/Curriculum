const getState = ({ getStore, getActions, setStore }) => {
	const urlPeople = "https://www.swapi.tech/api/people/";
	const urlPlanets = "https://www.swapi.tech/api/planets/";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			getPeople: () => {
				fetch(urlPeople)
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ people: data.results });
					});
			},

			getPlanets: () => {
				fetch(urlPlanets)
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({ planets: data.results });
					});
			},

			setFavorites: favorite => {
				if (!getStore().favorites.includes(favorite)) {
					setStore({ favorites: [...getStore().favorites, favorite] });
				} else {
					const array = getStore().favorites;
					const condition = currentFavorite => currentFavorite === favorite;
					let index = array.findIndex(condition);
					if (index > -1) getActions().removeFavorite(index);
				}
			},

			removeFavorite: favoriteIndex => {
				getStore().favorites.splice(favoriteIndex, 1);
				setStore({ favorites: getStore().favorites });
			}
		}
	};
};

export default getState;
