export interface PaginationProductsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PaginationData {
  page: number;
}