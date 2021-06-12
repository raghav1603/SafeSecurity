function FormData() {
  const data = {};
  return (
    <div>
      <form>
        <label id="label_name">Name:</label>
        <input id="name" /> <br />
        <label id="label_age">Age:</label>
        <input id="age" type="number" />
        <br />
        <label id="label_date">Date:</label>
        <input id="dob" type="date" />
      </form>
    </div>
  );
}
export default FormData;
