export const fetchBanners = async () => {
  try {
    const response = await fetch("https://gsi.fly.dev/banners?limit=50");
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
};
