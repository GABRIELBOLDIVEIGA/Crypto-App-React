import styles from "./Menu.module.scss";
import { useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import MenuLink from "./MenuLink/index";
import Rodape from "components/Rodape";

export default function Menu() {
    const [expandido, setExpandido] = useState(true);

    const handleExpandido = () => {
        setExpandido(!expandido);
    };

    return (
        <aside className={styles.menu}>
            <div className={styles.menu__icon}>
                {expandido ? 
                    <TfiArrowCircleLeft size={20} onClick={handleExpandido} /> : 
                    <TfiArrowCircleRight size={20} onClick={handleExpandido} />}
            </div>

            <h5>MENU</h5>

            <MenuLink expandido={expandido} />

            <Rodape expandido={expandido} />
        </aside>
    );
}
