import { TouchableOpacity, Text } from "react-native";
import { style } from "./ButtonAdd.style";

export function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.btn}>
      <Text style={style.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
}
