import { observer } from "mobx-react-lite";
import characters from "../stores/Characters/Characters";
import styled from "styled-components";

const Showcase = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  padding: 0;
  list-style-type: none;
`;

const Portrait = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Banner = observer(() => {
  return (
    <Showcase>
      {characters.currentBannerFeatured?.map((el, idx) => (
        <li key={el?.id ?? idx}>
          <Portrait
            src={`https://genshin.jmp.blue/characters/${el?.name
              .trim()
              .toLowerCase()}/portrait`}
          />
        </li>
      ))}
    </Showcase>
  );
});

export default Banner;
