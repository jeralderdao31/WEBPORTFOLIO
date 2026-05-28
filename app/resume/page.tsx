import NavbarPage from '../components/navbar/page'

function ResumePage() {
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
        <h1
          style={{
            fontSize: "65px",
            color: "cyan",
            textShadow: "0 0 15px cyan",
          }}
        >
          My Resume
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "15px",
          }}
        >
          Personal information, skills, projects, and achievements
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "320px",
            backgroundColor: "#1e293b",
            borderRadius: "25px",
            padding: "30px",
            border: "1px solid cyan",
            boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid cyan",
              boxShadow: "0 0 20px cyan",
            }}
          />

          <h1
            style={{
              marginTop: "25px",
              color: "cyan",
              fontSize: "35px",
            }}
          >
            Jerald E. Erdao
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "10px",
              lineHeight: "1.8",
            }}
          >
            BSIT Student passionate about technology,
            creativity, problem solving, and modern web development.
          </p>

          {/* CONTACT */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "cyan" }}>Contact</h2>

            <p>📧 erdaojerald5@gmail.com</p>
            <p>📱 09915271731</p>
            <p>📘 Jerald Erdao</p>
          </div>

          {/* SKILLS */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "cyan" }}>Skills</h2>

            <ul
              style={{
                lineHeight: "2",
                color: "#cbd5e1",
              }}
            >
              <li>Math Solving</li>
              <li>Problem Solving</li>
              <li>Photography</li>
              <li>Grid-Based Drawing</li>
              <li>Singing</li>
            </ul>
          </div>

          {/* HOBBIES */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "cyan" }}>Hobbies</h2>

            <ul
              style={{
                lineHeight: "2",
                color: "#cbd5e1",
              }}
            >
              <li>Playing Games</li>
              <li>Playing Guitar</li>
              <li>Singing</li>
              <li>Landscape Photography</li>
              <li>Playing With My Cat</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            width: "700px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {/* ABOUT */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid cyan",
              boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            }}
          >
            <h2
              style={{
                color: "cyan",
                marginBottom: "20px",
                fontSize: "35px",
              }}
            >
              About Me
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.9",
                fontSize: "18px",
              }}
            >
              Motivated BSIT student passionate about technology,
              problem solving, photography, and creative digital projects.
              Seeking opportunities to improve technical skills and gain
              experience in web development and IT-related fields.
            </p>
          </div>

          {/* EDUCATION */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid cyan",
              boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            }}
          >
            <h2
              style={{
                color: "cyan",
                marginBottom: "20px",
                fontSize: "35px",
              }}
            >
              Educational Background
            </h2>

            <ul
              style={{
                color: "#cbd5e1",
                lineHeight: "2",
                fontSize: "18px",
              }}
            >
              <li>Amityville Elementary School</li>
              <li>Lusacan National High School</li>
              <li>Lusacan National High School Senior High School</li>
              <li>Pamantasan ng Lungsod ng San Pablo (PLSP)</li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid cyan",
              boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            }}
          >
            <h2
              style={{
                color: "cyan",
                marginBottom: "20px",
                fontSize: "35px",
              }}
            >
              Projects
            </h2>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <h3 style={{ color: "cyan" }}>VivaMath</h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                A calculator application with conversion features
                designed to help users solve mathematical computations
                more efficiently.
              </p>
            </div>

            <div>
              <h3 style={{ color: "cyan" }}>
                Student Complaint/Feedback System
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                A web-based system where students can submit complaints
                and feedback regarding school concerns. Administrators
                can manage submissions and update their status as
                Pending, Received, Processing, or Processed while
                responding directly to students.
              </p>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid cyan",
              boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            }}
          >
            <h2
              style={{
                color: "cyan",
                marginBottom: "20px",
                fontSize: "35px",
              }}
            >
              Achievements
            </h2>

            <ul
              style={{
                color: "#cbd5e1",
                lineHeight: "2",
                fontSize: "18px",
              }}
            >
              <li>With Honors</li>
              <li>Graduated Senior High School</li>
              <li>Currently Pursuing BSIT Degree</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage