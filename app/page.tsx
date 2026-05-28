import NavbarPage from './components/navbar/page'

function HomePage() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #020617, #0f172a)",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
      }}
    >
      <NavbarPage />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          padding: "40px",
          flexWrap: "wrap",
          gap: "60px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            maxWidth: "650px",
          }}
        >
          <p
            style={{
              color: "cyan",
              fontSize: "20px",
              marginBottom: "10px",
              letterSpacing: "2px",
            }}
          >
            WELCOME TO MY PORTFOLIO
          </p>

          <h1
            style={{
              fontSize: "75px",
              margin: 0,
              lineHeight: "1.1",
            }}
          >
            Jerald E.
            <span
              style={{
                color: "cyan",
                display: "block",
                textShadow: "0 0 15px cyan",
              }}
            >
              Erdao
            </span>
          </h1>

          <h2
            style={{
              color: "#cbd5e1",
              marginTop: "20px",
              fontSize: "30px",
              fontWeight: "normal",
            }}
          >
            BSIT-2C | Future Web Developer
          </h2>

          <p
            style={{
              marginTop: "30px",
              color: "#94a3b8",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Passionate about creating modern websites,
            learning new technologies, and developing
            creative digital experiences.
            <br /><br />
            Welcome to my personal portfolio website where
            you can explore my projects, educational background,
            achievements, hobbies, and more.
          </p>

          {/* INFO CARDS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                backgroundColor: "#1e293b",
                padding: "20px",
                borderRadius: "20px",
                width: "180px",
                border: "1px solid cyan",
                boxShadow: "0 0 10px rgba(0,255,255,0.3)",
              }}
            >
              <h3 style={{ color: "cyan" }}>Course</h3>
              <p>BSIT-2C</p>
            </div>

            <div
              style={{
                backgroundColor: "#1e293b",
                padding: "20px",
                borderRadius: "20px",
                width: "180px",
                border: "1px solid cyan",
                boxShadow: "0 0 10px rgba(0,255,255,0.3)",
              }}
            >
              <h3 style={{ color: "cyan" }}>School</h3>
              <p>PLSP</p>
            </div>

            <div
              style={{
                backgroundColor: "#1e293b",
                padding: "20px",
                borderRadius: "20px",
                width: "180px",
                border: "1px solid cyan",
                boxShadow: "0 0 10px rgba(0,255,255,0.3)",
              }}
            >
              <h3 style={{ color: "cyan" }}>Dream</h3>
              <p>Travel the World</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "350px",
              height: "350px",
              backgroundColor: "cyan",
              filter: "blur(100px)",
              opacity: 0.3,
              borderRadius: "50%",
              zIndex: 0,
            }}
          />

          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid cyan",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 0 40px cyan",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage