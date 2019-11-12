const bcrypt = require('bcryptjs')

const {sequelize} = require('../../core/db');

const {Sequelize, Model} = require('sequelize');

 class User extends Model {
    static async verifyPhonePassword(phonenum, plainPassword) {
       

        const user = await User.findOne({
            where:{
                phonenum
            }
        })
        if(!user) {
          
            throw new global.errs.AuthFailed("账号不正确");

        } 
        const correct = bcrypt.compareSync(plainPassword,user.password)
        if(!correct) {
            throw new global.errs.AuthFailed("密码不正确");
        }
        return user
    }

    static async getUserByOpenid(openid){
        const user = await User.findOne({
            where:{
                openid
            }
        })
        return user
    }

    static async registerByOpenid(openid) {
        return await User.create({
            openid
        })
    }
 }

 User.init({
     id:{
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement:true
     },
     nickname:Sequelize.STRING,
     phonenum:{
         type:Sequelize.STRING(64),
         unique: true
        },
     password:{
         type:Sequelize.STRING,
         set(val) {
                //生成盐，加密密码
             const salt = bcrypt.genSaltSync(10)
             const psw = bcrypt.hashSync(val, salt)
             this.setDataValue("password",psw)
         }
        },
     openid: {
         type:Sequelize.STRING(64),
         unique:true
     }
 },{
     sequelize,
     tableName:'users'
    })

 module.exports = {
     User
 }