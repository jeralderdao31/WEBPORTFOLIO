import NavbarPage from '../components/navbar/page'

function EducationPage() {
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
          MY JOURNEY
        </p>

        <h1
          style={{
            fontSize: "65px",
            marginTop: "10px",
          }}
        >
          Educational
          <span
            style={{
              color: "cyan",
              marginLeft: "15px",
              textShadow: "0 0 15px cyan",
            }}
          >
            Background
          </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          My academic journey and schools I attended
        </p>
      </div>

      {/* EDUCATION CARDS */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "60px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "0 20px",
        }}
      >
        {/* ELEMENTARY */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "250px",
            padding: "30px",
            borderRadius: "25px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
              fontSize: "28px",
            }}
          >
            Elementary
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Amityville Elementary School
          </p>
        </div>

        {/* JUNIOR HIGH */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "250px",
            padding: "30px",
            borderRadius: "25px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
              fontSize: "28px",
            }}
          >
            Junior High
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Lusacan National High School
          </p>
        </div>

        {/* SENIOR HIGH */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "250px",
            padding: "30px",
            borderRadius: "25px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
              fontSize: "28px",
            }}
          >
            Senior High
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Lusacan National High School Senior High School
          </p>
        </div>

        {/* COLLEGE */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "250px",
            padding: "30px",
            borderRadius: "25px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
              fontSize: "28px",
            }}
          >
            College
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Pamantasan ng Lungsod ng San Pablo (PLSP)
          </p>
        </div>
      </div>
    </div>
  )
}

export default EducationPage