import Register from "./Register";
import Login from "./Login";

function Entry() {
  return (
    <div className="App" style={{ padding: "100px" }}>
      <Login></Login>
      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "1px",
          opacity: "10%",
          width: "200px",
          margin: "auto",
        }}
      />

      <Register></Register>
    </div>
  );
}
export default Entry;
