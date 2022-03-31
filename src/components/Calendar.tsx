import { useState } from "react";
import { Form } from "react-bootstrap";
import { DatePicker, TextField, ButtonComponent } from "./elements";
import { IQrTextProps } from "./types";

const Calendar = ({ setQrText }: IQrTextProps) => {
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const dateStartFormatted = dateStart.replace(/-/g, "");
    const dateEndFormatted = dateEnd.replace(/-/g, "")
    setQrText(`BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:${dateStartFormatted}\nDTEND:${dateEndFormatted}\nSUMMARY:${title}\nEND:VEVENT\nEND:VCALENDAR`);
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField 
        label="Title"
        className="mb-3"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onClickIcon={() => setTitle('')}
      />
      <DatePicker 
        label="Start Date"
        className="mb-3"
        value={dateStart}
        onChange={(e) => setDateStart(e.target.value)}
      />
      <DatePicker 
        label="End Date"
        className="mb-3"
        value={dateEnd}
        onChange={(e) => setDateEnd(e.target.value)}
      />
      <ButtonComponent 
        title="Generate" 
        disabled={!title || !dateStart ||!dateEnd} 
      />
    </Form>
  )
}

export default Calendar