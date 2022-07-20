import { useReducer } from "react";
import styled from "styled-components";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

  return (
    <>
      <CustomInput invalid={!inputState.isValid}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
      </CustomInput>
    </>
  );
};

const CustomInput = styled.div`
  margin: 1rem 0;

  & label,
  & input,
  & textarea {
    display: block;
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input,
  & textarea {
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    background: #f8f8f8;
    padding: 0.15rem 0.25rem;
  }

  & input:focus,
  & textarea:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }

  & label,
  & p {
    color: ${(props) => props.invalid && "red"};
  }

  & input,
  & textarea {
    border-color: ${(props) => props.invalid && "red"};
    background: ${(props) => props.invalid && "#ffd1d1"};
  }
`;

export default Input;
