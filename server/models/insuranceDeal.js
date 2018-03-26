import db from '../mongodb'
let insuranceDeal = db.Schema({
    type: String,
    insuranceId: String,
    insuranceName: String,
    price: Number,
    state: Number,
    quota: String,
    userId: String,
    dealTime: Date,
    expiration: Date,
    period: String,
    userInfo: {
        type: Object,
        realname: String,
        typeOfCertificate: String,
        number: String,
        gender: String,
        socialInsurance: Boolean
    },
    insured: {
        type: Object,
        realname: String,
        typeOfCertificate: String,
        number: String,
        gender: String,
        socialInsurance: Boolean
    }
});
export default db.model('insuranceDeal', insuranceDeal);
