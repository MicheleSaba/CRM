import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export default function RedeemModal(props) {
  const [open, setOpen] = React.useState(false)
  const [fullWidth] = React.useState(true)
  const [maxWidth] = React.useState("lg")
  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Button
        style={{
          backgroundColor: "#8852c4",
          color: "#fff",
          margin: "10px",
        }}
        onClick={handleClickOpen}
      >
        Redeem
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className="dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Coupon Code</DialogTitle>
        <DialogContent className="coupon-code">
          <DialogContentText id="alert-dialog-description">
            {props.couponCode}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            style={{
              backgroundColor: "#8852c4",
              color: "#fff",
              margin: "10px",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
