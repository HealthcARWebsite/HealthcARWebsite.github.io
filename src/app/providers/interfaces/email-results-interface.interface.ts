import {ProviderSearchInterface} from "./provider-search-interface.interface";

export interface EmailSearchResultsInterface extends ProviderSearchInterface {
  emailAddress?: string;
}
