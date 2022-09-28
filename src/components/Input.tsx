import "./styles.css";

type Props = {
  handleSubmit: any; //NEED UPDATING TO CORRECT TYPE
  handleChange: any; //NEED UPDATING TO CORRECT TYPE
};

const Input: React.FC<Props> = ({ handleSubmit, handleChange }) => {
  return (
    <div className="input-container">
      <h3>Tell us what ingredients you need to use up</h3>
      <p>
        Type an ingredient into the dropdown menu, and select a recipe you that
        takes your fancy.
      </p>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="input-box"
          onChange={handleChange}
          type="text"
          placeholder="Enter ingredient"
          autoFocus
        ></input>

        {/* <input className="input-button" type="submit" value="Search"></input> */}
      </form>
    </div>
  );
};

export default Input;
