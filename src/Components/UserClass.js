import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR CALLED");
    this.state = {
      UserInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }
  async componentDidMount() {
    console.log("componentDidMount CALLED");
    const data = await fetch("https://api.github.com/users/bluecoder1080");
    const json = await data.json();
    console.log(json);
    this.setState({
      UserInfo: json,
    });
  }

  render() {
    const { Name, occu } = this.props;
    console.log("RENDER CALLED");
    const { name, location, avatar_url } = this.state.UserInfo;

    return (
      <div className="User-info2">
        <img src={avatar_url} />

        <h1>Name : {name}</h1>
        <h2>Place : {location}</h2>
        <h2>Occupation : STUDENT</h2>
      </div>
    );
  }
}
export default UserClass;
