import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  let pages: (number | string)[] = [];
  if (totalPages <= 5) {
    pages = range(1, totalPages);
  } else {
    if (currentPage <= 3) {
      pages = [...range(1, 4), "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, "...", ...range(totalPages - 3, totalPages)];
    } else {
      pages = [
        1,
        "...",
        ...range(currentPage - 1, currentPage + 1),
        "...",
        totalPages,
      ];
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 pt-6">
      {currentPage > 1 && (
        <Link
          href={`characters?page=${currentPage - 1}`}
          className="rounded border border-black px-4 py-2 hover:border-gray-200"
        >
          Previous
        </Link>
      )}

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-4 py-2">
            ...
          </span>
        ) : (
          <Link
            key={index}
            href={`characters?page=${page}`}
            className={`border border-black px-4 py-2 hover:border-gray-200 ${
              page === currentPage && "border-gray-200"
            } rounded`}
          >
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages && (
        <Link
          href={`characters?page=${currentPage + 1}`}
          className="rounded border border-black px-4 py-2 hover:border-gray-200"
        >
          Next
        </Link>
      )}
    </div>
  );
}
