import logo from "../assets/react.svg" 

function Header() {
    return (
       <header>
         <img src={logo} />
         <nav>
            <a href="" className="items-menu">Promoções</a>
            <a href="" className="items-menu">Blogs</a>
            <a href="" className="items-menu">Programação</a>
            <a href="" className="items-menu">Anuncie</a>
         </nav>
           <div className="items-menu">
            10:21
           </div>
       </header>
  )
}
export default Header;