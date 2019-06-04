const admin = require('firebase-admin')
const serviceAccount = require('../.secret/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://houg-1577c.firebaseio.com'
})

const db = admin.firestore()

module.exports = { db }
