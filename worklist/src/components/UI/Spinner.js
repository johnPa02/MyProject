import { Dimmer, Loader } from "semantic-ui-react"

const Spinner = () => {
    return(
        <Dimmer active>
            <Loader size='huge' content='Loading...'></Loader>
        </Dimmer>
    )
}

export default Spinner