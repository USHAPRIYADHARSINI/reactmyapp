
import './App.css';
import Pricecard from './Pricecard';

let data=[
  {
    package: "Free",
    cost: "0",
    user: "Single User",
    userEnabler:true,
    userHighlighter: false,
    storage: "5GB Storage",
    storageEnabler:true,
    projects: "Unlimited public projects",
    projectsEnabler:true,
    access: "Community Access",
    accessEnabler:true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: false,
    subdomain: "",
    subdomainEnabler: false,
    subdomainHighlighter:false,
    monthlyReport: "Monthly status report",
    monthlyReportEnabler: false
  },
  {
    package: "Plus",
    cost: "9",
    user: "5 Users",
    userEnabler:true,
    userHighlighter: true,
    storage: "50GB Storage",
    storageEnabler:true,
    projects: "Unlimited public projects",
    projectsEnabler:true,
    access: "Community Access",
    accessEnabler:true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomain: "",
    subdomainEnabler: true,
    subdomainHighlighter:false,
    monthlyReport: "Monthly status report",
    monthlyReportEnabler: false
  },
  {
    package: "Pro",
    cost: "49",
    user: "Unlimited User",
    userEnabler:true,
    userHighlighter: true,
    storage: "150GB Storage",
    storageEnabler:true,
    projects: "Unlimited public projects",
    projectsEnabler:true,
    access: "Community Access",
    accessEnabler:true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subdomain: "Unlimited ",
    subdomainEnabler: true,
    subdomainHighlighter:true,
    monthlyReport: "Monthly status report",
    monthlyReportEnabler: true
  }
 
]

function App() {
  return <>
      <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Pricecard data={data[0]}/>
      <Pricecard data={data[1]}/>
      <Pricecard data={data[2]}/>
    </div>
  </div>
</section>
    </>
}

export default App;
