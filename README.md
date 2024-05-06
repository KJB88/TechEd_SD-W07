<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 07 Assessment :mortar_board:</h1>
    <p>
    🌴<a href="https://linktr.ee/kjb88">Linktree</a>🌴
    </p>
  <p>
    Repository for coursework for TechEd Software Development Bootcamp - Week 07
  </p>
  <a href="https://teched-sd-w07-client.onrender.com">Client</a>
    <a href="https://teched-sd-w07-server.onrender.com">Server</a>
</div>
<section>
  <h2>📋 Project Outline</h2>
  <p>Putting together the React client code, Node.js server code and Postgres database to build a full stack React application.</p>
  <p><b>Did not achieve all requirements and/or stretch goals. Difficulties around understanding React.js.</b> I was unable to fully implement routing. I did not implement dynamic routing. The framework for PUT/DEL is available on server and DB queries are present for UPDATE/DELETE. </p>
</section>
<section>
  <h2>🙍 User Stories</h2>
  <h3>As a User, I would like to...</h3>
  <ul>
    <li>...create new posts and add them to the page.</li>
    <li>...assign a category to each post.</li>
    <li>...view all posts added on the page and the category they're in.</li>
    <li>...view all posts in a specific category by visiting a dedicated page for that category (Stretch goal).</li>
    <li>...add new categories (Stretch goal).</li>
  </ul>
</section>
<section>
<h2>👷 Requirements</h2>
  <ul>
    <li>Design a database schema with relationships between tables - COMPLETE</li>
    <li>Create a new application with a React client and an Express server  - COMPLETE</li>
      <li>Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file  - COMPLETE</li>
      <li>Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.  - COMPLETE</li>
      <li> Create multiple pages using react-router-dom:  - NOT DONE
        <ul>
          <li>Create a home page. - NOT DONE</li>
          <li>Create a page to show all the posts and use fetch to call your server to get your data. - NOT DONE</li>
          <li>Create a page where users can create new posts using a form. - NOT DONE</li>
        </ul>
      </li>
  </ul>
</section>
<section>
<h2>🥅 Stretch Goals</h2>
  <ul>
    <li>Allow users to "Like" posts and increase the likes. - NOT DONE</li>
    <li>Allow users to DELETE posts. - NOT DONE</li>
    <li>Allow users to filter posts in a specific category. Use either a query string like /posts?category=education or a dedicated route for the categories at /posts/:categoryName. - NOT DONE</li>
  </ul>
</section>
<section>
  <h2>📁 Project Structure</h2>
Client / Server are split into their own folders.
</section>
<section>
  <h2>✔️ Implementation (of Requirements)</h2>
Client is separated into React Components, with some helper JS. CSS is in separate folder. Server is in its own folder.
</section>
