import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PET_SLICE_NAME = 'pets';

const initialState = {
  pets: [],
  petTypes: [],
  isFetching: false,
  error: null,
  filter: {
    petType: '',
  },
};

export const getTypesThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/get/types`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPetTypes();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const createPetThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/post/pet`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.createPet(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getPetsThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/get/pets`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPets();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const petsSlice = createSlice({
  name: PET_SLICE_NAME,
  initialState,
  reducers: {
    changePetTypeFilter: (state, { payload }) => {
      state.filter.petType = payload;
    },
  },

  extraReducers: builder => {
    // * GET pettypes
    builder.addCase(getTypesThunk.fulfilled, (state, { payload }) => {
      state.petTypes = [...payload];
      state.error = null;
    });

    builder.addCase(getTypesThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });

    // * CREATE pet
    builder.addCase(createPetThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(createPetThunk.fulfilled, (state, { payload }) => {
      state.pets.push(payload);
      state.error = null;
    });

    builder.addCase(createPetThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    // * GET pets
    builder.addCase(getPetsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getPetsThunk.fulfilled, (state, { payload }) => {
      state.pets = [...payload];
      state.error = null;
    });

    builder.addCase(getPetsThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = petsSlice;

export const { changePetTypeFilter } = actions;

export default reducer;
