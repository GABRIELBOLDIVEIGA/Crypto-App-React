import styles from "./MenuLink2.module.scss";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { VscArrowSwap } from "react-icons/vsc";
import { IoNewspaperOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";


export default function MenuLink2({ expandido }) {

    const iconSize = 20;

    return (
        <div className={styles.menuLink}>
            <NavLink
                className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
                ${expandido ? styles.expandido : ""}
            `}
                to={"/mercado"}
                end
            >
                <AiOutlineBarChart size={iconSize} />
                {expandido ? <p>Mercado</p> : <></>}
            </NavLink>

            <NavLink
                className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
                ${expandido ? styles.expandido : ""}
            `}
                to={"/portifolio"}
                end
            >
                <AiOutlineLineChart size={iconSize} />
                {expandido ? <p>Portfolio</p> : <></>}
            </NavLink>

            <NavLink
                className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
                ${expandido ? styles.expandido : ""}
            `}
                to={"/favoritos"}
                end
            >
                <MdFavoriteBorder size={iconSize} />
                {expandido ? <p>Favoritos</p> : <></>}
            </NavLink>

            <NavLink
                className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
                ${expandido ? styles.expandido : ""}
            `}
                to={"/swap"}
                end
            >
                <VscArrowSwap size={iconSize} />
                {expandido ? <p>Swap</p> : <></>}
            </NavLink>

            <NavLink
                className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
                ${expandido ? styles.expandido : ""}
            `}
                to={"/news"}
                end
            >
                <IoNewspaperOutline size={iconSize} />
                {expandido ? <p>News</p> : <></>}
            </NavLink>
        </div>
    );
}
