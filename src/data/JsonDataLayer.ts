import low, { AdapterSync, LowdbSync } from 'lowdb';
import path from 'path';
import FileSync from 'lowdb/adapters/FileSync';

import DataLayerInterface from './DataLayerInterface';
import { ItemCategoryMappingsModel } from '../categories/ItemCategoryMappingsModel';
import { ConfigModel } from '../ConfigModel';

export class JsonDataLayer implements DataLayerInterface {
  adapter: AdapterSync;
  db: LowdbSync<unknown>;
  constructor() {
    this.adapter = new FileSync(path.join(__dirname, 'db', 'db.json'));
    this.db = low(this.adapter);
  }

  GetItemCategoryMappings(): ItemCategoryMappingsModel {
    return this.db.get('typeCategories').value();
  }

  getConfig(): ConfigModel {
    return this.db.get('config').value();
  }
}
