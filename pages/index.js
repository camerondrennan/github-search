import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Star from '@material-ui/icons/Star';
import AppBar from '../components/AppBar';

export default (props) => (
    <div>
        <AppBar />
        <div>Hello World</div>
        <Grid item xs={8}>
            <Star className={props.icon} color="primary"/>
        </Grid>
        <Button variant="contained" color="primary">Danger!</Button>
    </div>
)