// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-will-serve-as-a-student-volunteer-and-present-our-work-reshaping-craft-learning-insights-from-designing-an-ai-augmented-mr-system-for-wheel-throwing-at-dis-25-this-might-mark-the-end-or-perhaps-the-beginning-of-my-research-journey",
          title: 'I will serve as a Student Volunteer and present our work, “Reshaping Craft...',
          description: "",
          section: "News",},{id: "news-our-work-jump-stop-jump-again-exploring-ai-supported-physical-activity-play-at-home-with-parents-and-children-has-been-accepted-to-chi-play-work-in-progress-2025",
          title: 'Our work “Jump, Stop, Jump Again: Exploring AI-Supported Physical Activity Play at Home...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
