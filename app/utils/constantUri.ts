const baseUrl = 'https://api.themoviedb.org/3'
export class ConstantUri {
    public static readonly apikey = '99af2c5e5adcf47b4d08b42a99bee749';
    public static readonly vslidateWithLogin = baseUrl +'/authentication/token/validate_with_login';
    public static readonly tokenUrl = baseUrl + '/authentication/token/new';
    public static readonly popularMovies= baseUrl + '/movie/popular';
    public static readonly pathImg = 'https://image.tmdb.org/t/p/original';
    public static readonly movieDetail= baseUrl + '/movie';


}