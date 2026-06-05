function App() {
  let time = new Date();

  return (
    <>
      <div>
        <h1>Bharat Clock</h1>
        <p>
          This is the clock that shows the time in Bharat at all times. This is
          the current time:{time.toLocaleTimeString()} and the date:
          {time.toDateString()}
        </p>
      </div>
    </>
  );
}

export default App;
