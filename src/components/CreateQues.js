import React from 'react'
import {
    Input,
    FormControlLabel,
    Radio,
    Button,
    FormControl,
    RadioGroup,
    Card,
    CardContent,
    TextField
} from '@material-ui/core'

const CreateQues = (props) => {
    const [open1, setOpen1] = React.useState(false);
    const [value,setValue] = React.useState(null);

    const handleChangeradio = (event) => {
        setValue(event.target.value);
      };

    //   const handleOpen1 = () => {
    //     setOpen1(true);
    //   };
  
    //   const handleClose1 = () => {
    //     setOpen1(false);
    //   };

    return (
      <Card>
        <CardContent>
        <h2 id="transition-modal-title">Schedule Exam</h2>
        <p id="transition-modal-description">
        <table>
          <tbody>
            <tr><td>Question</td><td><TextField required id="standard-required" label="question" variant="outlined" size="small" type="text" /></td></tr><br/><br/>
            <tr><td>options</td><td>
            <FormControl component="fieldset" >
              <RadioGroup name="" value={value} onChange={handleChangeradio} style={{display:"inline-flex",flexWrap:"wrap",flexFlow:"row"}}>
                <FormControlLabel value="A" control={<Radio />} label="A" /><Input type="text"/>
                <FormControlLabel value="B" control={<Radio />} label="B" /><Input type="text"/>
                <FormControlLabel value="C" control={<Radio />} label="C" /><Input type="text"/>
                <FormControlLabel value="D" control={<Radio />} label="D" /><Input type="text"/>
              </RadioGroup>
            </FormControl></td></tr>
            <td><Button variant="contained">Submit</Button></td>
          </tbody>
        </table>
        </p>
        </CardContent>
        </Card>
    )
}

export default CreateQues
