import express from "express";
import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";
import Galaxy from "../models/Galaxy";
import { planetsService } from "../services/PlanetsService";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxy");
    this.router
      .get("", this.getAll)
      .get('/:id', this.getGalaxyById)
      .get('/:id/planet', this.getPlanetByGalaxyId)

      .post("", this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }
  async getAll(req, res, next) {
    try {
      let galaxy = await galaxiesService.getAll()
      return res.send({ data: galaxy, message: "got the galaxies" });
    } catch (error) {
      next(error);
    }
  }

  async getPlanetByGalaxyId(req, res, next) {
    try {
      return res.send(await planetsService.getAll(req.body))
    } catch (error) {
      next(error)
    }
  }
  async getGalaxyById(req, res, next) {
    try {
      let galaxy = await galaxiesService.getGalaxyById(req.params.id)
      res.send({ data: galaxy, message: "got the specific galaxy" })
    } catch (error) {

    }
  }
  async create(req, res, next) {
    try {
      let galaxyData = req.body
      let galaxy = await galaxiesService.create(galaxyData)
      res.send({ data: galaxy, message: "created the galaxy" });
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let galaxyData = req.body
      let galaxy = await galaxiesService.edit(req.params.id, galaxyData)
      res.send({ data: galaxy, message: "edited the galaxy" })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await galaxiesService.delete(req.params.id)
      res.send("Deleted Galaxy")
    } catch (error) {
      next(error)
    }
  }
}
