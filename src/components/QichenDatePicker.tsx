import { useCallback, useState } from "react";
import DatePicker from "sassy-datepicker";

const QichenDatePicker = () => {
  const today = new Date();
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(today);

  const handleDateSelect = useCallback((newDate: any) => {
    setDate(newDate);
    setVisible(false);
  }, []);

  const togglePicker = () => setVisible((v) => !v);
  return (
    <div className="form_group">
      <label onClick={togglePicker}>
        <i className="far fa-calendar-alt" />
      </label>
      <input
        type="text"
        className="form_control"
        id="datepicker"
        placeholder="Reserved Date"
        name="date" 
        onClick={togglePicker}
        value={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
      />
       
    </div>
  );
};
export default QichenDatePicker;
