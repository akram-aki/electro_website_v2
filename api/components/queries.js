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
  searchEventQuery:
    "SELECT title, TS_RANK(TO_TSVECTOR(title), WEBSEARCH_TO_TSQUERY($1)) AS rank FROM events WHERE TO_TSVECTOR(title) @@ WEBSEARCH_TO_TSQUERY($2)  ORDER BY rank DESC LIMIT 3",
  deleteEventQuery: "DELETE FROM events WHERE title = $1",
  deleteEventQuery: "DELETE FROM projects WHERE title = $1",
  searchProjectQuery:
    "SELECT title, TS_RANK(TO_TSVECTOR(title), WEBSEARCH_TO_TSQUERY($1)) AS rank FROM projects WHERE TO_TSVECTOR(title) @@ WEBSEARCH_TO_TSQUERY($2)  ORDER BY rank DESC LIMIT 3",
};

export default queries;

// "SELECT title,TS_RANK(TO_TSVECTOR(title),WEBSEARCH_TO_TSQUERY($1)) AS rank FROM events WHERE TO_TSVECTOR(title) @@ WEBSEARCH_TO_TSQUERY($2) ORDER BY rank DESC",
