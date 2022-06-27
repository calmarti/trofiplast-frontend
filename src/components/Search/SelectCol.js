import Form from "react-bootstrap/Form";

export default function SelectCol({col, label, name, values, handleChange}) {
  return (
    <Form.Group as={col} className="mx-2">
      <Form.Label>
        <span className="select-label">{label}</span>
        <Form.Select
          className="mx-5 my-3 w-75 select-form"
          defaultValue=""
          name={name}
          onChange={handleChange}
        >
          <option></option>
          {values &&
            values.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
        </Form.Select>
      </Form.Label>
    </Form.Group>
  );
}
