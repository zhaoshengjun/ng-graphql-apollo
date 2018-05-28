var coursesData = [
  {
    id: "1",
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead",
    description: "Learn Node.js by building a realworld application",
    topic: "Node.js",
    url: "http://test.com/nodejs-course",
    voteCount: 0
  },
  {
    id: "2",
    title: "Node.js, Express MongoDB Dev to Deployment",
    author: "Brad Traversy",
    description:
      "Learn by example building and deploying realworld applications",
    topic: "Node.js",
    url: "http://test.com/nodejs-dev-deploy",
    voteCount: 0
  }
];
const resolvers = {
  Query: {
    allCourses: (root, { searchTerm }) => {
      return coursesData;
    },
    course: (root, { id }) => {
      return coursesData.filter(course => course.id === id)[0];
    }
  },
  Mutation: {
    upvote: (root, { id }) => {
      const course = coursesData.filter(course => course.id === id)[0];
      course.upvote++;
      return course;
    },
    downvote: (root, { id }) => {
      const course = coursesData.filter(course => course.id === id)[0];
      course.upvote--;
      return course;
    },
    addCourse: (root, { title, author, description, topic, url }) => {
      return null;
    }
  }
};
