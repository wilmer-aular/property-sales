import moment from "moment";

export const toWorkersMap = (i) => {
  let aditionalSchedule = "";
  let scheduleTwo = "";
  if (i.initOneAfternoon && i.endOneAfternoon) {
    aditionalSchedule = ` / ${i.initOneAfternoon} - ${i.endOneAfternoon}`;
  }
  if (i.initHourTwo && i.endHourTwo) {
    scheduleTwo = `${i.initHourTwo} - ${i.endHourTwo}`;
  }
  return {
    dateOfBirth: i.dateOfBirth,
    email: i.email,
    id: i.id,
    type: i.type,
    lastName: i.lastName,
    name: i.name,
    phone: i.phone,
    dni: i.dni,
    hourlyRate: i.hourlyRate ? `${i.hourlyRate} $` : "0 $",
    updateDate: moment(new Date(i.createdAt)).format("yyyy-MM-DD HH:mm"),
    actions: {
      id: i.id,
      name: `${i.name} ${i.lastName}`,
    },
    scheduleOne: {
      title: `${i.fromOne} - ${i.toOne}`,
      subTitle: `${i.initOneMorning} - ${i.endOneMorning} ${aditionalSchedule}`,
    },
    scheduleTwo: {
      title: `${i.fromTwo} ${i.toTwo ? " - " + i.toTwo : ""}`,
      subTitle: scheduleTwo,
    },
  };
};

export const valueTypeOperator = {
  fromOne: "Lunes",
  toOne: "Jueves",
  initOneMorning: "08:30",
  endOneMorning: "14:00",
  initOneAfternoon: "15:00",
  endOneAfternoon: "18:00",
  fromTwo: "Viernes",
  initHourTwo: "08:00",
  endHourTwo: "14:00",
};
