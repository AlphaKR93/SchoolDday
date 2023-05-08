"use client";

import Slider from "@/components/assets/sidebar/slider/slider.component";
import { useAppSelector } from "@/components/store/store";
import { toggleDdayType } from "@/components/store/reducer/dday/enabled_types.slice";

export default function TypeSection() {
    const enabledTypes = useAppSelector(state => state.enabledDdayTypes.enabled);

    return (
        <li>
            <h1>디데이 타입</h1>
            <Slider
                name="지필고사"
                enabled={enabledTypes.includes("exam")}
                onValue={{ background: "ff4747", shadowPrimary: "d93c3c", shadowSecondary: "ff5252" }}
                offValue={{ bgPrimary: "ff9e9e", bgSecondary: "e68585" }}
                dispatcher={toggleDdayType("exam")}
            />
            <Slider
                name="휴교"
                enabled={enabledTypes.includes("holiday")}
                onValue={{ background: "2fa220", shadowPrimary: "288a1b", shadowSecondary: "36ba25" }}
                offValue={{ bgPrimary: "70d36e", bgSecondary: "5fb15d" }}
                dispatcher={toggleDdayType("holiday")}
            />
            <Slider
                name="행사"
                enabled={enabledTypes.includes("event")}
                onValue={{ background: "2764be", shadowPrimary: "2155a2", shadowSecondary: "2d73db" }}
                offValue={{ bgPrimary: "6db4ff", bgSecondary: "5c97e6" }}
                dispatcher={toggleDdayType("event")}
            />
            <Slider
                name="기타"
                enabled={enabledTypes.includes("miscellaneous")}
                onValue={{ background: "7a7a7a", shadowPrimary: "686868", shadowSecondary: "8c8c8c" }}
                offValue={{ bgPrimary: "c5c5c5", bgSecondary: "a6a6a6" }}
                dispatcher={toggleDdayType("miscellaneous")}
            />
            <Slider
                name="생일"
                enabled={enabledTypes.includes("birthday")}
                onValue={{ background: "ccb128", shadowPrimary: "ad9622", shadowSecondary: "ebcc2e" }}
                offValue={{ bgPrimary: "fff48e", bgSecondary: "e6cd78" }}
                dispatcher={toggleDdayType("birthday")}
            />
        </li>
    );
}