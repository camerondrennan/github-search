import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import CodeIcon from "@material-ui/icons/Code";
import StarRateIcon from "@material-ui/icons/StarRate";

const styles = {
    card: {
        minWidth: 275,
        margin: 35
    },
    pos: {
        marginBottom: 12
    },
    materialIcons: {
        display: 'inline-flex',
        verticalAlign: 'middle',
        marginTop: -3
    }
};

class SimpleCard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <Link href={this.props.cardData.html_url}>
                            <a>{this.props.cardData.full_name}</a>
                        </Link>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {this.props.cardData.description}
                    </Typography>
                    <Typography color="textSecondary">
                        <CodeIcon className={classes.materialIcons} /> {this.props.cardData.language}
                    </Typography>
                    <Typography color="textSecondary">
                        <StarRateIcon className={classes.materialIcons}/> {this.props.cardData.stargazers_count}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);