import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const initialData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Burger",
    rows: 5,
    cols: 4,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Camera",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coffee",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
];
const ImageListComponent = ({ imageList }) => {
  const itemData = initialData.map((item, i) => ({
    ...item,
    img: imageList[i],
  }));

  return (
    <ImageList
      sx={{ width: { xs: "100%", md: 500 }, height: "fit-content" }}
      variant="quilted"
      cols={5}
      gap={25}
      rowHeight={70}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 100, item.rows, item.cols)}
            style={{ borderRadius: "10px", objectFit: "fill" }}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageListComponent;
