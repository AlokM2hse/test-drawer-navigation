// CustomDrawer.js
import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Ionicons from "react-native-vector-icons/Ionicons"
import { menuData } from './menuData'

const CustomDrawer = ({ navigation }) => {
  const [openMenu, setOpenMenu] = useState(null)
  const animatedHeight = useRef(new Animated.Value(0)).current

  const toggleMenu = (label, childrenCount) => {
    if (openMenu === label) {
      // Collapse
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setOpenMenu(null))
    } else {
      setOpenMenu(label)
      // Expand
      Animated.timing(animatedHeight, {
        toValue: childrenCount * 35, // each submenu item ~45px
        duration: 300,
        useNativeDriver: false,
      }).start()
    }
  }

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        {menuData.map((item, index) => {
          const isOpen = openMenu === item.label
          return (
            <View key={index}>
              {/* Parent item */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() =>
                  item.children
                    ? toggleMenu(item.label, item.children.length)
                    : navigation.navigate(item.screen)
                }
              >
                <Ionicons name={item.icon} size={20} color="#333" style={styles.icon} />
                <Text style={styles.label}>{item.label}</Text>
                {item.children && (
                  <Ionicons
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={18}
                    color="#333"
                  />
                )}
              </TouchableOpacity>

              {/* Submenu with animation */}
              {item.children && (
                <Animated.View
                  style={[
                    styles.subMenu,
                    {
                      height: isOpen ? animatedHeight : 0,
                      overflow: 'hidden',
                    },
                  ]}
                >
                  {item.children.map((sub, subIndex) => (
                    <TouchableOpacity
                      key={subIndex}
                      style={styles.subMenuItem}
                      onPress={() => navigation.navigate(sub.screen)}
                    >
                      <Ionicons name={sub.icon} size={18} color="#555" style={styles.icon} />
                      <Text style={styles.subLabel}>{sub.label}</Text>
                    </TouchableOpacity>
                  ))}
                </Animated.View>
              )}
            </View>
          )
        })}
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  subMenu: {
    paddingLeft: 30,
  },
  subMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  subLabel: {
    fontSize: 14,
    color: "#555",
  },
})
