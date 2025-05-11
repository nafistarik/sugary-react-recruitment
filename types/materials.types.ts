export interface Material {
  Id: string
  Title: string
  VariantTitle: string
  BrandName: string
  DripPrice: number
  SalesPrice: number
  CoverPhoto: string
  SalesPriceInUsd: number
  DripPriceInUsd: number
  type: number
}

export interface MaterialsResponse {
  totalCount: number
  remainingCount: number
  materials: Material[]
}

export interface MaterialsFilter {
  skip: number
  limit: number
  types: number[]
}
