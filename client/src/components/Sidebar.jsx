import {House, Mail, Users, Building, LogOut} from "lucide-react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const pathname = window.location.pathname.toLowerCase();
  return (
      <ul className="menu flex gap-2 items-center menu-horizontal bg-base-200 rounded-box px-3">
          <li className={pathname === '/mail' ? 'bg-primary overflow-hidden rounded-lg text-white' : ''}>
              <Link to={"/mail"}>
                  <Mail width={15} height={15}/>
                  <span className="hidden md:block">Courriers</span>
                  <span className="badge badge-sm hidden md:block">99+</span>
              </Link>
          </li>
          <li className={pathname === '/employees' ? 'bg-primary overflow-hidden rounded-lg text-white' : ''}>
              <Link to={"/employees"}>
                  <Users width={15} height={15}/>
                  <span className="hidden md:block">Mes employés</span>
              </Link>
          </li>

          <li className={pathname === '/society' ? 'bg-primary overflow-hidden rounded-lg text-white' : ''}>
              <Link to={"/society"}>
                  <Building width={15} height={15}/>
                  <span className="hidden md:block">Mon entreprise</span>
              </Link>
          </li>


          <li>
              <Link to="/">
                  <LogOut width={15} height={15} className={'text-error'}/>
              </Link>
          </li>

          <li className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">UI</span>
              </div>
          </li>
      </ul>
  )
}

export default Sidebar