import httpClient from 'react-http-client'

export class GamesService {
    url:string = "http://api.rawg.io/api/games"
    constructor(private _sg:HttpClient) { }


obtenerJuegos(){
    let url = this.games;
    return this._sg.get(url)
}
}