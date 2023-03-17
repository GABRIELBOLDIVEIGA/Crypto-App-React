import styles from "./Menu.module.scss";
import MenuLink from "./MenuLink";
import icons from "./icones.json";
import Rodape from "components/Rodape";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { useState } from "react";
import classNames from "classnames";

export default function Menu() {
    const [expandido, setExpandido] = useState(true);

    const handleExpandido = () => {
        setExpandido(!expandido);
    };

    return (
        <aside className={styles.menu}>
            <nav
                className={classNames({
                    [styles.menu__lista]: true,
                    [styles.expandido]: expandido,
                })}
            >
                <div className={styles.menu__icon}>{expandido ? <TfiArrowCircleLeft size={20} onClick={handleExpandido} /> : <TfiArrowCircleRight size={20} onClick={handleExpandido} />}</div>

                <div className={styles.menu__controle}>
                    <h5>MENU</h5>
                </div>

                {icons.map((icon) => {
                    return (
                        <MenuLink key={icon.id} srcImg={icon.path} to={icon.route}>
                            {expandido ? icon.texto : ""}
                        </MenuLink>
                    );
                })}
            </nav>

            <Rodape expandido={expandido} />
        </aside>
    );
}
