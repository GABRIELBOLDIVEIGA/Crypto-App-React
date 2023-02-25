import styles from "./Carteira.module.scss";
import Card from "components/Card";
import FiltroDeBusca from "components/FiltroDeBusca";

export default function Carteira() {
    
    return (
        <div className={styles.carteira}>
            <h1>Carteira</h1>
            <FiltroDeBusca />

            <div className={styles.carteira__cards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
