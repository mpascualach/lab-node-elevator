/*jshint esversion:6*/

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.waitinglist = [];
    this.passengers = 0;
  }

  start() {
    this.interval = setInterval(() => this.update, 1000);
  }
  stop() {
    clearInterval(this.interval);
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    this.waitinglist.shift();
    this.passengers.push(person);
    console.log(`${person.name} has entered the lift`);
  }
  _passengersLeave() {
    this.passengers.shift();
    console.log(`${person.name} has left the lift`);
  }

  floorUp() {
    if (this.floor !== this.MAXFLOOR) {
      this.floor = this.floor + 1;
    }
    if (this.waitinglist.length !== 0 && this.floor === this.requests[0]) {
      this._passengersEnter();
    }
    if (this.passengers.length !== 0) {
      if (this.floor === this.passengers[0].destinationFloor) {
        this._passengersLeave();
      }
    }
  }
  floorDown() {
    if (this.floor !== 0) {
      this.floor = this.floor - 1;
    }
    if (this.waitinglist.length !== 0 && this.floor === this.requests[0]) {
      this._passengersEnter();
    }
    if (this.passengers.length !== 0) {
      if (this.floor === this.passengers[0].destinationFloor) {
        this._passengersLeave();
      }
    }
  }
  call() {
    let person = new Person("Julia",0,5);
    this.waitinglist.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
