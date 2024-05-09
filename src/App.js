import logo from './logo.svg';
import './App.css';
import NewChart from './components/NewChart';
import AssetAllocation from './components/AssetAllocation';
import EquityGraph from './components/EquityGraph';
import Practice from './components/Practice';
import KeyRatios from './components/KeyRatios';

function App() {
  const headingData = [{
    title: 'Asset Allocation',
    description: 'The assets are distributed between equity and cash & equivalents'
  },
  {
    title: 'Cash Allocation',
    description: 'The cash are distributed between gold and cash & equivalents'
  }]


  const data = {
    plan: 'Growth',
    riskometer: 'High',
    ExpenseRatio: '1.34',
    FundSize: '939.54'
  }


  const config = [
    {
      label: 'Plan',
      key: 'plan'
    },
    {
      label: 'Riskometer',
      key: 'riskometer'
    },
    {
      label: 'Expense Ratio',
      key: 'ExpenseRatio'
    },
    {
      label: 'Fund Size',
      key: 'FundSize'
    }
  ]


  return (

    <div>
      {/* <NewChart /> */}
      {/* <AssetAllocation title={headingData[0].title} desc={headingData[0].description} /> */}
      {/* <AssetAllocation title={headingData[1].title} desc={headingData[1].description} /> */}
      {/* <EquityGraph /> */}
      {/* <Practice /> */}
      <KeyRatios data={data} config={config} />
    </div>
  );
}

export default App;
