const fs = require('fs');
const {strictEqual} = require('assert');
const {join} = require('path');

strictEqual(fs.existsSync(join(__dirname, 'common.json')), true, 'common.json missing');
strictEqual(fs.existsSync(join(__dirname, 'sonarts.json')), true, 'sonarts.json missing');
strictEqual(fs.existsSync(join(__dirname, 'tslint.json')), true, 'tslint.json missing');

const extd = require('./tslint.json').extends;

strictEqual(extd.includes('./sonarts.json'), true, 'sonarts.json not extended');
strictEqual(extd.includes('./common.json'), true, 'common.json not extended');
