export const Add = (items) => {
  return {
    type: "ADD_DATA",
    payload: items,
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE_DATA",
    payload: id,
  };
};

export const update_data = (item, id) => {
  return {
    type: "UPDATE_DATA",
    payload: item,
    d: id,
  };
};
