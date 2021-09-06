export = {
    dbName: process.env.DB_NAME || 'calculator',
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017',
    port: process.env.PORT || '3001',
};