import { faker } from "@faker-js/faker";
import React from "react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

const svgPath = "/security/compliances/favicon.svg";

export default function Card() {
  return (
    <div className="tw-p-4" style={{ border: "1px solid black" }}>
      <div className="tw-flex tw-items-top tw-space-x-4 tw-justify-between">
        <h2 >
          <a href={`/security/compliances/${faker.number.int()}`}>
            {faker.lorem.sentence()}
          </a>
        </h2>

        <Popover>
          <PopoverTrigger asChild>
            <img
              src={svgPath}
              alt="Description of the SVG"
              className="tw-w-6 tw-h-6 tw-cursor-pointer tw-mt-2"
            />
          </PopoverTrigger>

          <PopoverContent>

            <PopoverClose asChild className="tw-absolute tw-right-4 tw-top-4">
              <span className="tw-cursor-pointer">X</span>
            </PopoverClose>

            <h3>Products</h3>
            {new Array(faker.number.int({ min: 1, max: 5 }))
              .fill(0)
              .map((_item) => faker.word.words({ count: { min: 1, max: 3 } }))
              .map((tag) => (
                <Badge variant="secondary" key={tag}>{tag}</Badge>
              ))}

            <h3>Regions</h3>
            {new Array(faker.number.int({ min: 1, max: 5 }))
              .fill(0)
              .map((_item) => faker.word.words({ count: { min: 1, max: 3 } }))
              .map((tag) => (
                <Badge variant="secondary" key={tag}>{tag}</Badge>
              ))}

            <h3>Industries</h3>
            {new Array(faker.number.int({ min: 1, max: 5 }))
              .fill(0)
              .map((_item) => faker.word.words({ count: { min: 1, max: 3 } }))
              .map((tag) => (
                <Badge variant="secondary" key={tag}>{tag}</Badge>
              ))}
          </PopoverContent>
        </Popover>
      </div>

      <p>{faker.lorem.paragraphs()}</p>
    </div>
  );
}
