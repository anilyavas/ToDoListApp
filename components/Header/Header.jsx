import { style } from "./Header.style";
import { Image, Text } from "react-native";
import logoImg from "../../assets/logo-2.png";

export function Header() {
  return (
    <>
      <Image style={style.img} source={logoImg} resizeMode="contain" />
      <Text style={style.subtitle}>You probably have something to do</Text>
    </>
  );
}
