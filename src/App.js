import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "dolor sit amet",
      bio:
        "MLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus blandit nibh sed mattis. Nulla mattis tortor eget magna ultrices rutrum. Sed vitae consectetur leo, quis malesuada nibh. Mauris commodo, nisi sed congue aliquam, dui ligula auctor lacus, id dapibus nisl leo consequat nibh. In tempus fermentum dolor, vitae euismod erat. Pellentesque varius vel tellus non consectetur. Curabitur et velit tincidunt, posuere lorem vel, ultricies mi. Ut vel lacus ligula. In sed lacus non tortor facilisis efficitur in vel magna. Quisque viverra nibh a arcu condimentum interdum. Curabitur placerat mattis nisl sit amet bibendum. Suspendisse sagittis.",
      imgSrc: "./avatar.jpg",
      profession: "consectetur adipiscing elit.r",
    },
    show: false,
    intervalId: null,
    timeElapsed: 0,
    fadeInText: "",
    typingIndex: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ intervalId });

    this.animateText();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeElapsed = () => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 0.5,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  animateText = () => {
    const { bio } = this.state.person;
    const intervalId = setInterval(() => {
      const fadeInText = bio.substring(0, this.state.typingIndex + 1);
      this.setState((prevState) => ({
        typingIndex: prevState.typingIndex + 1,
        fadeInText,
      }));

      if (fadeInText === bio) {
        clearInterval(intervalId);
      }
    }, 80);
  };

  render() {
    const { fullName, imgSrc, profession } = this.state.person;
    const { show, timeElapsed, fadeInText } = this.state;

    return (
      <div
        style={{
          background:
            "linear-gradient(45deg, #262626, #404040, #595959, #737373, #8c8c8c, #a6a6a6, #bfbfbf)",
          borderRadius: "15px",
          padding: "20px",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <button
          style={{
            color: "#fff",
            background:
              "linear-gradient(45deg, #ff4000, #ffcc00, #ffff00, #80ff00, #00bfff, #4d0082, #800080)",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onClick={this.toggleShow}
        >
          Toggle Profile
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <div
              style={{
                height: "150px",
                width: "150px",
                padding: "20px",
                border: "2px solid #fff",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto",
                background:
                  "linear-gradient(45deg, #555555, #777777, #999999, #bbbbbb, #dddddd, #ffffff)",
                boxShadow: "0 8px 16px rgba(255, 255, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={imgSrc}
                alt="Avatar"
              />
            </div>
            <p style={{ color: "#fff", opacity: 0.8 }}>
              Bio: {fadeInText}
              <span style={{ opacity: 0.2 }}>|</span>
            </p>
            <p style={{ color: "#fff", opacity: 0.8 }}>
              Profession: {profession}
            </p>
          </div>
        )}
        <p style={{ color: "#fff", opacity: 0.8 }}>
          Time Elapsed: {timeElapsed} second{timeElapsed !== 1 && "s"}
        </p>
      </div>
    );
  }
}

export default App;
