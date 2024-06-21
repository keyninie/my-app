import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการต่าง ๆ
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">บริการ 1</Link></li>
            <li><Link className="dropdown-item" href="#">บริการ 2</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">บริการเพิ่มเติม</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={"../contact"}>ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}