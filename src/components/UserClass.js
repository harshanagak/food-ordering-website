import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div className="user-card">
                <h2>Count = {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>increase Count</button>
                <h2>
                    Name: {this.props.name}
                </h2>
                <h3>
                    Location: Rajahmundry
                </h3>
                <h4>Contact: @harsha_naga_k</h4>
            </div>
        )
    }
}

export default UserClass;