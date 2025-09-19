import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from "react-native-vector-icons/Ionicons"


const CustomHeader = ({ title }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        {/* Left Section: Hamburger + Title */}
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuBtn}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
        </View>

        {/* Right Section: Profile Icon */}
        <TouchableOpacity onPress={() => alert("Profile clicked")} style={styles.profileBtn}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default CustomHeader

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#6200EE',
  },
  header: {
    height: 60,
    backgroundColor: '#6200EE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // left group & right button
    paddingHorizontal: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuBtn: {
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileBtn: {
    padding: 5,
  }
})