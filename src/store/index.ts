import {InitialState} from '../Types'
import {createSlice, configureStore} from "@reduxjs/toolkit"

const initialState: InitialState ={
 videos:[],
 currentPlaying:null,
 searchTerm:"",
 searchResults:[],
 nextpageToken:null,
 recommendedVideos:[],
}

const YoutubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{},
})

export const store = configureStore({
    reducer: {
        youtubeApp:YoutubeSlice.reducer,
    }
})

export type RootState =ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch