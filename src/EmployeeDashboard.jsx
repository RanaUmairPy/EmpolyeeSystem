import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch employee data (tasks and announcements) after login
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/employee/dashboard/");
        setTasks(response.data.tasks || []);
        setAnnouncements(response.data.announcements || []);
      } catch (err) {
        setError("Failed to load employee data.");
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Dashboard</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <section>
        <h2>Tasks</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.title}</strong>: {task.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available.</p>
        )}
      </section>

      <section>
        <h2>Announcements</h2>
        {announcements.length > 0 ? (
          <ul>
            {announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        ) : (
          <p>No announcements available.</p>
        )}
      </section>

      <section>
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> Employee Name <br />
          <strong>Email:</strong> employee@example.com <br />
          {/* Replace with real data */}
        </p>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
