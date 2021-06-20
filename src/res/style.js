import { StyleSheet } from "react-native";
import unit from "./unit";

const styles = StyleSheet.create({
  // utility styles
  m0: { margin: 0 },
  mt0: { marginTop: 0 },
  mb0: { marginBottom: 0 },
  my0: { marginTop: 0, marginBottom: 0 },
  ml0: { marginLeft: 0 },
  mr0: { marginRight: 0 },
  mx0: { marginLeft: 0, marginRight: 0 },

  p0: { padding: 0 },
  pt0: { paddingTop: 0 },
  pb0: { paddingBottom: 0 },
  py0: { paddingTop: 0, paddingBottom: 0 },
  pl0: { paddingLeft: 0 },
  pr0: { paddingRight: 0 },
  px0: { paddingLeft: 0, paddingRight: 0 },
  pb1: {paddingBottom: 1},
  pb2: {paddingBottom: 2},
  pr2: {paddingRight: 2},
  pr3: {paddingRight: 3},
	container: {
		flex: 1,
		paddingHorizontal: unit.scale(16),
  },
  cancel: {
    position: "absolute",
    right: unit.scale(3),
    top: unit.scale(6),
    zIndex: 1,
  }
});

export default styles;
