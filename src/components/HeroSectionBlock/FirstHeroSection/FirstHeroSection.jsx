import TodaySales from "./TodaySales";
import Graphs from "../Graphs";
// import VisitorInsights from './VisitorInsights'
export default function FirstHeroSection() {
  return (
    <div className="secondblock" style={{ paddingBottom: "1.8rem" }}>
    <div className="firstBlock graphblock">
      <TodaySales />
      <div style={{ width: "34rem" }}>
        <Graphs blockHading="Visitor Insights" />
      </div>

      
        <div className="graphblock" style={{ width: "36rem" }}>
          <Graphs blockHading="Total Revenue" />
        </div>
        <div className="graphblock" style={{ width: "20rem" }}>
          <Graphs blockHading="Customer Satisfaction" />
        </div>
        <div className="graphblock" style={{ width: "20rem" }}>
          <Graphs blockHading="Target vs Reality" />
        </div>

        <div className="graphblock" style={{ width: "36rem" }}>
          <Graphs blockHading="Top Products" />
        </div>
        {/* <div className="graphblock" style={{ width: "20rem" }}>
          <Graphs blockHading="Sales Mapping by Country" />
        </div> */}
        <div className="graphblock" style={{ width: "20rem" }}>
          <Graphs blockHading="Volume vs Service Level" />
        </div>
      </div>
    </div>
  );
}
