import src from "../../../../assets/Laptop.png";

export default function LaptopComponent() {
  return (
    <div>
      <img
        src={src}
        alt="Laptop"
        style={{
          maxWidth: "100%",
          maxHeight: "400px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
