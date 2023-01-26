import { Icon } from "@chakra-ui/react";
import IconProps from "./IconProps";

export default function Cart({ size, color }: IconProps) {
  return (
    <Icon width={size} height={size} color={color} viewBox="0 0 1200 1200">
      <g fill="currentColor">
        <path d="m1132.8 328.8c-8.3984-13.199-22.801-22.801-38.398-22.801l-758.4-34.801-26.398-103.2c-6-21.602-24-36-46.801-36h-154.8c-26.398 0-48 21.602-48 48s21.602 48 48 48h117.6l132 513.6-32.402 134.4c-3.6016 14.398 0 30 8.3984 40.801 9.6016 12 22.801 18 37.199 18h588c26.398 0 48-21.602 48-48 0-26.398-21.602-48-48-48h-525.6l13.199-55.199 480-22.801c18-1.1992 33.602-12 40.801-27.602l168-360c7.1992-13.199 6-30-2.3984-44.398zm-240 338.4-447.6 20.398-80.398-319.2 654 30z" />
        <path d="m492 1050c0 49.707-40.293 90-90 90s-90-40.293-90-90 40.293-90 90-90 90 40.293 90 90" />
        <path d="m1032 1050c0 49.707-40.293 90-90 90s-90-40.293-90-90 40.293-90 90-90 90 40.293 90 90" />{" "}
      </g>
    </Icon>
  );
}
