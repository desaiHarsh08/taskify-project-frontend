import MonthlyStats from "@/components/home/MonthlyStats";
import OverallTaskStats from "@/components/home/OverallTaskStats";
import styles from "@/styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className="p-4 px-6 h-full flex flex-col gap-3">
      <div id="row-1">
        <OverallTaskStats />
      </div>
      <div id={styles["row-2"]} className="flex flex-col sm:flex-row h-full gap-2 my-1">
        <div className="sm:w-[10%]">
          <MonthlyStats />
        </div>
        <div className="sm:w-[90%]">Table</div>
      </div>
    </div>
  );
}
