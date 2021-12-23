import {createSlice} from '@reduxjs/toolkit';
import data from '../../utils/starCurrencies.json'




const currenciesSlice = createSlice({
  name: 'currenciesList',
  initialState: {
    displayed: data.defaultList,
    hidden: data.restCurrs,
  },
  reducers: {
    display(state, action) {
        const searched = state.hidden.find(curr=>{
            return curr.Cur_Abbreviation === action.payload;
        })
        state.hidden = state.hidden.filter((curr)=>{
            return curr !== searched!;
        })
      state.displayed = [...state.displayed,searched!]
    },
    hide(state, action) {
        const searched = state.displayed.find(curr=>{
            return curr.Cur_Abbreviation === action.payload;
        })
        state.displayed = state.displayed.filter((curr)=>{
            return curr !== searched!;
        })
      state.hidden = [...state.hidden,searched!]
      },
  },
});
export default currenciesSlice.reducer;
export const {
    display,
    hide,
} = currenciesSlice.actions;