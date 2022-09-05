import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPizzaItem, ParamsType } from "./types";

export const fetchPizza = createAsyncThunk<IPizzaItem[], ParamsType>(
  "pizza/fetchPizzaStatus",
  async (params) => {
    const response = await axios.get<IPizzaItem[]>(
      "http://192.168.0.103:5555/api/items",
      {
        params: {
          ...params,
        },
      }
    );
    return response.data;
  }
);
