import {
  Reducer,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

interface iApplicationState {
  shopModalWindowIsOpen: boolean
  routesModalWindowIsOpen: boolean
}

const stateAdapter = createEntityAdapter()

const initialState = stateAdapter.getInitialState<iApplicationState>({
  shopModalWindowIsOpen: false,
  routesModalWindowIsOpen: false,
})

const applicationDetails = createSlice({
  name: 'applicationDetails',
  initialState,
  reducers: {
    // setLongitude(state, action: PayloadAction<number | null>) {
    //     state.longitude = action.payload
    //   },
    toggleShopModalWindow(state) {
      state.shopModalWindowIsOpen = false
      state.routesModalWindowIsOpen = false
      state.shopModalWindowIsOpen = !state.shopModalWindowIsOpen
    },
    toggleRoutesModalWindow(state) {
      state.shopModalWindowIsOpen = false
      state.routesModalWindowIsOpen = false
      state.routesModalWindowIsOpen = !state.routesModalWindowIsOpen
    },
    closeAllModalWindows(state) {
      state.routesModalWindowIsOpen = false
      state.shopModalWindowIsOpen = false
    },
  },
})

export const reducer: Reducer<typeof initialState> = applicationDetails.reducer
export const {
  toggleShopModalWindow,
  toggleRoutesModalWindow,
  closeAllModalWindows,
} = applicationDetails.actions
