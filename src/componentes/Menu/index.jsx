import styles from "./Menu.module.scss";
import MenuLink from "./MenuLink";

import icons from "./icones.json";
import Rodape from "componentes/Rodape";

export default function Menu() {
    return (
        <aside className={styles.menu}>
            <nav className={styles.menu__lista}>
                <h5>MENU</h5>
                {icons.map((icon) => {
                    return (
                        <MenuLink key={icon.id} srcImg={icon.path} to={icon.route}>
                            {icon.texto}
                        </MenuLink>
                    );
                })}
            </nav>

            <Rodape />
        </aside>
    );
}
