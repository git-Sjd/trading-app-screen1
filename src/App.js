import logo from './logo.svg';
import './App.css';
import NewChart from './components/NewChart';
import AssetAllocation from './components/AssetAllocation';
import EquityGraph from './components/EquityGraph';
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


  const data1 = {
    plan: 'Growth',
    riskometer: 'High',
    ExpenseRatio: '1.34%',
    FundSize: '939.54'
  }


  const config1 = [
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

  const data2 = {
    plan: 'Index Fund',
    riskometer: 'Medium',
    ExpenseRatio: '2.13%',
    FundSize: '1039.54'
  }


  const config2 = [
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

    <div className='space-y-10'>
      {/* <NewChart /> */}
      {/* <AssetAllocation title={headingData[0].title} desc={headingData[0].description} /> */}
      {/* <AssetAllocation title={headingData[1].title} desc={headingData[1].description} /> */}
      {/* <EquityGraph /> */}

      <KeyRatios data={data1} config={config1} />
      <KeyRatios data={data2} config={config2} />
    </div>
  );
}

export default App;
