const questions = [
  {
    question: "At what stage is your project now?",
    description:
      "This is to understand whether the UX/UI part should be included in the quote.",
    options: ["Still an idea", "I have a ready design"],
    multiple: false,
  },
  {
    question: "What platforms will your app support?",
    description:
      "This is to understand how many mobile engineers your project needs.",
    options: ["iOS", "Android", "Both"],
    multiple: false,   
  },
  {
    question: "What about tablets? Will the app support them?",
    description: "Do you plan to cover tablet users?",
    options: ["Yes", "No"],
    multiple: false,
  },
  {
    question: "Let's suppose the number of screens in your app",
    description:
      "You can pick the answer offhand. This is to understand the number of standard UI screens.",
    options: [
      "Small: 1-8 screens",
      "Medium: 9-12 screens",
      "Large: 12+ screens",
    ],
    multiple: false,
  },
  {
    question: "Will the app have user authentication?",
    description:
      "Choose “Yes” if you want your users to have accounts and log in to your app.",
    options: ["Yes", "No"],
    multiple: false,
  },
  {
    question: "What type of authentication would you like to have?",
    description:
      "It's a multiple-choice question. Please choose all authentification methods you would like your app to have.",
    options: ["Email or Phone", "Apple", "Facebook", "Google", "Face ID"],
    multiple: true,
  },
  {
    question: "Will users make payments via your app?",
    description:
      "Choose “Yes” if you want your app users to buy subscriptions, goods, or services.",
    options: ["Yes", "No"],
    multiple: false,
  },
  {
    question: "Choose modules that your app needs:",
    description:
      "It's a multiple-choice question. Please choose all modules you would like your app to have.",
    options: [
      "Newsfeed",
      "Messaging",
      "Geolocation",
      "UserProfiles",
      "Media uploading & downloading",
      "Shopping Card & Orders history",
      "Voice/Video calls",
    ],
    multiple: true,
  },
  {
    question: "Choose additional features for your app:",
    description:
      "It's a multiple-choice question. Please choose all additional features you would like your app to have.",
    options: [
      "Social Media Sharing",
      "Basic CMS for content uploading",
      "Multi-language support",
      "Camera (QR code scanning)",
      "Bluetooth connectivity",
      "Push notifications",
      "Video Player",
      "Analytics",
      "Music player",
      "Ads",
    ],
    multiple: true,
  },
];

export default questions