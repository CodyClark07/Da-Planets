import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors";

class MoonsService {
    async edit(moonId, moonData) {
        return await dbContext.Moon.findByIdAndUpdate(moonId, moonData, { upsert: true })
    }

    async delete(moonId) {
        return await dbContext.Moon.findByIdAndDelete(moonId)
    }

    async getMoonById(id) {
        let moon = await dbContext.Moon.findById(id)
        if (!moon) {
            throw new BadRequest("Invalid Id")
        }
        return moon
    }
    async getAll(query = {}) {
        return await dbContext.Moon.find(query)
    }
    async create(moonData) {
        let moon = await dbContext.Moon.create(moonData)
        return moon
    }
}

export const moonsService = new MoonsService();