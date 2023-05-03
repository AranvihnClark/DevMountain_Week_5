const { CONNECT_STRING } = process.env;
const Sequelize = require(`sequelize`);
const sequelize = new Sequelize(CONNECT_STRING, {
    dialect: `postgres`,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

// Just to simulate a logged in user - Fern
const userID = 4;
const clientID = 3;

module.exports ={
    getUserInfo: (req, res) => {
        sequelize.query(
            `SELECT * 
            FROM cc_clients AS c 
            JOIN cc_users AS u 
            ON c.user_id = u.user_id
            WHERE u.user_id = ${userID};`)
        
        // It is important to use "dbRes[0]" otherwise you get "undefined"
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    updateUserInfo: (req, res) => {
        const { firstName, lastName, phoneNumber, email, address, city, state, zipCode } = req.body;

        let query = `
                    UPDATE 
                        cc_users 
                    SET
                        first_name = '${firstName}',
                        last_name = '${lastName}',
                        email = '${email}',
                        phone_number = ${phoneNumber}
                    WHERE 
                        user_id = ${userID};
                    
                    UPDATE 
                        cc_clients 
                    SET
                        address =  '${address}',
                        city = '${city}',
                        state = '${state}',
                        zip_code = ${zipCode}
                    WHERE 
                        user_id = ${userID};
                    `;

        sequelize.query(query)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err));
    },
    getUserAppt: (req, res) => {
        let query = `SELECT * FROM cc_appointments
                    WHERE client_id = ${clientID}
                    ORDER BY date DESC;
                    `;
        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    requestAppointment: (req, res) => {
        const { date, service } = req.body;

        const query =   `
                        INSERT INTO
                            cc_appointments (client_id, date, service_type, notes, approved, completed)
                        VALUES (${clientID}, '${date}', '${service}', '', false, false)
                        RETURNING *;
                        `;
        sequelize.query(query)
            .then(dbRes => res.status(200).send(dbRes))
            .catch(err => console.log(err));
    }
}