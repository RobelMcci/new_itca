import './App.css';
import Home from './pages/Home';
import Home_service from './pages/Home_service';
import CardNav from './components/CardNav';
import logo from './assets/logo.png';
import HomeTech from './pages/home_tech';

const items = [
  {
    label: "A propos",
    bgColor: "rgb(235, 176, 57)",
    textColor: "#fff",
    links: [
      { label: "Société", ariaLabel: "Entreprise IT" },
      { label: "Formation", ariaLabel: "Formation IT" },
      { label: "Partenaires", ariaLabel: "Partenaire" },
    ]
  },
  {
    label: "Expertises",
    bgColor: "rgb(235, 176, 57)",
    textColor: "#fff",
    links: [
      { label: "Developpement Web", ariaLabel: "Developpement Web" },
      { label: "Developpement Mobile", ariaLabel: "Developpement Mobile" },
      { label: "Developpement IOT", ariaLabel: "Developpement IOT" },
      { label: "Automatisation services", ariaLabel: "Automatisation services" },
      { label: "Services de Maintenance", ariaLabel: "Services de Maintenance" },
      // { label: "Developpement IA", ariaLabel: "Project Case Studies" }
    ]
  },
  {
    label: "Contact",
    bgColor: "rgb(235, 176, 57)",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email us" },
      { label: "Facebook", ariaLabel: "Facebook" },
      { label: "LinkedIn", ariaLabel: "LinkedIn" },
      { label: "Whatsapp", ariaLabel: "Whatsapp" },
    ]
  }
];

function App() {
  return (
    <div className="App">
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <Home />
      <Home_service />
      <HomeTech />
    </div>
  );
}

export default App;
