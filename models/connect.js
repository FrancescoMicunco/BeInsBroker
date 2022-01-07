import { Sequelize } from 'sequelize'



const sequelize = new Sequelize(process.env.DB_URL)

export const testDB = async() => {
    try {
        await sequelize.authenticate({ logging: false, alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

export default sequelize;