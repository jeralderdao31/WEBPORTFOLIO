import NavbarPage from '../components/navbar/page'

function SkillsPage() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #020617, #0f172a)",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "50px",
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
            fontSize: "60px",
            color: "cyan",
            textShadow: "0 0 15px cyan",
            marginBottom: "10px",
          }}
        >
          My Skills
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
          }}
        >
          Skills and talents I continue to improve every day
        </p>
      </div>

      {/* SKILLS CONTAINER */}
      <div
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          display: "grid",
          gap: "25px",
          padding: "0 20px",
        }}
      >
        {/* MATH SOLVING */}
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h2>Math Solving</h2>
            <h2 style={{ color: "cyan" }}>90%</h2>
          </div>

          <div
            style={{
              backgroundColor: "#334155",
              height: "15px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "90%",
                backgroundColor: "cyan",
                height: "15px",
                borderRadius: "10px",
                boxShadow: "0 0 10px cyan",
              }}
            />
          </div>
        </div>

        {/* PROBLEM SOLVING */}
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h2>Problem Solving</h2>
            <h2 style={{ color: "cyan" }}>88%</h2>
          </div>

          <div
            style={{
              backgroundColor: "#334155",
              height: "15px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "88%",
                backgroundColor: "cyan",
                height: "15px",
                borderRadius: "10px",
                boxShadow: "0 0 10px cyan",
              }}
            />
          </div>
        </div>

        {/* PHOTOGRAPHY */}
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h2>Photography</h2>
            <h2 style={{ color: "cyan" }}>85%</h2>
          </div>

          <div
            style={{
              backgroundColor: "#334155",
              height: "15px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "85%",
                backgroundColor: "cyan",
                height: "15px",
                borderRadius: "10px",
                boxShadow: "0 0 10px cyan",
              }}
            />
          </div>
        </div>

        {/* GRID DRAWING */}
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h2>Grid-Based Drawing</h2>
            <h2 style={{ color: "cyan" }}>92%</h2>
          </div>

          <div
            style={{
              backgroundColor: "#334155",
              height: "15px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "92%",
                backgroundColor: "cyan",
                height: "15px",
                borderRadius: "10px",
                boxShadow: "0 0 10px cyan",
              }}
            />
          </div>
        </div>

        {/* SINGING */}
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h2>Singing</h2>
            <h2 style={{ color: "cyan" }}>80%</h2>
          </div>

          <div
            style={{
              backgroundColor: "#334155",
              height: "15px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: "80%",
                backgroundColor: "cyan",
                height: "15px",
                borderRadius: "10px",
                boxShadow: "0 0 10px cyan",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage