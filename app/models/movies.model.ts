export namespace MoviesModel {
    export interface Result {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview:string;
        popularity:number;
        poster_path: string;
        release_date: string;
        title: string;
        video: string;
        vote_average:string;
        vote_count: string;
    }
    export interface MoviesResponse {
        page: number;
        results: Result[];
        total_pages: number;
        total_results: number;
    }
}