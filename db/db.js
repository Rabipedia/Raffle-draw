const Ticket = require('../models/Ticket');

class MyDB {
    constructor(){
        this.tickets = [];
    }

    /**
     * create and save a new ticket.
     * @param {string} username 
     * @param {number} price 
     * @param {Ticket} return a ticket object.
     */
    create(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * Create multiple ticket
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>} 
     */
    bulkCreate(username, price, quantity) {
        const result = [];
        for(i = 0; i<quantity; i++){
            const ticket = this.create(username, price);
            result.push(ticket)
        }
        return result;
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