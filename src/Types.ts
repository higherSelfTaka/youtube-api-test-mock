export interface InitialState {
    videos :HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerm:string;
    searchResults:[];
    nextpageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}

