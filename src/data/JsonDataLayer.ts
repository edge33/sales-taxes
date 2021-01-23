import low, { AdapterSync, LowdbSync } from 'lowdb';
import path from 'path';
import FileSync from 'lowdb/adapters/FileSync';

import DataLayerInterface from './DataLayerInterface';
import { ItemModel } from '../items/ItemModel';
import { ConfigModel } from '../ConfigModel';

export class JsonDataLayer implements DataLayerInterface {
  adapter: AdapterSync;
  db: LowdbSync<unknown>;
  constructor() {
    this.adapter = new FileSync(path.join(__dirname, 'db', 'db.json'));
    this.db = low(this.adapter);
  }
  getItems(): ItemModel[] {
    return this.db.get('items').value();
  }

  getConfig(): ConfigModel {
    return this.db.get('config').value();
  }
}
