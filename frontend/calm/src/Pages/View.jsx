import React, { useState, useEffect } from "react";
import "./View.css";
import { useNavigate } from "react-router-dom";

const View = () => {
  const nav = useNavigate();

  const returnToHome = () => {
    nav("/");
  };

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/database")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="viewBody">
      <header>
        <h1>View User Page</h1>
      </header>

      <main className="viewUser">
        <p style={{ fontSize: "20px" }}>Hello, User001</p>
        <button
          onClick={returnToHome}
          style={{ backgroundColor: "Red" }}>
          Return
        </button>
        <section className="databaseSection">
          <h2>Database Records</h2>

          <div className="recordsContainer">
            {customers.map((customer) => (
              <div
                key={customer.customer_id}
                className="recordCard">
                <p>
                  <strong>ID:</strong> {customer.customer_id}
                </p>
                <p>
                  <strong>Name:</strong> {customer.First_name}{" "}
                  {customer.Last_name}
                </p>
                <p>
                  <strong>Email:</strong> {customer.Email}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default View;
