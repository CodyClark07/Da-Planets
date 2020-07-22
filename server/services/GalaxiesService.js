import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
    async edit(galaxyId, galaxyData) {
        return await dbContext.Galaxies.findByIdAndUpdate(galaxyId, galaxyData, { upsert: true })
    }

    async delete(galaxyId) {
        return await dbContext.Galaxies.findByIdAndDelete(galaxyId)
    }

    async getGalaxyById(id) {
        let galaxy = await dbContext.Galaxies.findById(id)
        if (!galaxy) {
            throw new BadRequest("Invalid Id")
        }
        return galaxy
    }
    async getAll() {
        return await dbContext.Galaxies.find()
    }
    async create(galaxyData) {
        let galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }
}

export const galaxiesService = new GalaxiesService();