print('MONGO DB INIT: start');
db = db.getSiblingDB('calculator');

db.createCollection('operations');

// db.operations.insertMany([
//     {
//         operation: '2+2',
//         result: '4',
//         timestamp: 1630706954325
//     },
//     {
//         operation: '2+12-10',
//         result: '4',
//         timestamp: 1630706976362
//     },
// ]);
print('MONGO DB INIT: end');
