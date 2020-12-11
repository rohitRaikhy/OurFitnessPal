import React from "react";
import userService from "../../services/UserService";

export default class UserRowComponent extends React.Component {
  state = {
    editing : false,
    user: this.props.user,
    roles: this.props.roles,
    deleted: false,
  }

  render() {
    return (
    <tr>
      <td>
        {this.state.user.userId}
      </td>
      <td>
        {this.state.user.email}
      </td>
      <td>
        {this.state.editing &&
        <select className="form-control" id="role"
                onChange={(event) => {
                    const newRole = event.target.value;
                    this.setState((prevState) => ({
                    user: { ...prevState.user, role: newRole },
                    }));}}>
          <option value="">Choose One</option>
          {this.state.roles.map( role =>
              <option value={role}>{role}</option>
          )}
        </select>}
        {!this.state.editing && this.state.user.role}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => {this.props.deleteUser(this.state.user.id)}}>
          Delete
        </button>
        {!this.state.editing && <button onClick={() => this.setState({editing: true})} className="btn btn-primary">
          Edit
        </button>}
        {this.state.editing && <button onClick={() => {
          userService.updateUser(this.state.user.userId, this.state.user).then((status) => this.setState({editing: false}))
        }} className="btn btn-primary">
          done
        </button>}
      </td>
    </tr>
    )
  }
}
