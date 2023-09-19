import { Notify } from "./Notification.styled"
import propTypes from 'prop-types'

export const Notification = ({message}) => {
    return (
        <Notify>{message}</Notify>
    
)

}

Notification.propTypes = {
    message: propTypes.string
}