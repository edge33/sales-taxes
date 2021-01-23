import { ConfigModel } from '../ConfigModel';
import { ItemModel } from '../items/ItemModel';

export default interface DataLayer {
  getConfig(): ConfigModel;
  getItems(): ItemModel[];
}
