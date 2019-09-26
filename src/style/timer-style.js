export const timerStyles = theme => ({
  timer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    margin: `0 auto`,
    fontSize: `24px`,
    color: `#3d60cc`,
    fontWeight: 700
  },
  timerBtn: {
    boxShadow: `0 0 10px rgba(0, 0, 0, 0.4)`,
    marginBottom: `20px`,
    color: `#3d60cc`,
    fontWeight: 700
  },
  timerAvatar: {
    margin: `20px 0 20px 0`,
    height: `250px`,
    width: `250px`,
    backgroundColor: `#fff`,
    boxShadow: `0 3px 8px 2px rgba(0, 0, 0, 0.3)`,
    fontWeight: 500,
    fontSize: `2.5rem`,
    fontFamily: `'Yantramanav', sans-serif`,
    color: `#3d60cc`
  },
  timerTextField: {
    marginTop: `20px`,
    "& input::placeholder": {
      textAlign: `center`,
      opacity: 1,
      color: `#3d60cc`,
      fontWeight: 700
    }
  }
});
export const alertDialogStyle = theme => ({
  alertDialog: {
    color: `#bf2b5c`
  },
  alertBtn: {
    color: `#01bcd5`
  }
});
