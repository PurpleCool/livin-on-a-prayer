import { makeAutoObservable } from "mobx";
import banners from "../stores/Banners";

class Characters {
  list = [];
  banners = [];
  bannerCharactersPortraits = [];

  constructor() {
    makeAutoObservable(this);
  }

  get currentBannerCharacters() {
    console.log("currentBanner: ", this.banners[0]);
    return this.banners[0].featured;
  }

  async fetchBanners() {
    try {
      const response = await fetch("https://gsi.fly.dev/banners");
      const data = await response.json();
      return (this.banners = data.results);
    } catch (error) {
      return console.error(error);
    }
  }

  fetchCharacters() {
    fetch("https://genshinlist.com/api/characters")
      .then((response) => {
        console.log("response: ", response);
        return response.json();
      })
      .then((data) => (this.list = data))
      .catch((error) => console.error(error));
  }

  fetchCharacter(id: number) {
    fetch(`https://genshinlist.com/api/characters/${id}`)
      .then((response) => {
        console.log("response: ", response);
        return response.json();
      })
      .then((data) => (this.list = data))
      .catch((error) => console.error(error));
  }

  fetchBannerCharacters() {
    this.fetchBanners()
      .then(() => {
        this.bannerCharactersPortraits = (
          banners.currentBanner as any
        )?.featured?.map((character: { id: number; name: string }) => {
          return this.fetchCharacter(character?.id ?? 1);
        });
      })
      .catch((error) => console.error(error));
  }
}

export default new Characters();
