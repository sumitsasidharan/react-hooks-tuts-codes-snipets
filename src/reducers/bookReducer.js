const getRandomID = () => {
   return new Date().getTime();
};

export const bookReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_BOOK':
         return [...state, { ...action.payload, id: getRandomID()}];

      case 'REMOVE_BOOK':
         return state.filter((book) => book.id !== action.payload);

      default:
         return state;
   }
};
