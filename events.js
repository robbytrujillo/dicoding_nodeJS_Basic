// class Event Emitter

const { EventEmitter } = requiere('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffe-order terjadi
const makeCoffe = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log('Bill sebesar ${price} telah dibuat!');
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffe(name);
    makeBill(price);
}

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffe);

myEventEmitter.on('coffee-order', makeBill);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });

/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */