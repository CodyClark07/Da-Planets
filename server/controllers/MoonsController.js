import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";
import Moon from "../models/Moon";


export class MoonsController extends BaseController {
    constructor() {
        super("api/moon");
        this.router
            .get("", this.getAll)
            .get('/:id', this.getMoonById)
            .post("", this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }
    async getAll(req, res, next) {
        try {
            let moon = await moonsService.getAll()
            return res.send({ data: moon, message: "got the moons" });
        } catch (error) {
            next(error);
        }
    }


    async getMoonById(req, res, next) {
        try {
            let moon = await moonsService.getAll(req.params.id)
            res.send({ data: moon, message: "got the specific moon" })
        } catch (error) {

        }
    }
    async create(req, res, next) {
        try {
            let moonData = req.body
            let moon = await moonsService.create(moonData)
            res.send({ data: moon, message: "created the moon" });
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let moonData = req.body
            let moon = await moonsService.edit(req.params.id, moonData)
            res.send({ data: moon, message: "edited the moon" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await moonsService.delete(req.params.id)
            res.send("Deleted Moon")
        } catch (error) {
            next(error)
        }
    }
}
