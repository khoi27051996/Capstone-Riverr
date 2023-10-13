import { createAsyncThunk } from "@reduxjs/toolkit";
import { binhLuanServices } from "services";
import { ThemBinhLuan } from "types";

export const binhLuanTheoCongViecThunk = createAsyncThunk(
  "binhLuan/theoCongViec",
  async (payload: number, { rejectWithValue }) => {
    try {
      const data = await binhLuanServices.binhLuanTheoCongViec(payload)
      return data.data.content
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const themBinhLuanMoiThunk = createAsyncThunk(
  "binhLuan/ThemMoi",
  async(payload: ThemBinhLuan, {rejectWithValue})=>{
    try{
      const data = await binhLuanServices.themBinhLuanMoi(payload)

      return data.data.content
    }catch(err){
      return rejectWithValue(err)
    }
  }
)
