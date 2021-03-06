class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    // return user that was removed
    const user = this.getUser(id);
    
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.find((user) => user.id === id);
  }
  getUserList (room) {
    const users = this.users.filter((user) => user.room === room);
    return users.map((user) => user.name);
  }
  getRoomsList () {
    const allRooms = this.users.map((user) => user.room);
    return [...new Set(allRooms)]; // return unique rooms
  }
}

module.exports = {Users};