import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import { peoplesService } from "../services/PeoplesService";


import Planet from "../models/Planet";

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planet");
        this.router
            .get("", this.getAll)
            .get('/:id/moon', this.getMoonByPlanetId)
            .get('/:id/people', this.getPeopleByPlanetId)

            .post("", this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }
    async getAll(req, res, next) {
        try {
            let planet = await planetsService.getAll()
            return res.send({ data: planet, message: "got the planets" });
        } catch (error) {
            next(error);
        }
    }
    async getMoonByPlanetId(req, res, next) {
        try {
            return res.send(await moonsService.getAll(req.body))
        } catch (error) {
            next(error)
        }
    }
    async getPeopleByPlanetId(req, res, next) {
        try {
            return res.send(await peoplesService.getAll(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let planetData = req.body
            let planet = await planetsService.create(planetData)
            res.send({ data: planet, message: "created the planet" });
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let planetData = req.body
            let planet = await planetsService.edit(req.params.id, planetData)
            res.send({ data: planet, message: "edited the planet" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await planetsService.delete(req.params.id)
            res.send("Deleted Planet")
        } catch (error) {
            next(error)
        }
    }
}
