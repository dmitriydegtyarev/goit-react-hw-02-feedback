import PropTypes from 'prop-types';

import { FeedbackButton } from 'Component/FeedbackOptions/FeedbackButton';

export const FeedbackOptions = ({ options, clickFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <FeedbackButton
          key={option.id}
          feedback={option.name}
          clickFeedback={clickFeedback}
        />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  clickFeedback: PropTypes.func.isRequired,
};
