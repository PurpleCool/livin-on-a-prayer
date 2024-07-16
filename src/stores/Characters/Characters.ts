import { makeAutoObservable } from "mobx";
import { Banner, GenshinListCharacter, GSICharacter } from "./types";

class Characters {
  characters: GenshinListCharacter[] = [];
  banners: Banner[] = [];
  bannerCharacters: GSICharacter[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get currentBanner() {
    return this.banners[0]?.featured;
  }

  get currentBannerFeatured() {
    return this.banners[0]?.featured;
  }

  async fetchBanners(): Promise<Banner[] | void> {
    try {
      const response = await fetch("https://gsi.fly.dev/banners");
      const data = await response.json();
      return (this.banners = data.results);
    } catch (error) {
      return console.error(error);
    }
  }

  async fetchCharactersGenshinList(): Promise<GenshinListCharacter[] | void> {
    try {
      const response = await fetch("https://genshinlist.com/api/characters");
      return (this.characters = await response.json());
    } catch (error) {
      return console.error(error);
    }
  }

  async fetchCharactersGSI(): Promise<GSICharacter[] | void> {
    try {
      const response = await fetch("https://gsi.fly.dev/characters?limit=100");
      return (this.characters = (await response.json()).results);
    } catch (error) {
      return console.error(error);
    }
  }

  async fetchCharacterGSI(
    id: number
    // handler: (result: GSICharacter) => void
  ): Promise<GSICharacter> {
    const response = await fetch(`https://gsi.fly.dev/characters/${id}`);

    if (!response.ok) {
      throw new Error(
        `Affront! The request method [fetchCharacterGSI] did not curry favor with the server: ${response.statusText}`
      );
    }

    // handler?.(await response.json());

    return response.json();
  }

  async fetchBannerCharacters() {
    try {
      await this.fetchBanners();

      this.bannerCharacters = [];

      for (const character of this.currentBannerFeatured) {
        const characterInfo = await this.fetchCharacterGSI(character.id);

        if (characterInfo) {
          this.bannerCharacters.push(characterInfo);
        }
      }

      return this.bannerCharacters;
    } catch (error) {
      return console.error(error);
    }
  }
}

export default new Characters();
