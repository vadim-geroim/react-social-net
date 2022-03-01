import { connect } from "react-redux";
import { Messages } from "../Messages/Messages";

const mapStateToProps = (state) => ({
    messages: state.postPage.posts
});

export const MessagesContainer = connect(mapStateToProps)(Messages);