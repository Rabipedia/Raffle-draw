const Ticket = require('../models/Ticket');

class MyDB {
    constructor(){
        this.tickets = [];
    }

    /**
     * create and save a new ticket.
     * @param {string} username 
     * @param {number} price 
     */
    create(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    // bulk ticket
    bulkCreate() {

    }

    // return all tickets
    find() {

    }

    // find ticket
    findById() {

    }

    // update ticket
    updateById() {

    }

    // delete ticket
    deleteById() {

    }

    draw() {

    }

}

const myDB = new MyDB();

module.exports = myDB;