import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export const iconSize = { fontSize: "20px" };
export const daily = [
  {
    title: "Page Views",
    stats: "87",
    socialIcon: (
      <FaFacebookSquare color="hsl(208, 92%, 53%)" style={iconSize} />
    ),
    evolution: "3%",
  },
  {
    title: "Likes",
    stats: "52",

    socialIcon: (
      <FaFacebookSquare color="hsl(208, 92%, 53%)" style={iconSize} />
    ),
    evolution: "2%",
    evolutionColor: "hsl(356, 69%, 56%)",
    arrow: <MdArrowDropDown />,
  },
  {
    title: "Likes",
    stats: "5462",
    socialIcon: <FaInstagram style={iconSize} />,
    evolution: "2257%",
  },
  {
    title: "Profile Views",
    stats: "52k",
    socialIcon: <FaInstagram style={iconSize} />,
    evolution: "1375%",
  },
  {
    title: "Retweets",
    stats: "117",
    socialIcon: <FaTwitter color="hsl(203, 89%, 53%)" style={iconSize} />,
    evolution: "303%",
  },
  {
    title: "Likes",
    stats: "507",
    socialIcon: <FaTwitter color="hsl(203, 89%, 53%)" style={iconSize} />,
    evolution: "553%",
  },
  {
    title: "Likes ",
    stats: "107",
    socialIcon: <FaYoutube color="hsl(348, 97%, 39%)" style={iconSize} />,
    evolution: "19%",
    evolutionColor: "hsl(356, 69%, 56%)",
    arrow: <MdArrowDropDown />,
  },
  {
    title: "Total Views",
    stats: "1407",
    socialIcon: <FaYoutube color="hsl(348, 97%, 39%)" style={iconSize} />,
    evolution: "12%",
    evolutionColor: "hsl(356, 69%, 56%)",
    arrow: <MdArrowDropDown />,
  },
];
