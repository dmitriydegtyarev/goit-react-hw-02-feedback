export const FeedbackButton = ({ feedback, clickFeedback }) => {
  return (
    <li>
      <button
        className={feedback}
        type="button"
        data-feedback={feedback}
        onClick={clickFeedback}
      >
        {feedback}
      </button>
    </li>
  );
};
