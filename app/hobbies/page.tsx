import NavbarPage from '../components/navbar/page'

function HobbiesPage() {
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
          My Hobbies
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
          }}
        >
          Things I enjoy doing during my free time
        </p>
      </div>

      {/* HOBBY CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "60px",
          padding: "0 30px",
        }}
      >
        {/* GAMING */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
            }}
          >
            🎮 Playing Games
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            I enjoy playing different types of games because
            they help me relax, improve my strategic thinking,
            and have fun with friends.
          </p>
        </div>

        {/* GUITAR */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
            }}
          >
            🎸 Playing Guitar
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            Playing guitar allows me to express my creativity
            and enjoy music while learning different songs
            and melodies.
          </p>
        </div>

        {/* SINGING */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
            }}
          >
            🎤 Singing
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            Singing is one of my favorite ways to enjoy music,
            relieve stress, and improve my confidence.
          </p>
        </div>

        {/* LANDSCAPE */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
            }}
          >
            📸 Landscape Photography
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            I love taking pictures of beautiful landscapes
            and natural scenery because it helps me appreciate
            nature and creativity.
          </p>
        </div>

        {/* CAT */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid cyan",
            boxShadow: "0 0 15px rgba(0,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
            }}
          >
            🐱 Playing With My Cat
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            Spending time with my cat makes me happy and
            helps me relax after a busy day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HobbiesPage