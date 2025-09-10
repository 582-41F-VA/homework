type Person = {
    name: string;
};

/** Return a greeting for the given person. */
function greet(person: Person): string {
    return `Hi ${person.name}!`;
}

type Obj = {
    x: number;
    y: number;
};

/** Move the given object right and down. */
function move(obj: Obj): Obj {
    return { ...obj, x: obj.x + 1, y: obj.y + 1 };
}

/** Repeat the given callback a given number of times. */
function repeat(times: number, callback: (index: number) => void): void {
    for (let i = 0; i < times; i++) callback(i);
}

/** Return a function that increments the given starting number when called. */
function incrementer(start: number): (step: number) => number {
    return (step) => start += step;
}

type Account = {
    name: string;
    balance: number;
    deposit: (amount: number) => Account;
    withdraw: (amount: number) => Account;
};

/** Create an account with the given name and starting balance. */
function newAccount(name: string, balance = 0): Account {
    return {
        name,
        balance,
        deposit: (amount) => newAccount(name, balance + amount),
        withdraw: (amount) => newAccount(name, balance - amount),
    };
}
