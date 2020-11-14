const Loading = () => (
  <div className="container-fluid">
    <div className="row justify-content-center mt-5">
      <div
        className="spinner-border text-primary mt-5"
        style={{
          fontSize: "2rem",
          width: "5rem",
          height: "5rem",
        }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

export default Loading;
