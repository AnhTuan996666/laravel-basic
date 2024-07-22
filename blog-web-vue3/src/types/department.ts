export interface DepartmentItemInterface {
  id: number;
  code: string;
  name: string;
  description: string;
  status: number;
  parent_id: number;
  type: number;
  parent?: {
    id: number;
    name: string;
  };
}

export interface DepartmentSearchInterface {
  keyword?: string;
  status?: number;
  type?: number;
  page?: number;
  items?: number;
}
