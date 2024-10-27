const queries = {
  addUserQuery: `
    INSERT INTO admins (userName, password)
    VALUES ($1, $2)
  `,

  dupNameCheck: "SELECT * FROM admins WHERE userName = $1",
  addEventQuery: `
    INSERT INTO events (title,subtitle,description,date,img,UserId)
    VALUES ($1,$2,$3,$4,$5,$6)
  `,
  fetchEventsQuery: "SELECT * FROM events",
  fetchProjectsQuery: "SELECT * FROM projects",
  addProjectQuery: `
    INSERT INTO projects (title,description,img,UserId)
    VALUES ($1,$2,$3,$4)
`,
};
export default queries;
