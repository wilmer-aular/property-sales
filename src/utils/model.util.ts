export const withId = (model: any) => {
  if (model) {
    const newModel = { ...model["_doc"] };
    newModel.id = newModel["_id"];
    return newModel;
  }
  return model;
};

export const manyWithId = (data: any[]) => {
  if (data && data.length) {
    return data.map(withId);
  }
  return data;
};
