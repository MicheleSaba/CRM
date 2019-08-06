import React, { Component } from "react"
import M from "materialize-css"
import "./materialize.min.css"

class RedeemModal extends Component {
  constructor() {
    super()
    this.state = {
      disabled : false
  };
  }
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start")
      },
      onOpenEnd: () => {
        console.log("Open End")
      },
      onCloseStart: () => {
        console.log("Close Start")
      },
      onCloseEnd: () => {
        console.log("Close End")
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    }
    M.Modal.init(this.Modal, options)
    // If you want to work on instance of the Modal then you can use the below code snippet
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  handleClick = (event) => {
    if (this.state.disabled) {
        return;
    }
    this.setState({disabled: true});
    // Send     
}

  render() {
    return (
      <>
        <a
          className="waves-effect btn modal-trigger"
          data-target="modal1"
          style={{ backgroundColor: "#8852c4" }}
          onClick={this.handleClick} disabled={this.state.disabled}
        >
          Redeem
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
        bottom-sheet class */}
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#" class="modal-close waves-effect waves-red btn-flat">
              Close
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default RedeemModal
