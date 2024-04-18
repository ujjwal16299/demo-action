import React from "react"
import { ZVNavbar } from "@zversal-ecom/zv-navbar-package"
import { navigate } from "gatsby"

const configs = {
    type: "navbar_1",
    navbarType: "default", //
    logoOrder: "1", // 1 ,2 or 3  according to  menuItemsOrder , profileOrder and buttonOrder
    menuItemsOrder: "2",
    profileOrder: "3",
    buttonOrder: "4",
    mobileLogoOrder: "2", // 1 ,2 or 3  according to  mobileMenuItemsOrder and mobileProfileOrder
    mobileMenuItemsOrder: "1",
    mobileProfileOrder: "3",
    sidebarMenu: "right", // top , right or left
    hamburgerMenu: false,
    data: {
      logo: {
        icon: "/assets/logo.png",
        logoCallback: () => "/",
      },
      cart: {
        disable: false,
        icon: "/assets/cart.png",
        buttonCallback: () => "/",
      },
      icons: {
        hamburger: "/assets/Hamburger_icon.svg.png",
      },
      profile: {
        disable: true,
        icon: "/assets/profile.png",
        menuItems: [
          {
            title: "Login/SignUp",
            callback: () => console.log("test"),
          },
        ],
      },
      mobileSocialIcon: {
        mailIcon: "/assets/mail.png", //provide  mail icon path
        mail: "test@.com",  // mail id for sidebar
        customIconStyling: "flex justify-center items-center h-[30px] w-[30px] border border-black rounded-full relative",// custom styling for the social icon
  
        socialIcon: [  //Array of objects representing menu items in the mobileSocialIcon .
          {
            icon: "/assets/facebook.png",
          },
          {
            icon: "/assets/facebook.png",
          },
          {
            icon: "/assets/facebook.png",
          },
          {
            icon: "/assets/facebook.png",
          }
        ],
      },
       button: {
        disable: false,    // Disables the button section if set to true. 
        menuItems: [  //Array of objects representing no of buttons.
          {
            title: "Let's Connect", //Title of the menu item.
            callback: () => console.log("test"), // Callback function for clicking on the menu item.
            customStyle:  "flex px-2 py-2 border border-[#000] text-base font-semibold", // custom styling for each menu items
            fixedButtonScrollStyle:  "text-white bg-red-900"// create custom styling for button
          },
        ],
      },
      currentPage: "", // string
      menuItems: [
        {
          title: "Home",
          dropdown: false,
          dropdownItems: [
            {
              title: "dropitem1",
              callback: () => {
                navigate("/");
              },
            },
            {
              title: "dropitem2",
              callback: () => {
                navigate("/");
              },
            },
          ],
          callback: () => {
            navigate("/");
          },
        },
        {
          title: "About",
          callback: () => {
           navigate("/about");
          },
        },
        {
          title: "Greeting",
          callback: () => {
            navigate("/hello");
          },
        },
        {
          title: "Blog",
          callback: () => {
            navigate("/blog");
          },
        },
      ],
    },
  };

  const styleSheet = {
    margin:"left"
  }
const NavbarComponent = () => {
    return (
        <div>
            <ZVNavbar configs={configs}  styleSheet={styleSheet}  />
        </div>
    )
}

export default NavbarComponent