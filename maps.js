function getAdmins(map){
    let adminUsers = [];
   for([key, value] of map){
        if (value === 'ADMIN'){
            adminUsers.push(key)
        }
   }
   
    return adminUsers;
}

const users = new Map();
users.set('Pedro', 'ADMIN');
users.set('Ana', 'USER');
users.set('Marcelo', 'USER');
users.set('Fernanda', 'ADMIN');

console.log(getAdmins(users))