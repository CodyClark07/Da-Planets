import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors";

class PeoplesService {
    async edit(peopleId, peopleData) {
        return await dbContext.People.findByIdAndUpdate(peopleId, peopleData, { upsert: true })
    }

    async delete(peopleId) {
        return await dbContext.People.findByIdAndDelete(peopleId)
    }

    async getPeopleById(id) {
        let people = await dbContext.People.findById(id)
        if (!people) {
            throw new BadRequest("Invalid Id")
        }
        return people
    }
    async getAll(id) {
        return await dbContext.People.find({ planet: id })
    }
    async create(peopleData) {
        let people = await dbContext.People.create(peopleData)
        return people
    }
}

export const peoplesService = new PeoplesService();