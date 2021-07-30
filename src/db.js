import * as SQLite from 'expo-sqlite';
import csv from 'csv';

const db = SQLite.openDatabase('pomotato');

db.transaction(tx => {
    tx.executeSql(
        `        CREATE TABLE IF NOT EXISTS activities (
             id INTEGER PRIMARY KEY,
             name TEXT NOT null,
             descr TEXT,
             category TEXT
        );`);
}, err => console.log(err));


function loadBundle() {
    db.transaction(tx => {
        tx.executeSql(
            `SELECT *
            FROM activities`,
            err => console.log(err), 
            (tx, res) => {if (res.rows._array.length < 1 ) {
                const records = parse(input, {
                    columns: true,
                    skip_empty_lines: true
                  })
            }
        });
    }, err => console.log(err));
}

loadBundle();

export function getActivitiesBy(category, callback) {
    if (category == '*') {category = ''}
    db.transaction(tx => {
        tx.executeSql(
            `SELECT *
            FROM activities
            WHERE category LIKE '%${category}%';`
            , err => console.log(err), (tx, res) => {callback(res.rows._array)});
    }, err => console.log(err));
}