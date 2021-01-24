import { ConfigModel } from '../ConfigModel';
import { ItemCategoryMappingsModel } from '../categories/ItemCategoryMappingsModel';

export default interface DataLayer {
  getConfig(): ConfigModel;
  GetItemCategoryMappings(): ItemCategoryMappingsModel;
}
