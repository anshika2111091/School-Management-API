const db = require('../config/db');

const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).send('All fields are required.');
    }

    const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, address, latitude, longitude], (err, result) => {
        if (err) return res.status(500).send('Database error');
        res.status(201).send('School added successfully');
    });
};

const listSchools = (req, res) => {
    const { userLat, userLong } = req.query;

    if (!userLat || !userLong) {
        return res.status(400).send('User location is required.');
    }

    const sql = 'SELECT id, name, address, latitude, longitude FROM schools';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send('Database error');

        const calculateDistance = (lat1, long1, lat2, long2) => {
            const toRad = (value) => value * Math.PI / 180;

            const R = 6371; // Radius of the Earth in km
            const dLat = toRad(lat2 - lat1);
            const dLong = toRad(long2 - long1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c; // Distance in km
        };

        results.sort((a, b) => {
            const distanceA = calculateDistance(userLat, userLong, a.latitude, a.longitude);
            const distanceB = calculateDistance(userLat, userLong, b.latitude, b.longitude);
            return distanceA - distanceB;
        });

        res.json(results);
    });
};

module.exports = {
    addSchool,
    listSchools
};
