class BaseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getItemsUrl = "https://script.google.com/macros/s/AKfycbxiXQZEVPC92sOY8C6IY8-iErL06pA-qMUBhyCMsDIp1mTO-r0LEFPcsthURdfBUIF7/exec";
  }

  componentDidMount() {
    const that = this;
    $.getJSON(that.getItemsUrl, {}, function (items) {
      that.setState({
        items
      });
    });
  }

  render() {
    if (this.state && this.state.items) {
      return this.renderPage();
    } else {
      return React.createElement(
        "div",
        null,
        "Loading..."
      );
    }
  }
}