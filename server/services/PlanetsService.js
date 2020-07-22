import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors";

class PlanetsService {
    async edit(planetId, planetData) {
        return await dbContext.Planets.findByIdAndUpdate(planetId, planetData, { upsert: true })
    }

    async delete(planetId) {
        return await dbContext.Planets.findByIdAndDelete(planetId)
    }

    async getAll(query = {}) {
        return await dbContext.Planets.find(query)
    }
    async create(planetData) {
        let planet = await dbContext.Planets.create(planetData)
        return planet
    }
}

export const planetsService = new PlanetsService();