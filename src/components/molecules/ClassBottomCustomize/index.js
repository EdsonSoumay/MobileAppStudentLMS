import React from 'react';
import { View, StyleSheet} from 'react-native';
import { ClassBottomTabItem } from '../..';

// import { colors } from '../../../utils/colors';
// import { connect } from 'react-redux';
// import { deleteParameterFilter } from '../../../actions/ProdukAction';

const ClassBottomTabCustomize = ({ state, descriptors, navigation, dispatch }) => {

  // console.log("screen option:",props)

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }

          if(route.name !== "Home") {
            // dispatch(deleteParameterFilter())
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
         <ClassBottomTabItem
         key={index}
         label={label}
         isFocused={isFocused}
         onLongPress={onLongPress}
         onPress={onPress}/>
        );
      })}
    </View>
  );
}

// export default connect()(BottomNavigatorCS)
export default ClassBottomTabCustomize

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: colors.kedelapan,
    backgroundColor:'#FFFFFF',
    paddingVertical: 13,
    paddingHorizontal: 36,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor:'#A7A7A7',
  }
})


