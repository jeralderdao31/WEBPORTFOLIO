import NavbarPage from '../components/navbar/page'

function GalleryPage() {
  const kolokoys = [
    "/gallery/kolokoys/d.jpg",
    "/gallery/kolokoys/e.jpg",
    "/gallery/kolokoys/f.jpg",
    "/gallery/kolokoys/g.jpg",
  ]

  const landscapes = [
    "/gallery/landscapes/h.jpg",
    "/gallery/landscapes/i.jpg",
  ]

  const cats = [
  "/gallery/cats/a.jpg",
  "/gallery/cats/b.jpg",
  "/gallery/cats/c.jpg",
]

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #020617, #0f172a)",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "60px",
      }}
    >
      <NavbarPage />

      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "60px",
        }}
      >
        <p
          style={{
            color: "cyan",
            letterSpacing: "3px",
            fontSize: "18px",
          }}
        >
          MY MEMORIES
        </p>

        <h1
          style={{
            fontSize: "65px",
            marginTop: "10px",
          }}
        >
          Photo
          <span
            style={{
              color: "cyan",
              marginLeft: "15px",
              textShadow: "0 0 15px cyan",
            }}
          >
            Gallery
          </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Friends, landscapes, and cats
        </p>
      </div>

      {/* KOLOKOYS */}
      <section
        style={{
          padding: "50px 30px",
        }}
      >
        <h2
          style={{
            color: "cyan",
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Kolokoys
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {kolokoys.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Kolokoys"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "2px solid cyan",
                boxShadow: "0 0 15px rgba(0,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </section>

      {/* LANDSCAPES */}
      <section
        style={{
          padding: "50px 30px",
        }}
      >
        <h2
          style={{
            color: "cyan",
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Landscape Photography
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {landscapes.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Landscape"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "2px solid cyan",
                boxShadow: "0 0 15px rgba(0,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </section>

      {/* CATS */}
      <section
        style={{
          padding: "50px 30px",
        }}
      >
        <h2
          style={{
            color: "cyan",
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          My Cats
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {cats.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Cat"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "2px solid cyan",
                boxShadow: "0 0 15px rgba(0,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage