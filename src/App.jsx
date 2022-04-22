import { Habilidades } from "./templates/habilidades";
import { Home } from "./templates/home";
import { Trabalhos } from "./templates/trabalhos";

export const App = () => {
  return (
    <div className="container-app">
		<Home></Home>
		<Trabalhos></Trabalhos>
		<Habilidades></Habilidades>
    </div>
  );
}
