
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsState {
  articles: any[]; 
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=pwCxPviSgLHqstKtMCakFYZxvWOgbGYj"
  );
  return response.data.response.docs;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
    
  },
});

export default newsSlice.reducer;
