import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      // const prod = action.payload;
      state.value.push(action.payload);
    },

      // For New Funct :

  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
