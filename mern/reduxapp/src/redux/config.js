import { configureStore } from '@reduxjs/toolkit';// help to create a store to share a common variable
const counterLogic = (state = 0, action) => {
    switch (action.type) {
      case 'Add':
        return state + 1;
      case 'Sub':
        return state - 1;
      default:
        return state; 
    }
};

const storeMyDetailsReduce=(state={},action)=>{
    switch(action.type){
        case "saveDetails":
            //console.log(state.data)
            return action.data;
        break;

    }
    return state;
}
export const myStore = configureStore({
    reducer:{
        "counter": counterLogic,
        "myDetails":storeMyDetailsReduce
    },
});