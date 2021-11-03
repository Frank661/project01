import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import get from 'lodash/fp/get';
import { TextField } from 'mui-rff';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';
import {increment, decrement} from "../actions/index"

const useStyles = makeStyles({
    textField: {
      maxWidth: 600,
    },
  });
  
  const OnboardingForm = () => {
    const classes = useStyles();
    return (
      <Grid container item direction="column" alignItems="center" spacing={1}>
        <TextField
          label="First Name"
          name="firstName"
          placeholder="First Name"
          className={classes.textField}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          placeholder="Last Name"
          className={classes.textField}
          required
        />
        <TextField
          label="Desired Hourly Rate"
          name="hourlyRate"
          placeholder="Desired Hourly Rate"
          className={classes.textField}
          required
        />
      </Grid>
    );
  };
  
  const ButtonActions = (
    <Grid container item justify="center" direction="row" spacing={1}>
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </Grid>
  );
  
  const Onboarding = ({ candidateUpdate, user }) => {
    const classes = useStyles();
    return (
      (true && (
        <Form
          initialValues={{
            firstName: get(['candidate', 'firstName'], user),
            hourlyRate: get(['candidate', 'hourlyRate'], user),
            lastName: get(['candidate', 'lastName'], user),
          }}
          onSubmit={(e) => 
          console.log(
            `firstName: ${e.firstName} lastName: ${e.lastName} hourlyRate: ${e.hourlyRate}`)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                container
                alignItems="flex-start"
                direction="row"
                spacing={2}
              >
                <OnboardingForm />
                {ButtonActions}

              </Grid>
            </form>
          )}
        />
      )) ||
      null
    );
  };
  

Onboarding.propTypes = {
    user: PropTypes.shape({
      candidate: PropTypes.shape({
        firstName: PropTypes.string,
        hourlyRate: PropTypes.string,
        lastName: PropTypes.string,
      }),
      role: PropTypes.shape({
        admin: PropTypes.bool,
        employee: PropTypes.bool,
        customer: PropTypes.bool,
        recruiter: PropTypes.bool,
        contact: PropTypes.bool,
      }),
      bhCandidateId: PropTypes.string,
    }),
  };
  const mapStateToProps = (state) => {
    return {
        user: state.user,}
  };
//   const mapDispatchToProps = { ...actions };
  
  export default connect(mapStateToProps, {increment, decrement} )(Onboarding);
  


