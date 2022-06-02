const projects = [
  {
    id: "1",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "2",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "inProgress",
  },
  {
    id: "3",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "inProgress",
  },
  {
    id: "4",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "5",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "6",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "7",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "8",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "9",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "inPogress",
  },
  {
    id: "11",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "inProgress",
  },
  {
    id: "10",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "inProgress",
  },
  {
    id: "16",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "Pending",
  },
  {
    id: "12",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "completed",
  },
  {
    id: "13",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "completed",
  },
  {
    id: "14",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "completed",
  },
  {
    id: "15",
    name: "Design Landing Page",
    content:
      "centuries ago, about also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "completed",
  },
  {
    id: "17",
    name: "Design Landing Page",
    content:
      "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "12 Days",
    deadline: "May 30",
    type: "current",
  },
];

export const getFunctionByType = (type) => {
  const project = projects.filter((x) => x.type === type);
  return project;
};

export const getFunctionById = async (id) => {
  const project = await projects.find((x) => x.id === id);
  return project;
};

export const getAll = () => {
  return projects;
};
