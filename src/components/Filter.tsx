import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { FilterGroup } from "./FilterGroup";
import { Button } from "./ui/button";
import { $filters, type TFilters } from "../store/global";
import { useStore } from "@nanostores/react";

const products = [
  "Red Hat OpenShift Container Platform",
  "Red Hat Enterprise Linux",
  "Red Hat Ansible",
  "Red Hat OpenStack",
];

const regions = ["NA", "APAC", "EMEA", "Global"];

const industries = ["Public Sector", "FSI", "Healthcare"];

export const Filter = () => {
  const filters = useStore($filters);

  const countFilter = () => {
    let totalLength = 0;

    for (const key in filters) {
      totalLength += filters[key as keyof TFilters].length;
    }

    return totalLength
  }


  return (
    <div className="tw-col-span-4 md:tw-col-span-1 tw-border tw-p-4">
      <span className="tw-mb-4 tw-block">Filter by {countFilter()}</span>

      <Button variant='outline' className="tw-w-full tw-border-[#0066CC] tw-text-[#0066CC] hover:tw-border-2" onClick={() => {
        const initState: TFilters = {
          products: [],
          regions: [],
          industries: []
        }


        $filters.set(initState)
      }}>Clear All</Button>

      <Accordion type="multiple" className="tw-w-full tw-border-t tw-mt-8">
        <FilterGroup title="products" items={products} />
        <FilterGroup title="regions" items={regions} />
        <FilterGroup title="industries" items={industries} />
      </Accordion>
    </div>
  );
};

export default Filter;
