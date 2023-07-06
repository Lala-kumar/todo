import Card from '../UI/Card';
import classes from './UserList.module.css'


const UserList = props => {
    return (
        <Card className={classes.users}>
            <ul >
                {props.userData.map((value) => (
                    <li key={value.Id}> {value.Name} ({value.Age} years old.) </li>
                ))}
            </ul>
        </Card>

    )
};
export default UserList;