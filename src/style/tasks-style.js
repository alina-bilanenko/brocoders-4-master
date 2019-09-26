export const tasksStyle = theme => ({
  generateBtn: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-end`,
    margin: `20px 30px`,
    "& button": {
      boxShadow: `0 0 10px rgba(0, 0, 0, 0.4)`,
      backgroundColor: `#01bcd5`
    }
  },
  tableHead: {
    fontWeight: 700,
    "& th": {
      opacity: 0.8
    }
  },
  tasksTable: {
    backgroundColor: `#eaf6ff`,
    "& th, td": {
      color: `#3d60cc`,
      fontWeight: 700
    },
    "& button": {
      boxShadow: "0 0 3px rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fff",
      color: "#3d60cc"
    }
  },
  infoLink: {
    textDecoration: "none",
    "& a": {
      textDecoration: "none"
    },
    "& button": {
      boxShadow: "0 0 3px rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fff",
      color: "#3d60cc"
    }
  },
  tasksTab: {
    backgroundColor: "#01bcd5",
    "& span": {
      fontWeight: 700
    }
  }
});
