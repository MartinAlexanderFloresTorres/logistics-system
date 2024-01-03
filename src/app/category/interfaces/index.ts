export interface CategoryAllResponse {
  success: boolean;
  data: Category[];
}

export interface CategoryNewResponse {
  success: boolean;
  data: Category | null;
}

export interface CategoryEditResponse {
  success: boolean;
  data: Category | null;
}

export interface CategoryDeleteResponse {
  success: boolean;
  message: string;
}

export interface Category {
  id: number;
  description: string;
  abbreviation: string;
}

export interface CategoryNew {
  description: string;
  abbreviation: string;
}

export interface CategoryEdit {
  abbreviation: string;
  description: string;
}
