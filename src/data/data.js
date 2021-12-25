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
    icon: <FaFacebookSquare />,
    arrow: <MdArrowDropUp />,
  },
  {
    id: 2,
    username: "@nathanf",
    users: { number: 1044, type: "followers" },
    days: 99,
    icon: <FaTwitter />,
    arrow: <MdArrowDropUp />,
  },
  {
    id: 3,
    username: "@realnathanf",
    users: { number: "11k", type: "followers" },
    days: 1099,
    icon: <FaInstagram />,
    arrow: <MdArrowDropUp />,
  },
  {
    id: 4,
    username: "Nathan F.",
    users: { number: 8239, type: "subscribers" },
    days: 144,
    icon: <FaYoutube />,
    arrow: <MdArrowDropDown />,
  },
];
