import React from "react";
import {
  HeaderFooter,
  KeyVisual,
  MissionVision,
} from "@/components/buider/Widget";
import useStore from "@/store";
import { useRouter } from "next/router";

export default function Preview() {
  // 위젯 목록 가져오기
  const { widgets } = useStore();

  return (
    <div className="border w-[945px] h-[calc(100vh-72px)]">
      {widgets.map((widget, index) => {
        return (
          <div key={index}>
            {widget.routerName === "builder/headerfooter" && <HeaderFooter />}
            {widget.routerName === "builder/keyvisual" && <KeyVisual />}
            {widget.routerName === "builder/missionvision" && <MissionVision />}
          </div>
        );
      })}
    </div>
  );
}
