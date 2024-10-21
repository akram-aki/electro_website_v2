const queries = {
  addUserQuery: `
    INSERT INTO admins (userName, password)
    VALUES ($1, $2)
  `,

  dupNameCheck: "SELECT * FROM admins WHERE userName = $1",
  addUserAccomodationQuery: `
    INSERT INTO events (title,subtitle,description,date,img,UserId)
    VALUES ($1,$2,$3,$4,$5,$6)
  `,
};
export default queries;
