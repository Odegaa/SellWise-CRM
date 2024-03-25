export type TResponse<T> = { data: T[]; pagination: TPagination };

export type TPagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
};
