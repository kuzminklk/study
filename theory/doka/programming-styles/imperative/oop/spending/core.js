


// Design: entities and their relations
// ↓
// Day budget <-- Budget + ( History <-- Spendings )
// ↓
// OOP — Encapsulation, Inheritance ( Hierarchy or Composition ( Can be via TS Interfaces ) ), Polymorphism

/// SOLID Principles



// Record ( --> spending ) entity
class Record {
    constructor(amount, type) {
        this.type = type;
        this.amount = amount;
        this.dateTime = Date.now();
    }
}


// History entity
class History {
    records = [];
    addRecord(record) {
        this.records.push(record);
    }
    get spentToday() {
        return this.records.reduce((result, record) => {
            return (result += isToday(record.dateTime) ? record.amount : 0);
        }, 0);
    }
}


// Budget entity
class Budget {
    constructor(amount, daysCount) {
        this.amount = amount;
        this.startsDate = Date.now();
        this.daysCount = daysCount;
    }
    get perDay() {
        return this.amount / this.daysCount;
    }
}


// Daily amount ( day budget ) entity

// Daily amount = ( Budget / Days left ) - Today spended

class DailyAmount {
    constructor(budget, history) {
        this.budget = budget;
        this.history = history;
    }
    get valueOf() {
        return this.budget.perDay - this.history.spentToday;
    }
}


// Working process

const budget = new Budget(10000, 10);
const history = new History();

let spending = new Record(100);
history.addRecord(spending);

const daily = new DailyAmount(budget, history);
