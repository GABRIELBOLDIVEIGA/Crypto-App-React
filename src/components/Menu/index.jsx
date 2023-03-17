import styles from "./Menu.module.scss";
import MenuLink from "./MenuLink";
import icons from "./icones.json";
import Rodape from "components/Rodape";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { AiOutlineBarChart } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";
import MenuLink2 from "./MenuLink2/index";

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
            ></nav>

            <div className={styles.menu__icon}>{expandido ? <TfiArrowCircleLeft size={20} onClick={handleExpandido} /> : <TfiArrowCircleRight size={20} onClick={handleExpandido} />}</div>

            <h5>MENU</h5>

            <MenuLink2 expandido={expandido} />
            
            <Rodape expandido={expandido} />
        </aside>
    );
}
