import { Grid } from "semantic-ui-react";
import './secondheader.css'
import { ReactComponent as Add } from "../Assets/Add.svg";
function Secondpart() {
    return (
        <div className={"BoardHeader"}>
            <div id={"BoardGrid"}>

                <Grid.Column className={"BoardCard-Inactive"}>
                    <Add /> <p> Add New</p>
                </Grid.Column>
            </div>
        </div>
    );
}

export default Secondpart