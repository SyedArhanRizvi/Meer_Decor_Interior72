import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './features/cartSlice'

import cartSlice from './features/cartSlice'

export const store = configureStore({
  reducer: {
    cart : cartSlice,

  },

})