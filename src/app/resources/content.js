import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gaucho",
  lastName: "Sports Analytics",
  get name() {
    return (
      <>
        {this.firstName} <span style={{ color: "gold" }}>{this.lastName}</span>
      </>
    );
  },
  role: (
    <>
      Bridging the gap between tech and sports at{" "}
      <span style={{ color: "gold" }}>UCSB</span>
    </>
  ),
  avatar: "/images/logo.png",
  location: "UCSB",
  languages: [],
};


const newsletter = {
  display: false,
  title: <>Subscribe to Gaucho Analytics Updates</>,
  description: (
    <>
      Stay updated with the latest sports analytics insights, game statistics, and UCSB Athletics performance metrics.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gauchosportsclub",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/gaucho-sports-analytics",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/ZghKwtWKZD",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:gauchosportsanayltics@gmail.com",
  },
];

const home = {
  label: "Home",
  title: "Gaucho Sports Analytics",
  description: "UCSB's first ever sports analytics club",
  headline: <>UCSB's first ever sports analytics club</>,
  subline: (
    <>
      UCSB's first ever sports analytics club
    </>
  ),
};

const about = {
  label: "About",
  title: "About Us",
  description: "Discover how Gaucho Sports Analytics is transforming UCSB Athletics",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/gaucho-analytics",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        We unite tech and sports enthusiasts to innovate both fields collaboratively! Through collaborative projects, workshops, and networking opportunities, we seek to foster a deeper understanding of sports analytics, encourage innovation, and develop skills that prepare members for future careers in industry.

      </>
    ),
  },
  work: {
    display: true,
    title: "What We Do",
    experiences: [
      {
        company: "Workshops",
        // timeframe: "Core Feature",
        role: "Learn ML and Data Science through sports datasets",
        achievements: [
          <>
            Learn the fundamentals of industry-relevant data science/analytics and machine learning skills with real-world sports data.
          </>,
          <>
            Become familiar with data analysis tools like Numpy, Pandas, MatplotLib, and Seaborn, as well as machine learning frameworks like PyTorch and Scikit-Learn.
          </>,
        ],
        images: [
          // {
          //   src: "/images/python-logo-1.png",
          //   alt: "Analytics Dashboard",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/python-logo-1.png",
          //   alt: "Analytics Dashboard",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Projects",
        // timeframe: "Advanced Analytics",
        role: "Do real-world technical projects with real sports teams",
        achievements: [
          <>
            Take part in unique predictive analysis, modelling, and visualization projects while solving complex problems faced by sports teams.
          </>,
          <>
            Currently working with UCSB Division 1 Basketball and Baseball teams.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
  },
  technical: {
    display: false,
    title: "Technical Capabilities",
    skills: [
      {
        title: "Real-time Processing",
        description: <>Advanced data processing pipeline handling live game statistics and player tracking data.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Real-time Processing",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Data Visualization",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning",
        description: <>Sophisticated ML models for player performance prediction and strategy optimization.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Machine Learning Models",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Sports Analytics Insights",
  description: "Latest updates and insights from Gaucho Sports Analytics",
};

const work = {
  label: "Work",
  title: "Our Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
