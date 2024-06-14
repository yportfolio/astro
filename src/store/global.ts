import { map } from "nanostores";

export type TFilters = {
  products: string[];
  regions: string[];
  industries: string[];
};

export const $filters = map<TFilters>({
  products: [],
  regions: [],
  industries: [],
});
