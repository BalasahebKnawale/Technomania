const Display = (props) => {
  console.log(props.data);
  return (
    <div>
      <div
        className="card text-white bg-success mb-3"
        style={{ maxWidth: "18rem", marginLeft: "500px" }}
      >
        <div className="card-header">User Info</div>
        <div className="card-body">
          <h5 className="card-title">{props.data.email}</h5>
          <p className="card-text">{props.data.pass}</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
