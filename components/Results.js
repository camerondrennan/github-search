import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
    results: {
        minWidth: 275,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 12.5,
        marginBottom: 12.5
    }
};

class Results extends React.Component {
    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <Typography className={classes.results} variant="h6" color="inherit" noWrap>
                    Repositories Returned: {this.props.count}
                </Typography>
                <Divider />
            </div>
        );
    }
}

Results.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);