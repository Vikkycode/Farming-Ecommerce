const styles = {
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    margin: { xs: "20px", md: "60px 10%" },
  },
};

const billingFromStyles = {
  box: { width: { xs: "initial", md: "50%" } },
  inputField: {
    margin: "10px 0",
    width: { xs: "100%", md: "80%" },
  },

  title: {
    color: "#94b405",
    fontWeight: "700",
  },
  from: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#94b405",
    margin: "10px 0",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
      margin: "8px 0",
      border: "2px solid #94b405",
      color: "#94b405",
    },
  },
};

const billingTable = {
  totalAmount: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#94b405",
    border: "none",
  },
  main: {
    width: { xs: "initial", md: "40%" },
    padding: "10px",
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  checkout: { color: "#94b405", borderColor: "#94b405" },
  container: { width: "100%" },
  header: { fontWeight: "bold", fontSize: "18px", border: "none" },
  cell: {
    border: "none",
    color: "#94b405",
  },
  titleCell: {
    border: "none",
    color: "#94b405",
    fontWeight: 600,
  },
  totalCell: {
    border: "none",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export { billingTable, billingFromStyles };

export default styles;
