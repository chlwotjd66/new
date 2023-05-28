"Use strict";

const db = require("../config/db");

class UserStorage{
    // static getUsers(isAll, ...fields) {
        
    // }
    static getUserInfo(id) {
     return new Promise((resolve, reject) => {
        const query = "SELECT * FROM users WHERE id = id = ?";
        db.query(query, [id], (err, data) => {
            if(err) reject(`${err}`);
            resolve(data[0]);
        });
     });
    }
    
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, nikname, pw) VALUES(?,?,?);";
            db.query(query, [userInfo.id, userInfo.nikname, userInfo.pw], 
                (err) => {
                if(err) reject(`${err}`);
                resolve({success: true});
            });
         });
    }

}


module.exports = UserStorage;
