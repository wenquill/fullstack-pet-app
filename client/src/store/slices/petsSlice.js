import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PET_SLICE_NAME = 'pets';

const initialState = {
  pets: [],
  singlePet: {},
  petTypes: [],
  isFetching: false,
  error: null,
  filter: {
    petTypeId: null,
    page: 1,
    results: 8,
    city: null,
    isFound: null,
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
  `${PET_SLICE_NAME}/post`,
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
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

export const getPetThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/get/pet`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPet(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const updatePetsThunk = createAsyncThunk(
  `${PET_SLICE_NAME}/patch/pets`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.updatePet({
        id: payload.id,
        data: payload.data,
      });
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

    changeCityFilter: (state, { payload }) => {
      state.filter.city = payload;
    },

    changeIsFoundFilter: (state, { payload }) => {
      state.filter.isFound = payload;
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
      state.isFetching = false;
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
      state.isFetching = false;
    });

    builder.addCase(getPetsThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    // * GET pet
    builder.addCase(getPetThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getPetThunk.fulfilled, (state, { payload }) => {
      state.singlePet = payload;
      state.error = null;
      state.isFetching = false;
    });

    builder.addCase(getPetThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    // * PATCH pet
    builder.addCase(updatePetsThunk.pending, state => {
      state.error = null;
    });

    builder.addCase(updatePetsThunk.fulfilled, (state, { payload }) => {
      const updatedPetIndex = state.pets.findIndex(p => p.id === payload.id);
      state.pets[updatedPetIndex] = {
        ...state.pets[updatedPetIndex],
        ...payload,
      };
    });

    builder.addCase(updatePetsThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });

    // * DELETE pet
    builder.addCase(deletePetThunk.pending, state => {
      state.error = null;
    });

    builder.addCase(deletePetThunk.fulfilled, (state, { payload }) => {
      state.pets = state.pets.filter(pet => pet.id !== payload);
      state.error = null;
    });

    builder.addCase(deletePetThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

const { reducer, actions } = petsSlice;

export const {
  changePetTypeFilter,
  changePageFilter,
  changeCityFilter,
  changeIsFoundFilter,
} = actions;

export default reducer;
