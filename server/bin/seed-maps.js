const mongoose = require("mongoose");
const MeetingP = require("../models/map.model");

require("dotenv").config();

mongoose.connect(`${process.env.DB}`);

MeetingP.collection.drop();

const pointsM = [
  {
    city: "Madrid",
    name: "Toma Café",
    address: "Calle de la Palma, 49, 28004 Madrid",
    schedule: "8:00–20:00",
    phone: "+34 917 04 93 44",
    description:
      "One of the best coffees in Madrid, I love sitting in this great cafe to talk relaxedly about the projects that we are going to start together!",
    cords: {
      coordinates: [40.426441, -3.705993]
    }
  },
  {
    city: "Madrid",
    name: "La Bicicleta Café",
    address: "Plaza de San Ildefonso, 9, 28004 Madrid",
    schedule: "10:00–0:30",
    phone: "+34 915 32 97 42",
    description:
      "One of my favorite places in Madrid to have the first contact with the client and the project details, for start working!",
    cords: {
      coordinates: [40.424465, -3.702208]
    }
  },
  {
    city: "Madrid",
    name: "El Viajero",
    address: "Plaza de la Cebada, 11, 28005 Madrid",
    schedule: "12:30–1:30",
    phone: "+34 620 63 81 59",
    description:
      "An incredible terrace where you can enjoy the good weather of the city; a great place to start any project!",
    cords: {
      coordinates: [40.411865, -3.710199]
    }
  },
  {
    city: "Berlin",
    name: "SilverFuture",
    address: "Weserstr. 206, 12047 Berlin, Alemania",
    schedule: "17:00–2:00",
    phone: "+49 30 23900855",
    description:
      "Afternoon meeting in one of the most charismatic neighborhoods in Berlin, they are always a great plan, let's have some beers while we talk about new projects",
    cords: {
      coordinates: [52.488499, 13.431587]
    }
  },
  {
    city: "Berlin",
    name: "Café Cinema",
    address: "Rosenthaler Str. 39, 10178 Berlin, Alemania",
    schedule: "10:00–3:00",
    phone: "+49 30 2806415",
    description:
      "A very charming place in the center of Berlin to talk about future projects, while we have a relaxed beer",
    cords: {
      coordinates: [52.524406, 13.40271]
    }
  },
  {
    city: "Berlin",
    name: "Impala Coffee",
    address: "Wilmersdorfer Str. 67, 10629 Berlin, Alemania",
    schedule: "7:00–19:00",
    phone: "+49 30 54814871",
    description:
      "Another of my favorite places in the city to drink coffee while we talk about the work system and the opportunities we offer when working together",
    cords: {
      coordinates: [52.504863, 13.306993]
    }
  },
  {
    city: "Tenerife",
    name: "Cafetería del TEA",
    address: "Calle Fuente Morales, 1, 38003 Santa Cruz de Tenerife",
    schedule: "10:00–20:00",
    phone: "+34 922 84 90 90",
    description:
      "There is nothing better than talking about projects surrounded by the best contemporary art seen in the islands",
    cords: {
      coordinates: [28.464169, -16.249528]
    }
  },
  {
    city: "Tenerife",
    name: "Confitería y café Taoro 'Casa Egon'",
    address: "Calle León, 5, 38300 La Orotava, Santa Cruz de Tenerife",
    schedule: "10:00–20:30",
    phone: "+34 922 33 00 87",
    description:
      "A typical place in the north of the island where you can enjoy hot chocolate and a good talk about how we will work together on future projects",
    cords: {
      coordinates: [28.389797, -16.52411]
    }
  },
  {
    city: "Tenerife",
    name: "Café Nivaria",
    address:
      "Plaza del Adelantado, 11, 38201 San Cristóbal de La Laguna, Santa Cruz de Tenerife",
    schedule: "7:00–24:00",
    phone: "+34 922 26 42 98",
    description:
      "The city of the students is ideal to have a snack with coffee and thus discuss all the ins and outs of the projects that we are going to start",
    cords: {
      coordinates: [28.487523, -16.312859]
    }
  }
];

MeetingP.create(pointsM, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${pointsM.length} shop`);
  mongoose.connection.close();
});
