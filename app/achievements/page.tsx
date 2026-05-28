import NavbarPage from '../components/navbar/page'

function AchievementsPage() {
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
          MY ACHIEVEMENTS
        </p>

        <h1
          style={{
            fontSize: "65px",
            marginTop: "10px",
          }}
        >
          Achievements &
          <span
            style={{
              color: "cyan",
              marginLeft: "15px",
              textShadow: "0 0 15px cyan",
            }}
          >
            Awards
          </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Milestones and accomplishments throughout my academic journey
        </p>
      </div>

      {/* ACHIEVEMENTS CARDS */}
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
        {/* WITH HONORS */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "300px",
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
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            🏅 With Honors
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Achieved academic excellence and received recognition
            for maintaining good performance and dedication in studies.
          </p>
        </div>

        {/* SENIOR HIGH */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "300px",
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
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            🎓 Senior High Graduate
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Successfully graduated from Lusacan National High School
            Senior High School and continued pursuing higher education
            in the field of Information Technology.
          </p>
        </div>

        {/* BSIT */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "300px",
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
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            💻 BSIT Student
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Currently pursuing a Bachelor of Science in Information
            Technology while continuously improving my technical
            and creative skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AchievementsPage