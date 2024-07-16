import { observer } from "mobx-react-lite";
import characters from "../stores/Characters";

const Banner = observer(() => {
  return (
    <div>
      <ul>
        {characters.currentBannerCharacters?.map((el, idx) => (
          <li key={el?.id ?? idx}>
            <img
              src={`https://genshin.jmp.blue/characters/${el?.name
                .trim()
                .toLowerCase()}/portrait`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Banner;
