import Image from "next/image";

function Logo(props) {
  const { src, alt, width, height } = props;

  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  );
}

export default Logo;
