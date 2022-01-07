import express from 'express'
import { Op, Sequelize } from 'sequelize'
import Customer from '../../models/customer.js'

const router = express.Router();

router
    .route("/")
    .get(async(req, res, next) => {
        try {
            const customer = await Customer.findAll()
            res.send(customer)
        } catch (error) {
            next(error)
        }
    })
    .post(async(req, res, next) => {
        try {
            const customer = await Customer.create(req.body)
            res.send(customer)
        } catch (error) {
            next(error)
        }
    })

export default router