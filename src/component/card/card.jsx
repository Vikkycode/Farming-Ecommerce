import { useState } from "react";
import { useDispatch } from "react-redux";

//Component
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft, } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

//Reducers
import { addToCart } from "../../reducers/cart/cartSlice";

//Styles
import { styles } from "./utils";
import { setSnackBar } from "../../reducers/snackBar/snackBar";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const CardComponent = ({ title, subTitle, price, image, id }) => {
  //States
  const [dropState, setDropState] = useState(false);

  //Helpers
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleHover = () => setDropState(!dropState);
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {dropState && (
        <div style={styles.dropShadow}>
          <Button
            variant="contained"
            style={styles.addToCart}
            onClick={() => {
              dispatch(addToCart({ id, title, price, image, count: 1 }));
              dispatch(setSnackBar({ message: "Product added successfully" }));
            }}
            component="div"
          >
            Add to cart
          </Button>
          <div
            id="action-list"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: "10px",
            }}
          >
            {/* <Button
              variant="text"
              sx={{ color: "#fff", fontSize: "11px" }}
              startIcon={<FontAwesomeIcon icon={faShareNodes} />}
            >
              share
            </Button> */}
            <Button
              variant="text"
              sx={{ color: "#fff", fontSize: "11px" }}
              startIcon={<FontAwesomeIcon icon={faRightLeft} />}
            >
              compare
            </Button>
            {/* <Button
              variant="text"
              sx={{ color: "#fff", fontSize: "11px" }}
              startIcon={<FontAwesomeIcon icon={faHeart} />}
            >
              like
            </Button> */}
          </div>
          <Button
            variant="contained"
            style={styles.addToCart}
            onClick={() => {
              navigate(`${ROUTES.HOME}${ROUTES.PRODUCT}/${id}`);
            }}
            component="div"
          >
            Show Details
          </Button>
        </div>
      )}
      <Card sx={{ width: 300, margin: "10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={image}
            sx={{ objectFit: "fill" }}
            alt="green iguana"
          />
          <CardContent sx={{ backgroundColor: "#F4F5F7" }}>
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              {title}
            </Typography>
            <Typography sx={styles.subTitle} variant="caption">
              {subTitle}
            </Typography>
            <Typography sx={{ fontWeight: "700" }} variant="subtitle1">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default CardComponent;
