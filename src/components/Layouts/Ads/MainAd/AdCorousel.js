import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sliderImgWeb: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  },
  sliderImgPhone: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
  },
  cor: {},
}));

const AdCorousel = ({ imagesList, onHandleClose }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <AliceCarousel infinite>
        {imagesList && !isMobile
          ? imagesList.map((imageObject) => (
              <div key={imageObject.name} className={classes.cor}>
                <img
                  onClick={(e) => onHandleClose(true)}
                  style={{
                    margin: "auto",
                    display: "block",
                    marginTop: "1%",

                    maxWidth:
                      imageObject.width >= 2 * imageObject.height
                        ? "85%"
                        : imageObject.width > 1.5 * imageObject.height
                        ? "70%"
                        : imageObject.width > imageObject.height
                        ? "60%"
                        : imageObject.height >= 2 * imageObject.width
                        ? "25%"
                        : imageObject.height >= 1.5 * imageObject.width
                        ? "25%"
                        : "20%",
                  }}
                  className="center-block"
                  className={classes.sliderImgWeb}
                  alt={imageObject.name}
                  src={imageObject.url}
                />
              </div>
            ))
          : imagesList.map((imageObject) => (
              <div key={imageObject.name}>
                <img
                  onClick={(e) => onHandleClose(true)}
                  alt={imageObject.name}
                  style={{
                    margin: "auto",
                    display: "block",

                    marginTop:
                      imageObject.width >= 2.5 * imageObject.height
                        ? "13%"
                        : imageObject.width >= 2 * imageObject.height
                        ? "12%"
                        : imageObject.width > 1.5 * imageObject.height
                        ? "10%"
                        : imageObject.width > imageObject.height
                        ? "5%"
                        : "1%",

                    maxWidth:
                      imageObject.width >= 2 * imageObject.height
                        ? "90%"
                        : imageObject.width > 1.5 * imageObject.height
                        ? "80%"
                        : imageObject.width > imageObject.height
                        ? "75%"
                        : imageObject.height >= 2 * imageObject.width
                        ? "30%"
                        : imageObject.height >= 1.5 * imageObject.width
                        ? "35%"
                        : "45%",
                  }}
                  className="center-block"
                  className={classes.sliderImgPhone}
                  src={imageObject.url}
                />
              </div>
            ))}
      </AliceCarousel>
    </>
  );
};

export default AdCorousel;
