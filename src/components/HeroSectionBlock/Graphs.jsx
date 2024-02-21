import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  BarChart,
  AreaChart,
  Area,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Graphs extends PureComponent {
  render(props) {
    // console.log(this.props.name)
    return (
      <div className="graphs">
        <p className="blockheading">{this.props.blockHading}</p>
        <div className="innerGraph">
          <ResponsiveContainer width="100%" height="100%">
            {this.props.blockHading == "Visitor Insights" && (
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="blue" />
              </LineChart>
            )}

            {this.props.blockHading == "Total Revenue" && (
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="uv"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            )}

            {this.props.blockHading == "Customer Satisfaction" && (
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="amt"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            )}

            {this.props.blockHading == "Target vs Reality" && (
              <BarChart
                //   width={500}
                //   height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#8884d8"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                  dataKey="uv"
                  fill="#82ca9d"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            )}

            {this.props.blockHading == "Volume vs Service Level" && (
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            )}
     
         

          {this.props.blockHading == "Top Products" && (
            <table >
            <tbody>
        <tr style={{textAlign:'left'}}>
            <th>#</th>
            <th style={{width:'35%'}}>Name</th>
            <th>Popularity</th>
            <th style={{textAlign:'right'}}>Sales</th>
        </tr>
      
        <tr>
            <td>01</td>
            <td>Home Decor Range</td>
            <td >
            <div>
            <span className="bar">
              <span className="bar-range">
              </span>
            </span>
            </div>
            </td>
            <td className="top-product-button"><button style={{background:'#F0F9FF', border:'1px solid #0095FF',color:'#0095FF'}}>45%</button></td>
        </tr>

        <tr>
            <td>02</td>
            <td>Disney Princess Pink Bag 18'</td>
            <td>
            <div>
            <span className="bar" style={{background:"#8CFAC7"}}>
              <span className="bar-range" style={{background:"#00E096",
             width:'29%'}}>
              </span>
            </span>
            </div>
            </td>
            <td className="top-product-button"> <button style={{background:'#F0F9FF', border:'1px solid ',color:'#00E58F'}}>29%</button></td>
        </tr>

        <tr>
            <td>03</td>
            <td>Bathroom Essentials</td>
            <td>
            <div>
            <span className="bar" style={{background:"#C5A8FF"}}>
              <span className="bar-range" style={{background:"#884DFF",
             width:'18%'}}>
              </span>
            </span>
            </div>
            </td>
            <td className="top-product-button"><button style={{background:'#FBF1FF', border:'1px solid ',color:'#884DFF'}}>18%</button></td>
        </tr>

        <tr>
            <td>04</td>
            <td>Apple Smartwatches</td>
            <td>
            <div>
            <span className="bar" style={{background:"#FFD5A4"}}>
              <span className="bar-range" style={{background:"#FF8F0D",
             width:'25%'}}>
              </span>
            </span>
            </div>
            </td>
            <td className="top-product-button"><button style={{background:'#FEF6E6', border:'1px solid ',color:'#FF8900'}}>25%</button></td>
        </tr>

        </tbody>
    </table>
          )}
          </ResponsiveContainer>
          </div>
  
      </div>
    );
  }
}
