// CAT CONTROLLER STARTS
export interface IWeight {
  imperial: string;
  metric: string;
}

export interface IBreed {
  weight: IWeight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  bidability: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface ICatBreed {
  breeds: IBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export type CatBreeds = ICatBreed[];
// CAT CONTROLLER ENDS

// VOTE CONTROLLER STARTS
export type VotePayload = {
  image_id: string,
  sub_id: string,
  value: number
}

export type VoteResponse = {
  message: string,
  id: number,
  image_id: string,
  sub_id: string,
  value: number,
  country_code: string
}