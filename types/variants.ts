export type VariantInfoType = {
  name: string;
  description: string;
  image: string;
};

export type CurrentIndexType = string | number;
export type EditItemType = {
  index: CurrentIndexType;
  field: string;
  value: string;
};
