import mongoose from 'mongoose'
import conf from './config'

// 账号登陆
const DB_URL = `mongodb://${conf.mongodb.username}:${conf.mongodb.pwd}@${conf.mongodb.address}/${conf.mongodb.db}`;
const db_url = `mongodb://${conf.mongodb.address}/${conf.mongodb.db}`;
mongoose.Promise = global.Promise;
mongoose.connect(db_url, err => {
    if (err) {
        console.log("数据库连接失败！")
    }else{
        console.log("数据库连接成功！")
    }
})
export default mongoose
