const initialState = {
    status: 'All',
}

function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged':
            return {
                  // Again, one less level of nesting to copy
                  ...state,
                  status: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;