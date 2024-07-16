import { useEffect } from "react";
import Banner from "./components/Banner";
import Panel from "./components/Panel";
import Characters from "./stores/Characters/Characters";

function App() {
  useEffect(() => {
    Characters.fetchBannerCharacters();
  }, []);

  return (
    <Panel>
      <Banner />
    </Panel>
  );
}

export default App;
