const {Sequelize,DataTypes,Op} = require('sequelize');
const sequelize = new Sequelize('cabservicemanagement',"root","Shafsam@11",{
    host: 'localhost',
    dialect: 'mysql'
});

const Fare = sequelize.define('Fare',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    location:{
        type: DataTypes.STRING(200),
        allowNull: false

    },
    Cost:{
        type: DataTypes.INTEGER(200),
        allowNull: false
    }

});


// Fare.sync();

// Fare.sync({force: true});

// Fare.sync({alter:true});

// Fare.create({name:"shaaa",location:"kochi",Cost:1000});

// Fare.findAll({
//     where: {
//         id: {
//             [Op.gte]:3
//         }
//     }
// })
// .then(function(fare){
//     fare.forEach(function(fare){
//         console.log(fare.dataValues.id,fare.dataValues.name,);

//     })
// });


// Fare.findByPk(1).then(fare=>{
//     console.log(fare.dataValues.id,fare.dataValues.name,fare.dataValues.location)
// });