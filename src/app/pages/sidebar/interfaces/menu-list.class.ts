export interface Menu {
  isSuccess: boolean;
  groups: Group[];
}

export interface Group {
  name: string;
  items: Item[];
  order?: number;
}

export interface Item {
  name: string;
  order: number;
  enable?: boolean;
  icon?: string;
  items?: Item[];
  href?: string;
  active?: boolean;
}
