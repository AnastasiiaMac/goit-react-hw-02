import css from "./Notification.module.css";
const Notification = ({ totalFeedback }) => {
  return (
    totalFeedback === 0 && (
      <p className={css.notificationText}>No feedback yet</p>
    )
  );
};
export default Notification;
