import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Thumbnail(props) {
  const thumbnailsRef = React.useRef(null);

  {
    props.slidesImage.map((i, index) => (
      <Lightbox
        key={index}
        plugins={[Thumbnails]}
        open={props.show}
        close={props.close}
        slides={i}
      />
    ));
  }
}
