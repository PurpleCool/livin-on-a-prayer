export interface BannersRequest {
  page: number;
  results: Banner[];
  totalResults: number;
  totalPages: number;
}

export interface Banner {
  id: number;
  name: string;
  type: BannersType;
  version: string;
  featured: BannersFeatured[];
  start: Date;
  end?: Date;
}

export interface BannersFeatured {
  id: number;
  name: string;
}

export enum BannersType {
  Character = "Character",
  Permanent = "Permanent",
}

export interface GenshinListCharacter {
  id: number;
  name: string;
  slug: string;
  description: string;
  gender: GenshinListCharacterGender;
  birthday: string;
  rarity: number;
  vision: string;
  weapon: GenshinListCharacterWeapon;
  obtain: GenshinListCharacterObtain;
}

export enum GenshinListCharacterGender {
  Female = "female",
  Male = "male",
}

export enum GenshinListCharacterWeapon {
  Bow = "bow",
  Catalyst = "catalyst",
  Claymore = "claymore",
  Polearm = "polearm",
  Sword = "sword",
}

export enum GenshinListCharacterObtain {
  Quest = "Quest",
  Unknown = "Unknown",
  Wish = "Wish",
}

export interface GSICharacter {
  page: number;
  results: GSICharacterResult[];
  totalResults: number;
  totalPages: number;
}

export interface GSICharacterResult {
  id: number;
  name: string;
  rarity: GSICharacterRarity;
  weapon: GSICharacterWeapon;
  vision: GSICharacterVision;
  wikiURL: string;
}

export enum GSICharacterRarity {
  The4_Star = "4_star",
  The5_Star = "5_star",
}

export enum GSICharacterVision {
  Anemo = "Anemo",
  Cryo = "Cryo",
  Electro = "Electro",
  Geo = "Geo",
  Hydro = "Hydro",
  None = "None",
  Pyro = "Pyro",
}

export enum GSICharacterWeapon {
  Bow = "Bow",
  Catalyst = "Catalyst",
  Claymore = "Claymore",
  Polearm = "Polearm",
  Sword = "Sword",
}
