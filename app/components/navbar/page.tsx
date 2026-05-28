function NavbarPage() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "15px",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="/" style={{ color: "white" }}>Home</a></li>

        <li><a href="./about" style={{ color: "white" }}>About</a></li>
        <li><a href="./skills" style={{ color: "white" }}>Skills</a></li>
        <li><a href="/projects" style={{ color: "white" }}>Projects</a></li>
        <li><a href="/hobbies" style={{ color: "white" }}>Hobbies</a></li>
        <li><a href="/education" style={{ color: "white" }}>Education</a></li>
        <li><a href="/achievements" style={{ color: "white" }}>Achievements</a></li>
        <li><a href="/resume" style={{ color: "white" }}>Resume</a></li>
        <li><a href="/contact" style={{ color: "white" }}>Contact</a></li>
        <li><a href="/gallery" style={{ color: "white" }}>Gallery</a></li>
      </ul>
    </nav>
  )
}

export default NavbarPage