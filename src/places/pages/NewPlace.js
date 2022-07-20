import styled from "styled-components";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = () => {
  return (
    <>
      <Form>
        <Input type="text" label="Title" element="input" validators={[]} errorText="Please enter a valid title"/>
      </Form>
    </>
  );
};

const Form = styled.form`
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  background: white;
`;

export default NewPlace;
