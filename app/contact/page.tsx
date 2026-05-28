import NavbarPage from '../components/navbar/page'

function ContactPage() {
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
          CONTACT ME
        </p>

        <h1
          style={{
            fontSize: "65px",
            marginTop: "10px",
          }}
        >
          Get In
          <span
            style={{
              color: "cyan",
              marginLeft: "15px",
              textShadow: "0 0 15px cyan",
            }}
          >
            Touch
          </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Feel free to contact me through my social accounts or send a message
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          padding: "0 20px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "350px",
            padding: "35px",
            borderRadius: "25px",
            border: "1px solid cyan",
            boxShadow: "0 0 20px rgba(0,255,255,0.2)",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "30px",
              fontSize: "35px",
            }}
          >
            Contact Info
          </h2>

          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ color: "cyan" }}>📘 Facebook</h3>
            <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
              Jerald Erdao
            </p>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ color: "cyan" }}>📧 Gmail</h3>
            <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
              erdaojerald5@gmail.com
            </p>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <h3 style={{ color: "cyan" }}>📱 Phone Number</h3>
            <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
              09915271731
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
              }}
            >
              I’m always open to meeting new people,
              collaborations, and learning opportunities.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          style={{
            backgroundColor: "#1e293b",
            width: "600px",
            padding: "35px",
            borderRadius: "25px",
            border: "1px solid cyan",
            boxShadow: "0 0 20px rgba(0,255,255,0.2)",
          }}
        >
          <h2
            style={{
              color: "cyan",
              marginBottom: "30px",
              fontSize: "35px",
            }}
          >
            Send Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              backgroundColor: "#0f172a",
              border: "1px solid cyan",
              borderRadius: "12px",
              color: "white",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              backgroundColor: "#0f172a",
              border: "1px solid cyan",
              borderRadius: "12px",
              color: "white",
              fontSize: "16px",
            }}
          />

          <textarea
            placeholder="Your Message"
            style={{
              width: "100%",
              height: "180px",
              padding: "15px",
              backgroundColor: "#0f172a",
              border: "1px solid cyan",
              borderRadius: "12px",
              color: "white",
              fontSize: "16px",
              resize: "none",
            }}
          />

          <button
            style={{
              marginTop: "25px",
              backgroundColor: "cyan",
              color: "#020617",
              padding: "15px 35px",
              border: "none",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 15px cyan",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage