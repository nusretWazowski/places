import { useCallback } from "react";
import styled from "styled-components";
import Input from "../../shared/components/FormElements/Input";

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../util/validators";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <>
      <Form>
        <Input
          id="title"
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={titleInputHandler}
        />
        <Input
          id="description"
          label="Description"
          element="textarea"
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid description. (Minimum 10 characters)"
          onInput={descriptionInputHandler}
        />
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
