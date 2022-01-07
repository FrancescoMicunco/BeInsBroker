import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
import { badRequest, unauthorized, notFound, genericError } from '../middlewares/errorsHandler.js'
import Customer from '../models/customer.js'
import Company from '../models/company.js'
import customerRouter from '../endpoints/Customer/index.js'
import companyRouter from '../endpoints/Company/index.js'
import sequelize, { testDB } from '../models/connect.js'

// ==============  CONNECTION PORT
//  ===================================
const server = express()


const PORT = process.env.PORT
server.use(cors())
server.use(express.json())


// ==============  ENDPOINTS
//  ===================================
server.use("/customer", customerRouter)
server.use("/company", companyRouter)
    //  ============= MIDDLEWARES
    //  ===================================



//  ============ ERRORS HANDLER 
//  ===================================
server.use(badRequest)
server.use(unauthorized)
server.use(notFound)
server.use(genericError)

//  ============ CONNECTIONS LISTENER
//  ===================================

console.table(listEndpoints(server))
server.listen(PORT || 3001, async() => {
    console.log("Server is running on port ", PORT)
    await testDB()
    await sequelize.sync({ logging: false, force: true })

})


server.on("error", (error) => console.log("Server is not running", error))