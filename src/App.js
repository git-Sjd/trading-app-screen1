import logo from './logo.svg';
import './App.css';
import NewChart from './components/NewChart';
import AssetAllocation from './components/AssetAllocation';

function App() {
  const headingData = [{
    title: 'Asset Allocation',
    description: 'The assets are distributed between equity and cash & equivalents'
  },
  {
    title: 'Cash Allocation',
    description: 'The cash are distributed between gold and cash & equivalents'
  }]
  return (

    <div>
      {/* <NewChart /> */}
      <AssetAllocation title={headingData[0].title} desc={headingData[0].description} />
      {/* <AssetAllocation title={headingData[1].title} desc={headingData[1].description} /> */}
    </div>
  );
}

export default App;
