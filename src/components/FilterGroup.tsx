import React, { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faker } from "@faker-js/faker";
import { Input } from "@/components/ui/input";
import { $filters, type TFilters } from "../store/global";
import { useStore } from "@nanostores/react";
import { normalizeString } from "@/lib/utils";

type IFilterItemProps = {
  title: keyof TFilters;
  items: string[];
};

export const FilterGroup = ({ title, items }: IFilterItemProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [showAll, setShowAll] = useState(false);
  const filters = useStore($filters);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const handleChange = (filterValue: string) => {
    if (filters[title].includes(filterValue)) {
      $filters.setKey(
        title,
        filters[title].filter((item) => item != filterValue)
      );
    } else {
      $filters.setKey(title, [...filters[title], filterValue]);
    }
  };

  const filteredItems = items.filter((item) =>
    normalizeString(item).includes(normalizeString(searchValue))
  );

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 3);

  return (
    <>
      <AccordionItem value={title} >
        <AccordionTrigger ><h2>{title}</h2></AccordionTrigger>
        <AccordionContent className="tw-space-y-2 tw-m-1">
          {items.length > 3 && (
            <Input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}

          <ul className="tw-list-none tw-px-0">
            {displayedItems.map((item) => (
              <li
                className="tw-mb-3 tw-flex tw-flex-row tw-items-center tw-gap-4"
                key={item}
              >
                <input
                  id={item.replaceAll(" ", "_").toLowerCase()}
                  type="checkbox"
                  className="!tw-m-0 tw-h-4 tw-w-4 tw-border-gray-300 tw-bg-gray-100 tw-text-blue-600"
                  onChange={() => {
                    handleChange(item);
                  }}
                  checked={filters[title].includes(item)}
                />
                <label
                  htmlFor={item.replaceAll(" ", "_").toLowerCase()}
                  className="tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-flex tw-justify-between tw-w-full"
                >
                  <span>{item}</span>
                  <span className="tw-w-10 tw-text-center">
                    {faker.number.int({ max: 1000 })}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          {filteredItems.length > 3 && (
            <button
              onClick={handleToggleShow}
              className={`tw-py-2 tw-px-4 tw-rounded tw-text-[#0066CC]`}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </AccordionContent>
      </AccordionItem>
    </>
  );
};
