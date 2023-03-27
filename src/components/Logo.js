import Image from "next/image";

function Logo(props) {
  const { src, alt, width, height, style } = props;

  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} style={style} />
    </>
  );
}

export default Logo;
