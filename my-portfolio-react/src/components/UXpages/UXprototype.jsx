export default function FigmaEmbed({ urlprototype, title }) {
  return (
    <div className="embedprototype">
      <iframe
        src={urlprototype}
        title={title}
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}