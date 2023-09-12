import { TouchableOpacity, Text, Image } from "react-native";
import checkImg from "../../assets/check.png";
import { style } from "./CardToDo.style";

export function CardToDo({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(todo)}
      style={style.card}
      onPress={() => onPress(todo)}
    >
      <Text
        style={[
          style.title,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={style.img} source={checkImg} />}
    </TouchableOpacity>
  );
}
