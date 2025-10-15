import Main from "./components/Home/Main";
import { Wrapper } from "./layout/Wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper blackHeader footerTheme="black" headerText="Sandimax">
      <Main />
    </Wrapper>
  );
}
