import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Hello!",
		invitation: "Will you go on a date with me this week? 👉👈🥺",
		yesText: "Yes",
		noText: "No",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"No" is not really an option😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "See you this week 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
