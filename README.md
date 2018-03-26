# node+vue 实现保险系统

### 实现的功能
#### client
     注册 /api/client/register 
     登录 /api/client/login
     获取所有保险 /api/client/﻿insurance
     获取当前用户基本信息 /api/client/﻿userinfo
     获取当前用户投保的保单内容 ﻿/api/client/insuranceDeal
     投保 /api/client/buyInsurance
     {用户id.保险id.购买时间,?审核}
     理赔申请 **
#### admin
     获取所有用户 /api/admin/alluser 
     获取所有保险 /api/admin/insurance
     获取所有保单 /api/admin/allInsuranceDeal
     获取申请的理赔 **
     添加保险 /api/admin/addInsurance
     报表 **
     添加保单 **

####数据库
#####  用户
######  字段() - 值
    账户account: String,
    密码pwd: String,
    用户名username: String,
    头像avatar: String,
    权限roles: ['admin'],
    手机号码phoneNum: Number,
    邮箱email: String,
    注册时间createTime: { type: Date, default: Date.now},
    最近一次登录时间loginTime: Date,
    我的保单 deal: [{
        保单id:
        购买时间:
        状态:保障中/待支付/待续保
    }]
    我的理赔: []
    身份信息: [{realname: '',typeOfCertificate:'',number:'',gender:'',socialInsurance: true}]
        {
        真实姓名
        证件类型
        证件号码
        性别
        有无社保
        }
    常用被保人:[{name:'',relationship:'',typeOfCertificate:'',number:'',gender:'',socialInsurance: true}]
        {
        被保人姓名
        被保人是投保人的
        证件类型
        证件号码
        性别
        有无社保
        }    
#####  保险 产品详情
######  字段() - 值
    分类: 成人 儿童 老人 家庭
    type: 0,1,2,3
    缩略图(avatar):
    
    保险名(name): 平安e生保plus
    
    简介(info): 0.4元/天起 | 续保可至99 | 健康奖励
    
    价格: 174
    
    投保方案: {
        保障计划: [{info:'600万版',type: 0},{info:'200万版',type:1}](额度)/['基本款','精选款','优享款','尊贵款']
        被保人生日: 28天-60周岁
        保障期间: 1年
        生效日期: 5天后
        }
        
    保障范围: [
        {
            name:一般医疗保险金,
            info:100万元
        },
        {恶性肿瘤保险金: 100万元},
        年免赔额: 1万元
        保障区域: 中国大陆(不含港澳台)
        医院范围: 二级或二级以上公立医院普通部
        ]
        
    产品详情: []
    保险案例: img
    理赔须知: {
        理赔流程:
        注意事项:
        }  
    健康告知:    
#####  保单 详情
    成交时间
    投保人id
    被投保人
    保险id
    状态
    过期时间
    金额
    全部保额
    已用保额
    剩余保额