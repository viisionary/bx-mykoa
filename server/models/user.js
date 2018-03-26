import db from '../mongodb'
let userSchema = db.Schema({
    account: String,
    pwd: String,
    username: String,
    avatar: String,
    roles: Array,
    phoneNum: Number,
    email: String,
    createTime: { type: Date, default: new Date()},
    loginTime: Date,
    deal: Array,
    identityInformation: {
        type: Object,
        realname: String,
        typeOfCertificate: String,
        number: String,
        gender: String,
        socialInsurance: Boolean
    },
    commonInsured: {
        type: Array,
        default: [{realname: String, typeOfCertificate: String, number: String, gender: String,socialInsurance: Boolean}]
    },
    insuranceDeal: Array,
    claims: Array
});
export default db.model('user', userSchema);