import React from 'react';

const Blogs = () => {
  return (
      <div className="container">
          <div>
              <h3>Difference between Nodejs and Javascript</h3>
              <p>
                  JavaScript is high levelscripting language that is
                  object-oriented. It is utilized to make HTML web pages more
                  dynamic and interactive. It is basically used on the
                  client-side with HTML. On the other hand, Nodejs is JS runtime
                  environment that allows Javascript to run on the
                  server-side.Nodejs has a lot of modules which used in web
                  development. JavaScript runs any engine like JavaScript core,
                  Spider Monkey, V8. On the other jand Nodejs support V8 engine
                  of google chrome.
              </p>
          </div>
          <div>
              <h3>Difference between Sql and nosql</h3>
              <p>
                  SQL databases are called as Relational Databases which defines
                  and manipulates data based structured query language. On the
                  other hand, NoSQL database are called as non-relational has
                  dynamic schema for unstructured data. A NoSQL database
                  provides flexibility in storing data as it allows to create
                  documents without having defined structure. SQL databases are
                  table-based and does not give this type of flexibility. NoSQL
                  databases are either key-value pairs, document-based, graph
                  databases or wide-column stores. Some examples of SQL
                  databases are PostgreSQL, MySQL, Oracle and Microsoft SQL
                  Server etc. NoSQL database examples include Redis, RavenDB
                  Cassandra, MongoDB, BigTable, HBase, Neo4j and CouchDB.
              </p>
          </div>
          <div>
              <h3>What is the Purpose of jwt and how does it work?</h3>
              <p>
                  A JWT is an encoded, URL-safe string to verify the owner of
                  some JSON data. JWT, or JSON Web Token, is used to share
                  security information between two parties — a client and a
                  server.JWTs can be broken down into three parts: header,
                  payload, and signature. User requests authorization to the
                  authorization server.In authentication, when the user
                  successfully logs in , a JSON Web Token will be created. The
                  application uses the access token to access a protected
                  resource.
              </p>
          </div>
      </div>
  );
};

export default Blogs;