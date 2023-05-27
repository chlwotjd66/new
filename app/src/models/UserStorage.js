"Use strict";

class UserStorage{
    static #users = {
        id: ["qwer","asdf","zxcv"],
        pw: ["qwer", "asdf", "zxcv"],   
        name: ["a", "b", "c"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); 
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=> [id, pw, name]
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}


module.exports = UserStorage;
