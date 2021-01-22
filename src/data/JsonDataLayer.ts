import low, { AdapterSync, LowdbSync } from 'lowdb';
import path from 'path';
import FileSync from 'lowdb/adapters/FileSync';

import DataLayerInterface from './DataLayerInterface';

export default class JsonDataLayer implements DataLayerInterface {
  adapter: AdapterSync;
  db: LowdbSync<any>;
  constructor() {
    this.adapter = new FileSync(path.join(__dirname, 'db', 'db.json'));
    this.db = low(this.adapter);
  }

  getConfig() {
    return this.db.get('config').value();
  }
}
