import express from "express";
import Company from '../../models/company.js'

const router = express.Router();

router
    .route("/")
    .get(async(req, res, next) => {
        try {
            const customer = await Company.findAll()
            res.send(customer)
        } catch (error) {
            next(error)
        }
    })
    .post(async(req, res, next) => {
        try {
            const company = await Company.create(req.body)
            res.send(company)
        } catch (error) {
            next(error)
        }
    })
export default router