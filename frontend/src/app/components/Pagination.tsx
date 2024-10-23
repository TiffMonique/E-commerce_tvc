// components/Pagination.tsx
import { FC } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  isAdmin: boolean;
}

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  isAdmin
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 5;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);

      pages.push(1);
      if (start > 2) pages.push("...");

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-between items-center py-4">
      {isAdmin ? (
        // Paginación para administradores
        <div className="flex items-center">
          <button
            className={`flex items-center justify-center px-2 py-2 border rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200"}`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdNavigateBefore />
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`mx-[0.5px] px-3 py-1 border rounded-md ${currentPage === page ? "bg-primary text-white" : "bg-gray-200 text-gray-700"} ${page === "..." && "cursor-default"}`}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..." || currentPage === page}
            >
              {page}
            </button>
          ))}

          <button
            className={`flex items-center justify-center px-2 py-2 border rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200"}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </button>
        </div>
      ) : (
        //Paginación para usuarios
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 w-full">
          {/* Botón de Página Anterior */}
          <div className="flex justify-start w-full sm:w-auto mb-2 sm:mb-0">
            <button
              className={`flex items-center justify-center px-3 py-1 border rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white"
                }`}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <GrLinkPrevious className="mr-2" />
              Anterior
            </button>
          </div>

          <div className="flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-1  ${currentPage === page
                  ? "bg-yellow-500 text-white border rounded-md"
                  : " text-gray-700"
                  } ${page === "..." && "cursor-default"}`}
                onClick={() => typeof page === "number" && onPageChange(page)}
                disabled={page === "..." || currentPage === page}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="flex justify-end w-full sm:w-auto">
            <button
              className={`flex items-center justify-center px-3 py-1 border rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white"
                }`}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
              <GrLinkNext className="ms-2" />

            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
