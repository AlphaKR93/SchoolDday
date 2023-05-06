"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styles from "./remain-box.module.css";

export default function RemainBox() {
    const [currentYear, updateCurrent] = useState(dayjs(`${dayjs().year()}-01-01`));
    const [currentDay, updateDay] = useState(dayjs().day());
    const [endOfYear, updateNext] = useState(dayjs(`${currentYear.year() + 1}-01-01`));
    const [lengthOfYear, updateLength] = useState(endOfYear.diff(currentYear, "day"));

    const [passedDay, updatePassed] = useState(dayjs().diff(currentYear, "day"));
    const [progress, updateProgress] = useState(100 - (endOfYear.diff(dayjs(), "day", true) * 100) / lengthOfYear);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs();

            if (now.year() !== currentYear.year()) {
                updateCurrent(dayjs(`${now.year()}-01-01`));
                updateNext(dayjs(`${now.year() + 1}-01-01`));
                updateLength(endOfYear.diff(dayjs(`${now.year()}-01-01`), "day"));
            }

            if (now.day() !== currentDay) {
                updateDay(now.day());
                updatePassed(now.diff(currentYear, "day"));
            }

            updateProgress(100 - (endOfYear.diff(now, "day", true) * 100) / lengthOfYear);
        }, 1800000);
        return () => clearInterval(interval);
    });

    return (
        <section className={styles.year_remain}>
            <div className={styles.title}>
                <span className={styles.year}>{currentYear.year()}년은 지금</span>
                <hr className={styles.line} />
                <span className={styles.days}>
                    <p className={styles.passed}>{passedDay}일 지남</p>
                    <p>{lengthOfYear - passedDay}일 남음</p>
                </span>
            </div>
            <div className={styles.content}>
                <div className={styles.progress}>
                    <div className={styles.passed} style={{ width: `${progress}%` }} />
                </div>
                <p className={styles.passed}>{Math.round(progress)}% 진행되었어요!</p>
            </div>
        </section>
    );
}
