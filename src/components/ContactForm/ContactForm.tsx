import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Grid } from "@material-ui/core";
import InputMask from "react-input-mask";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import classnames from "classnames";

import { FormData } from "./FormData";
import { contactFormStyles } from "./ContactForm.styles";
import { SectionTitle } from "../SectionTitle";

export const ContactForm: React.FC = () => {
  const classes = contactFormStyles();
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submit logic here
    console.log(formData);
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className={classes.wrapper}
      >
        <SectionTitle
          title={"Contact us"}
          subtitle={"would you like to make a reservation?"}
          inversed={true}
        />
        <Grid container justify={"center"} className={classes.formWrapper}>
          <Grid item xs={12} sm={4} className={classes.formColumnWrapper}>
            <FormControl
              variant="outlined"
              className={classnames(classes.formControl, classes.spaceAround)}
            >
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                label="Name"
                id="component-outlined"
                value={formData.name}
                name={"name"}
                className={classes.outlinedInput}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl
              variant="outlined"
              className={classnames(classes.formControl, classes.spaceAround)}
            >
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                label="Email"
                id="component-outlined"
                value={formData.email}
                name={"email"}
                className={classes.outlinedInput}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl
              variant="outlined"
              className={classnames(classes.formControl)}
            >
              <InputLabel htmlFor="component-outlined">Phone</InputLabel>
              <InputMask
                mask="+99 99 99999-9999"
                maskChar={null}
                onChange={handleInputChange}
              >
                {() => (
                  <OutlinedInput
                    label="Phone"
                    id="component-outlined"
                    name={"phone"}
                    className={classes.outlinedInput}
                  />
                )}
              </InputMask>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.formColumnWrapper}>
            <TextField
              className={classnames(classes.formControl, "textArea")}
              multiline
              placeholder="Your message here"
              rows={7}
              name={"message"}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container justify={"center"}>
          <Button className={classes.submitButton} type={"submit"}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
