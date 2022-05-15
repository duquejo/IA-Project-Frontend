const initialState: any = {
  modalOpen: Boolean(),
  type: false
};

const counterReducer = ( state = initialState, action: any ): any => {
  switch ( action.type ) {

    case 'INCREMENT':
      console.log( 'INCREMENT' );
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
}

export default counterReducer;