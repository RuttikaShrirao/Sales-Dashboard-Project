import "../../../CSS/HeroSection.css";
import salesImg from "../../../assets/todays_sales/sales.png";
import customer from "../../../assets/todays_sales/customer.png";
import order from "../../../assets/todays_sales/order.png";
import productSale from "../../../assets/todays_sales/sales.png";
import ExportIcon from '../../../assets/todays_sales/Export Icon.png'
export default function TodaySales() {
  const sales = [
    {
      id: "1",
      backgroundColor: "#FFE2E5",
      img: salesImg,
      money: "$1K",
      moreInfo: "Total Sales",
      growthInfo: "+8% from yesterday",
    },
    {
      id: "2",
      backgroundColor: "#FFF4DE",
      img: order,
      money: "300",
      moreInfo: "Total Order",
      growthInfo: "+5% from yesterday",
    },
    {
      id: "3",
      backgroundColor: "#DCFCE7",
      img: productSale,
      money: "$5",
      moreInfo: "Product Sold",
      growthInfo: "+1.2% from yesterday",
    },
    {
      id: "4",
      backgroundColor: "#F3E8FF",
      img: customer,
      money: "$8",
      moreInfo: "New Customers",
      growthInfo: "+.5% from yesterday",
    },
  ];

  return (
    <div className="todaysSales">
      <div className="exportButton">
      
          <p className="todaySaleHeading">Today's Sales</p>
          
        <button><img src={ExportIcon} /><span>Export</span> </button>

      </div>
          <p className="SalesSummary">Sales Summary</p>
       

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sales.map((e) => (
          <div
            key={e.id}
            className="todaySalesInfoBlock"
            style={{ backgroundColor: e.backgroundColor }}
          >
            <img src={e.img} alt="Logo" />
            <h2>{e.money}</h2>
            <p style={{ paddingBottom: "5px" }}>{e.moreInfo}</p>
            <p style={{ color: "#4079ED", fontSize: "13.61px" }}>
              {e.growthInfo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
