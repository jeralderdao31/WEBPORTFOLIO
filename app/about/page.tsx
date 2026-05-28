import NavbarPage from '../components/navbar/page'

function AboutPage() {
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

      {/* MAIN CONTAINER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "60px",
          padding: "80px 40px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              backgroundColor: "cyan",
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              width: "320px",
              height: "320px",
              objectFit: "cover",
              borderRadius: "30px",
              border: "4px solid cyan",
              boxShadow: "0 0 35px cyan",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <p
            style={{
              color: "cyan",
              letterSpacing: "3px",
              fontSize: "18px",
            }}
          >
            GET TO KNOW ME
          </p>

          <h1
            style={{
              fontSize: "65px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            About
            <span
              style={{
                color: "cyan",
                marginLeft: "15px",
                textShadow: "0 0 15px cyan",
              }}
            >
              Me
            </span>
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: "1.9",
            }}
          >
            Hello! I’m <span style={{ color: "cyan" }}>Jerald E. Erdao</span>,
            a 20-year-old BSIT student from PLSP who is passionate about
            technology, creativity, and continuous learning.
            <br /><br />
            I enjoy solving mathematical problems, creating digital projects,
            taking landscape photographs, drawing using grid techniques,
            and expressing myself through music and singing.
            <br /><br />
            My dream is to become a successful IT professional, improve my
            skills in web development and technology, and travel around the
            world while experiencing different cultures and opportunities.
          </p>

          {/* INFO CARDS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1e293b",
                padding: "20px",
                borderRadius: "20px",
                width: "180px",
                border: "1px solid cyan",
                boxShadow: "0 0 10px rgba(0,255,255,0.2)",
              }}
            >
              <h3 style={{ color: "cyan" }}>Age</h3>
              <p>20 Years Old</p>
            </div>

            <div
              style={{
                backgroundColor: "#1e293b",
                padding: "20px",
                borderRadius: "20px",
                width: "180px",
                border: "1px solid cyan",
                boxShadow: "0 0 10px rgba(0,255,255,0.2)",
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
                boxShadow: "0 0 10px rgba(0,255,255,0.2)",
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
                boxShadow: "0 0 10px rgba(0,255,255,0.2)",
              }}
            >
              <h3 style={{ color: "cyan" }}>Dream</h3>
              <p>Travel the World</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage