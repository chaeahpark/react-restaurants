import React from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.imageSrc = this.props.image;
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = this.imageSrc;
    const myRatio = 1.0; // h/w
    canvas.width = 290;
    canvas.height = canvas.width * myRatio;
    /*
    image.onload = () => {
      const width = canvas.width;
      let nWidth = image.naturalWidth;
      let nHeight = image.naturalHeight;
      let ratio = nWidth / nHeight;
      let height = width / ratio;
      canvas.height = height;
      context.drawImage(image, 0, 0, width, height);
    };
*/
    image.onload = () => {
      const width = canvas.width;

      let nWidth = image.naturalWidth;
      let nHeight = image.naturalHeight;
      let nRatio = nHeight / nWidth;
      // console.log("nRatio=" + nRatio);
      if (nRatio > myRatio) {
        let targetHeight = nWidth * myRatio;
        let cropSy = (nHeight - targetHeight) / 2;
        let cropSheight = nHeight - (nHeight - targetHeight);
        // console.log((cropSheight - cropSy) / nWidth);
        // console.log(canvas.height / canvas.width);

        context.drawImage(
          image,
          0,
          cropSy,
          nWidth,
          cropSheight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      } else {
        let targetWidth = nHeight / myRatio;
        let cropSx = (nWidth - targetWidth) / 2;
        let cropSwidth = nWidth - (nWidth - targetWidth);

        context.drawImage(
          image,
          cropSx,
          0,
          cropSwidth,
          nHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
        // console.log("b");
      }
    };
  }

  render() {
    return (
      <div className="image">
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default Canvas;
