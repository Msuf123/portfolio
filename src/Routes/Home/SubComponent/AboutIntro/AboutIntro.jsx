export default function AboutIntro() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 32px",
        color: "white" /* 👈 white text */,
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "16px",
          letterSpacing: "0.5px",
        }}
      >
        Akshat Malik
      </h1>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.7",
          opacity: 0.85,
          maxWidth: "320px" /* 👈 keeps text tight and readable */,
        }}
      >
        I'm Akshat. Full-stack dev working with Node.js, React, Angular, and
        React Native. SQL, MongoDB, and Redis on the data side. I also run my
        own Alpine Linux server because why not own your infra.
      </p>
    </div>
  );
}
