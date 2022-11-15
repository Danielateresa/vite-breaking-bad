import { reactive } from 'vue';

//la costante store contiene la proprietà reactive di Vue che mi permette di accedere facilmente ai dati dai componenti
export const store = reactive({
    //all'interno inserisco l'api, error e characters che mi serviranno nella chiamata ajax
    API_URL: ' https://www.breakingbadapi.com/api/characters',
    error: null,
    characters: null,
    API_URL_Better: 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul',
})