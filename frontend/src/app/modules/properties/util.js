import moment from "moment";

export const toPropertyMap = (i) => {
  return {
    ...i,
    id: i._id,
    viewDate: moment(new Date(i.date)).format("yyyy-MM-DD HH:mm"),
    actions: {
      id: i._id,
    },
  };
};

export const listType = [
  { key: "House", value: "House" },
  { key: "Apartments", value: "Apartments" },
];