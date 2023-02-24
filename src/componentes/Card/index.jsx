import styles from "./Card.module.scss";

export default function Card() {
    return (
        <div className={styles.card}>
            <div>
                <img />
                <div>
                    <h3>Polygon</h3>
                    <p>MATIC</p>
                </div>
            </div>
            <div>
                <img />
                <img />
            </div>
            <div>
                <h4>23.14 MATIC</h4>
                <p>$30</p>
            </div>
            <canvas></canvas>
        </div>
    );
}
