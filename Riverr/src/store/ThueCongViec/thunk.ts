import { createAsyncThunk } from "@reduxjs/toolkit";
import { thueCongViecServices } from "services";
import { ThueCongViec } from "types";
import { toast } from 'react-toastify'
import { sleep } from "utils";
export const thueCongViecThunk = createAsyncThunk(
    "thueCongViec",
    async (payload: ThueCongViec, { rejectWithValue }) => {
        try {
            const data = await thueCongViecServices.thueCongViec(payload)
            toast.success("Thuê Công Việc Thành Công!!!")
            await sleep(2000)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const dsCvDangThueThunk = createAsyncThunk(
    "thueCongViec/danhSachCvDangThue",
    async (_, { rejectWithValue }) => {
        try {
            const data = await thueCongViecServices.layDsViec()
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)