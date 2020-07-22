import express from "express";
import BaseController from "../utils/BaseController";
import { peoplesService } from "../services/PeoplesService";
import People from "../models/People";


export class PeoplesController extends BaseController {
    constructor() {
        super("api/people");
        this.router
            .get("", this.getAll)
            .get('/:id', this.getPeopleById)
            .post("", this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }
    async getAll(req, res, next) {
        try {
            let people = await peoplesService.getAll()
            return res.send({ data: people, message: "got the peoples" });
        } catch (error) {
            next(error);
        }
    }


    async getPeopleById(req, res, next) {
        try {
            let people = await peoplesService.getAll(req.params.id)
            res.send({ data: people, message: "got the specific people" })
        } catch (error) {

        }
    }
    async create(req, res, next) {
        try {
            let peopleData = req.body
            let people = await peoplesService.create(peopleData)
            res.send({ data: people, message: "created the people" });
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let peopleData = req.body
            let people = await peoplesService.edit(req.params.id, peopleData)
            res.send({ data: people, message: "edited the people" })
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await peoplesService.delete(req.params.id)
            res.send("Deleted People")
        } catch (error) {
            next(error)
        }
    }
}
