import { useState } from "react";

function Image(props) {
  const [reactimg, setReactImg] = useState(
    "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"
  );
  return (
    <div>
      <h2>Image Component</h2>
      <img alt=''src={reactimg} width={500} height={300} />
      <br />
      <button
        onClick={() => {
          setReactImg(
            "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          );
        }}
      >
        nature
      </button>
      <button
        onClick={() => {
          setReactImg(
            "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
          );
        }}
      >
        taj
      </button>
    </div>
  );
}

export default Image;
