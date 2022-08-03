const initial_state = {
  User_data: [],
};

export const todoreducers = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };

    case "REMOVE_DATA":
      const remainData = state.User_data.filter(
        (ele, id) => id !== action.payload
      );
      return {
        ...state,
        User_data: remainData,
      };

    case "UPDATE_DATA":
      const updateData = state.User_data.map((ele, id) =>
        id == action.d ? action.payload : ele
      );
      return {
        ...state,
        User_data: updateData,
      };

    default:
      return state;
  }
};
