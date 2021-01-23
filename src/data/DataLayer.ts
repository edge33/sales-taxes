import { JsonDataLayer } from './JsonDataLayer';
/*
 * I use this file to export only a single DataLayer
 * In case of different dataSource, I will change it to the new concrete version
 */
const dataLayer = new JsonDataLayer();
export default dataLayer;
