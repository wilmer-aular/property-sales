"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueTypeOperator = exports.toWorkersMap = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toWorkersMap = function toWorkersMap(i) {
  var aditionalSchedule = "";
  var scheduleTwo = "";

  if (i.initOneAfternoon && i.endOneAfternoon) {
    aditionalSchedule = " / ".concat(i.initOneAfternoon, " - ").concat(i.endOneAfternoon);
  }

  if (i.initHourTwo && i.endHourTwo) {
    scheduleTwo = "".concat(i.initHourTwo, " - ").concat(i.endHourTwo);
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
    hourlyRate: i.hourlyRate ? "".concat(i.hourlyRate, " $") : "0 $",
    updateDate: (0, _moment["default"])(new Date(i.createdAt)).format("yyyy-MM-DD HH:mm"),
    actions: {
      id: i.id,
      name: "".concat(i.name, " ").concat(i.lastName)
    },
    scheduleOne: {
      title: "".concat(i.fromOne, " - ").concat(i.toOne),
      subTitle: "".concat(i.initOneMorning, " - ").concat(i.endOneMorning, " ").concat(aditionalSchedule)
    },
    scheduleTwo: {
      title: "".concat(i.fromTwo, " ").concat(i.toTwo ? " - " + i.toTwo : ""),
      subTitle: scheduleTwo
    }
  };
};

exports.toWorkersMap = toWorkersMap;
var valueTypeOperator = {
  fromOne: "Lunes",
  toOne: "Jueves",
  initOneMorning: "08:30",
  endOneMorning: "14:00",
  initOneAfternoon: "15:00",
  endOneAfternoon: "18:00",
  fromTwo: "Viernes",
  initHourTwo: "08:00",
  endHourTwo: "14:00"
};
exports.valueTypeOperator = valueTypeOperator;