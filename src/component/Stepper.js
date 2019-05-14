import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { Button } from 'react-bootstrap';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ContactForm from "./ContactForm";
import MyQuiz from "./Quiz";

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Answer Quiz', 'General Info'];
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    submitFromOutside: false
  };

  handleNext = () => {
    console.log('activeStep: ', this.state.activeStep);
    if(this.state.activeStep === 1) {
      this.setState({submitFromOutside: true});
    }
    else {
      this.setState(state => ({
        activeStep: this.state.activeStep + 1,
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      submitFromOutside: false
    }));
  };

  getStepContent = (step, obj) => {
    switch (step) {
      case 0:
        return <MyQuiz />;
      case 1:
        return <ContactForm submitFromOutside={this.state.submitFromOutside}/>;
      default:
        return 'Unknown step';
    }
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    // const style = {
    //   backgroundColor: '#BFA65B'
    // }

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{this.getStepContent(index, this)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button 
                       disabled={activeStep === 0}
                       onClick={this.handleBack}
                       className={classes.button}
                       variant="light">
                       Back</Button>

                    <Button
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                      variant="outline-dark"
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {/* {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Thank you for participating, conact you staff to get your prize.</Typography>
          </Paper>
        )} */}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
