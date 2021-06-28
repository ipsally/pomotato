import Airtable from 'airtable';
import { AIRTABLE_API_KEY } from './secrets';

export const base = require('airtable').base(AIRTABLE_API_KEY);

export const activityAll = base('Activity').select({
    maxRecords: 12,
    view: "All"
})

console.log(activityAll);