const { model, Schema } = require('mongoose');

const whatsAppSchema = Schema({
    message: String,
    name: String,
    timestamp: String,
});

module.exports = model('messageContnt', whatsAppSchema);
