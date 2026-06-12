import image from "./../../../../assets/Phone.png";

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img
        src={image}
        alt="Phone"
        style={{
          maxWidth: "100%",
          maxHeight: "70dvh" /* 👈 fits nicely without overflowing */,
          objectFit: "contain",
        }}
      />
    </div>
  );
}
