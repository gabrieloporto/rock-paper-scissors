import PropTypes from "prop-types";

export default function Result({ result, onRestart, resultClass }) {
  return (
    <section className={resultClass}>
      <h2>{result}</h2>
      <button className={"restart-button"} onClick={onRestart}>
        PLAY AGAIN
      </button>
    </section>
  );
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
};
