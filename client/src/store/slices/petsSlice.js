import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PET_SLICE_NAME = 'pets';

const initialState = {
  pets: [],
  petTypes: [],
  isFetching: false,
  error: null,
  filter: {
    petTypeId: null,
    page: 1,
    results: 10,
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
      const { data } = await API.getPets(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const deletePetThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/delete/id`,
  async (payload, { rejectWithValue }) => {
    try {
      await API.deletePet(payload);
      return payload;
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
      state.filter.petTypeId = payload;
    },

    changePageFilter: (state, { payload }) => {
      state.filter.page = payload;
    },

    changeResultsFilter: (state, { payload }) => {
      state.filter.results = payload;
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

    // * DELETE pet
    builder.addCase(deletePetThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(deletePetThunk.fulfilled, (state, { payload }) => {
      state.pets = state.pets.filter(pet => pet.id !== payload);
      state.error = null;
    });

    builder.addCase(deletePetThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = petsSlice;

export const { changePetTypeFilter, changePageFilter, changeResultsFilter } =
  actions;

export default reducer;
