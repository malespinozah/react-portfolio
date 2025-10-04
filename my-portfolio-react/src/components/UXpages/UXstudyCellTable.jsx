export default function UXstudyCellTable({ tableItems }) {
  return (
    <div className="UXTableContainer">
      {tableItems.map((item, index) => (
        <div className="UXTable" key={index}>
          <p className="UXTableHeader">{item.header}</p>
          <div className="UXTableCell">
            {Array.isArray(item.cell) ? (
              item.cell.map((line, i) => <p key={i}>{line}</p>)
            ) : (
              <p>{item.cell}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}