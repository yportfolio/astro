import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRightMost,
  PaginationLestMost
} from "@/components/ui/pagination";
import { Input } from "./ui/input";

export default function PaginationGroup({ className }: React.ComponentProps<typeof Pagination>) {
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationLestMost href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem >
          <input className="tw-p-2 tw-w-10 tw-h-10 tw-border tw-mr-4 tw-border-b-4 tw-border-slate-400 tw-rounded-sm" />
        </PaginationItem>

        <span>of</span>

        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>


        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationRightMost href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
