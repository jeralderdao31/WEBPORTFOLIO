import NavbarPage from '../components/navbar/page'

function ProjectsPage() {
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
          MY PROJECTS
        </p>

        <h1
          style={{
            fontSize: "65px",
            marginTop: "10px",
          }}
        >
          Featured
          <span
            style={{
              color: "cyan",
              marginLeft: "15px",
              textShadow: "0 0 15px cyan",
            }}
          >
            Projects
          </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Some of the systems and applications I created
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "35px",
          padding: "0 20px",
        }}
      >
        {/* VIVAMATH */}
        <div
          style={{
            width: "500px",
            backgroundColor: "#1e293b",
            borderRadius: "25px",
            padding: "35px",
            border: "1px solid cyan",
            boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(0,255,255,0.1)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              marginBottom: "25px",
              border: "1px solid cyan",
            }}
          >
            🧮
          </div>

          <h2
            style={{
              color: "cyan",
              fontSize: "35px",
              marginBottom: "20px",
            }}
          >
            VivaMath
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            VivaMath is a calculator application with
            conversion features designed to help users
            solve mathematical computations more efficiently.
            <br /><br />
            It includes different tools for calculations,
            unit conversions, and quick problem solving
            for students and users.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                backgroundColor: "#0f172a",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid cyan",
                color: "cyan",
              }}
            >
              Calculator
            </span>

            <span
              style={{
                backgroundColor: "#0f172a",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid cyan",
                color: "cyan",
              }}
            >
              Conversions
            </span>

            <span
              style={{
                backgroundColor: "#0f172a",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid cyan",
                color: "cyan",
              }}
            >
              Mathematics
            </span>
          </div>
        </div>

        {/* COMPLAINT SYSTEM */}
        <div
          style={{
            width: "500px",
            backgroundColor: "#1e293b",
            borderRadius: "25px",
            padding: "35px",
            border: "1px solid cyan",
            boxShadow: "0 0 20px rgba(0,255,255,0.2)",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(0,255,255,0.1)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              marginBottom: "25px",
              border: "1px solid cyan",
            }}
          >
            💬
          </div>

          <h2
            style={{
              color: "cyan",
              fontSize: "35px",
              marginBottom: "20px",
            }}
          >
            Student Complaint/Feedback System
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            A web-based system where students can submit
            complaints and feedback regarding school concerns.
            <br /><br />
            The administrator can manage concerns and update
            the status of each complaint as:
            Pending, Received, Processing, or Processed.
            <br /><br />
            The system also allows administrators to reply
            directly to students for better communication
            and transparency.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                backgroundColor: "#0f172a",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid cyan",
                color: "cyan",
              }}
            >
              Feedback System
            </span>

            <span
              style={{
                backgroundColor: "#0f172a",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid cyan",
                color: "cyan",
              }}
            >
              Complaint Tracking
            </span>

            <span
              style={{
                backgroundColor: "#0f172a",
                padding: "10px 15px",
                borderRadius: "10px",
                border: "1px solid cyan",
                color: "cyan",
              }}
            >
              Admin Panel
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage