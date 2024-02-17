import logo from '/vite.svg'



const now = new Date().toLocaleTimeString();

export default function Header() {
    return (
      <header>
        
        <h2><img src={logo} alt="Vite Logo" />Learning React App</h2>
  
        <span>time is: { now }</span>
      </header>
    )
  }