import db from '../mongodb'
let insurance = db.Schema({
    type: String,
    avatar: String,
    name: String,
    info: String,
    price: Number,
    quota: String,
    precept: {
        type: Object,
        plan: Array,
        birthday: Date,
        period: Number,
    },
    coverage: Array,
    detail: Array,
    example: String,
    purchased: {
        default: 0,
        type: Number
    }
});
export default db.model('insurance', insurance);