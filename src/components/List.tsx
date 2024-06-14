import Card from "./Card";
import PaginationGroup from "./PaginationGroup";
import { Input } from "./ui/input";

import React, { useState } from "react";
import { $filters } from "../store/global";
import { useStore } from "@nanostores/react";

export const List = () => {
  const filters = useStore($filters);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="tw-space-y-4">
      <div className="tw-grid tw-grid-cols-3 tw-gap-12">
        <Input
          type="text"
          className="tw-col-span-3 lg:tw-col-span-2"
          placeholder="Filter"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <PaginationGroup className="tw-col-span-3 lg:tw-col-span-1" />
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
};

export default List;
