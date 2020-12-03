import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { memo } from "react";

const List = {
  "/": [
    { nama: "Deskripsi", to: "#deskripsi" },
    { nama: "Pandangan Orang", to: "#KataOrang" },
    { nama: "Gambar", to: "#gambar" },
  ],
  "/covid": [
    { nama: "Kondisi Terkini", to: "#all" },
    { nama: "Data Provinsi", to: "#provinsi" },
  ],
};

function NavLink({ path, getHeight, expanded, setExpandClose }) {
  const handleLink = (e) => {
    e.preventDefault();

    setExpandClose();
    const height = getHeight();
    if (height) {
      const el = document.querySelector(e.target.id);
      if (expanded) {
        setTimeout(() => {
          const tujuan = el.offsetTop - height;
          window.scrollTo(0, tujuan);
        }, 150);
      } else {
        const tujuan = el.offsetTop - height;
        window.scrollTo(0, tujuan);
      }
    }
  };

  const renderer = List[path];

  return (
    <>
      {renderer && (
        <>
          <Nav.Link
            as={Link}
            to={path === "/" ? "/covid" : "/"}
            onClick={() => expanded && setExpandClose()}
          >
            {path === "/" ? "Informasi Covid 19" : "Halaman Utama"}
          </Nav.Link>
          {renderer.map((link, i) => (
            <Nav.Link key={i} href={link.to} id={link.to} onClick={handleLink}>
              {link.nama}
            </Nav.Link>
          ))}
        </>
      )}
    </>
  );
}

export default memo(NavLink);
