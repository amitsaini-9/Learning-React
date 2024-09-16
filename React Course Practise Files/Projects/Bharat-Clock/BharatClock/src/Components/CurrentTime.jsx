function CurrentTime() {
  let date = new Date();
  return (
    <p>
      This is the Current Time: {date.toLocaleDateString()}-
      {date.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
