import changelog from "@/consts/changelog";
import * as pack from "../../../../../../package.json";
import styles from "./changelog.module.css";

export default function ChangelogSection() {
    return (
        <section className={styles.changelog}>
            <div className={styles.titleSection}>
                <span className={styles.title}>
                    <h1>패치노트</h1>
                    <hr />
                    <p>현재 버전: {pack.version}</p>
                </span>
                <p className={styles.vlite}>현재 버전: {pack.version}</p>
                <p className={styles.date}>
                    적용 일자: {changelog.find(version => version.version === pack.version)?.date}
                </p>
            </div>
            <ul className={styles.content}>
                {changelog.map(version => {
                    return (
                        <li key={version.version} className={styles.vcontent}>
                            <span className={styles.vname}>
                                <h1>버전 {version.version}</h1>
                                <hr />
                            </span>
                            <p className={styles.date}>적용일자: {version.date}</p>
                            <ul>
                                {version.content.map((line, indexNumber) => {
                                    const key = `${version.version}-${indexNumber}`;
                                    return <li key={key}>{line}</li>;
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
