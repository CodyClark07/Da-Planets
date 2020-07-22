import GalaxySchema from "../models/Galaxy";
import PlanetSchema from "../models/Planet";
import PeopleSchema from "../models/People";
import mongoose from "mongoose";
import MoonSchema from "../models/Moon"

class DbContext {
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema);
  People = mongoose.model("People", PeopleSchema)
}

export const dbContext = new DbContext();
