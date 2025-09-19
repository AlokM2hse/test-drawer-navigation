// menuData.js
import Ionicons from "react-native-vector-icons/Ionicons"

export const menuData = [
  {
    label: "Dashboard",
    icon: "home-outline",
    screen: "Main"
  },
  {
    label: "Courses",
    icon: "book-outline",
    children: [
      { label: "Add Course", screen: "addCourse", icon: "add-circle-outline" },
      { label: "Course List", screen: "Course", icon: "list-outline" },
    ]
  },
  {
    label: "Menu Item 1",
    icon: "folder-outline",
    children: [
      { label: "Sub Menu 1", screen: "sub-menu1", icon: "ellipse-outline" },
      { label: "Sub Menu 2", screen: "sub-menu2", icon: "ellipse-outline" },
      { label: "Sub Menu 3", screen: "sub-menu3", icon: "ellipse-outline" },
    ]
  },
  {
    label: "Menu Item 2",
    icon: "folder-outline",
    children: [
      { label: "Sub Item 2-1", screen: "sub-item2-1", icon: "ellipse-outline" },
      { label: "Sub Item 2-2", screen: "sub-item2-2", icon: "ellipse-outline" },
      { label: "Sub Item 2-3", screen: "sub-item2-3", icon: "ellipse-outline" },
      { label: "Sub Item 2-4", screen: "sub-item2-4", icon: "ellipse-outline" },
      { label: "Sub Item 2-5", screen: "sub-item2-5", icon: "ellipse-outline" },
      { label: "Sub Item 2-6", screen: "sub-item2-6", icon: "ellipse-outline" },
    ]
  },
  {
    label: "Menu Item 3",
    icon: "folder-outline",
    children: [
      { label: "Sub Menu 4", screen: "sub-menu4", icon: "ellipse-outline" }
    ]
  }
]
