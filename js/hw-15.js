console.clear();
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

//1
document.querySelector('.check-balance').addEventListener('click', () => {
    const result = document.getElementById('mas-balance');
    const calculateTotalBalance = users => {
        const total = users.reduce((totalBalance, users) => totalBalance + users.balance, 0);
        result.textContent = `Сума балансів: ${total}`
    }
    calculateTotalBalance(users)
})
//2
document.querySelector('.check-friends').addEventListener('click', () => {
    const result = document.getElementById('mas-friends');
    const getUsersWithFriend = (users, friendName) => {
        return users
            .filter(user => user.friends.some(friend => friend === friendName))
            .map(user => user.name);
    }
    const friends1 = getUsersWithFriend(users, 'Briana Decker');
    const friends2 = getUsersWithFriend(users, 'Goldie Gentry');
    result.textContent = `Briana Decker: ${friends1.join(', ')};\n Goldie Gentry: ${friends2.join(', ')}`;
});
//3
document.querySelector('.check-name').addEventListener('click', () => {
    const result = document.getElementById('mas-name');
    const getNamesSortedByFriendsCount = user => {
        const names = [...users]
            .sort((a, b) => a.friends.length - b.friends.length)
            .map(user => user.name)
            .join('\n');
        result.textContent = names;
    }
    getNamesSortedByFriendsCount(users);
});
//4
document.querySelector('.check-skills').addEventListener('click', () => {
    const result = document.getElementById('mas-skills');
    const getSortedUniqueSkills = users => {
        const skills = [];
        users.forEach(user => {
            user.skills.forEach(skill => {
                if (!skills.includes(skill)) { 
                    skills.push(skill);
                }
            });
        });
        return skills.sort();
    }
    const skills = getSortedUniqueSkills(users);
    result.textContent = skills.join('\n');
});
