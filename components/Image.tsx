import { Box } from "@theme-ui/components";
import NextImage, { ImageProps } from "next/image";

const Image = (props: ImageProps) => {
  return <Box as={NextImage} {...props}></Box>;
};

export default Image;
