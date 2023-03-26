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

    // return all the available tickets
    find() {
        return this.tickets
    } 

    /**
     * find ticket
     * @param {string} ticketId
     * @returns {Ticket}
     *  * */ 
    findById(ticketId) {
        const ticket = this.tickets.find(ticket => {
            /**
             * @param {Ticket} ticket
             */
            ticket.id === ticketId;
        });
        return ticket;

    }

    /**
     * find all tickets for a given user
     * @param {string} username
     * @returns {Array<Ticket>}
     */
    findByUser(username){
        const tickets = this.tickets.filter(ticket => ticket.username === username);
        return tickets;
    }

    /**
     * update ticket
     * @param {string} ticketId
     * @param{{username: string, price: number}} ticketBody
     * @returns {Ticket}
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.upadatedAt = new Date();

        return ticket;
    }

    /**
     * delete ticket from db
     * @param {string} ticketId
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex(
            /**
            * @param {string} 
            */
           (ticket) => ticket.id === ticketId
        );
        if(index !== -1){
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
        
    }
    
    /**
     * find winners
     * @param {number} winnerCount
     * @returns {Array<Ticket>}
     */
    draw(winnerCount) {
        let winnerIndexes = new Array(winnerCount);

        let index = 0;
        while(index < winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.tickets.length);

            if(!winnerIndexes.includes(winnerIndex)){
                winnerIndexes[index++] = winnerIndex;
                continue;
            }
        }
        const winner = winnerIndexes.map(index => this.tickets[index]);
        return winner;
    }
}

const myDB = new MyDB();

module.exports = myDB;