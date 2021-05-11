const Sequelize = require('sequelize'); // class 
const moment = require('moment');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(20),
                allowNull:false, // NOT NULL 
                unique:true, // UNIQUE 
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull:false,
            },
            username:{
                type:Sequelize.STRING(10),
                allowNull:false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            userimage:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            userdt:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function() {
                    return moment(this.getDataValue('userdt')).format('DD.MM.YYYY')
                 }
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}

/*
    userid
    userpw
    username
    gender
    userimage
    userdt
*/