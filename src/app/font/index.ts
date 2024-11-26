import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../../../public/fonts/TT Bluescreens Trial Thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial ExtraLight.ttf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial Bold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial ExtraBold.ttf",
      weight: "800",
      style: "bold",
    },
    {
      path: "../../../public/fonts/TT Bluescreens Trial Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-my-font",
});
