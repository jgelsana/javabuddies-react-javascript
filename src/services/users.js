import { users as data } from "../data/users";
import { generateId } from "../utils";

let users = [...data];

export function getAllUsers() {
  return [...users];
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}

function addUser(userInfo) {
  const newUser = {
    id: generateId(users),
    ...userInfo,
  };
  users.push(newUser);
  return newUser;
}
