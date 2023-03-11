import styles from "./MenuLink.module.scss";
import { NavLink } from "react-router-dom";

export default function MenuLink({ children, to, srcImg }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            <img className={styles.img} src={srcImg} alt="" />
            {children}
        </NavLink>
    );
}
