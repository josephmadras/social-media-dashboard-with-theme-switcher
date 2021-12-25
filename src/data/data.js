import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const data = [
  {
    id: 1,
    username: "@nathanf",
    users: { number: 1987, type: "followers" },
    days: 12,
    icon: <FaFacebookSquare style={{ color: "hsl(208, 92%, 53%)" }} />,
    socialBgColor: "",
    topBorder: "hsl(208, 92%, 53%)",
    arrow: <MdArrowDropUp />,
  },
  {
    id: 2,
    username: "@nathanf",
    users: { number: 1044, type: "followers" },
    days: 99,
    icon: <FaTwitter style={{ color: "hsl(203, 89%, 53%)" }} />,
    socialBgColor: "",
    topBorder: "hsl(203, 89%, 53%)",
    arrow: <MdArrowDropUp />,
  },
  {
    id: 3,
    username: "@realnathanf",
    users: { number: "11k", type: "followers" },
    days: 1099,
    icon: (
      <FaInstagram
        style={{
          color: "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        }}
      />
    ),
    socialBgColor: "",
    topBorder: "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    arrow: <MdArrowDropUp />,
  },
  {
    id: 4,
    username: "Nathan F.",
    users: { number: 8239, type: "subscribers" },
    days: 144,
    icon: (
      <FaYoutube
        style={{
          borderRadius: "50%",
          color: "#fff",
        }}
      />
    ),
    socialBgColor: "hsl(348, 97%, 39%)",
    topBorder: "hsl(348, 97%, 39%)",
    arrow: <MdArrowDropDown />,
  },
];