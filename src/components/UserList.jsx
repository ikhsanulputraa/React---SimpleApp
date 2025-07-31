import React from "react";

const UserList = ({ users, onSelectUser }) => {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((user) => (
                <li
                    key={user.id}
                    onClick={() => onSelectUser(user)}
                    style={{
                        padding: "15px",
                        marginBottom: "10px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#eaeaea")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f9f9f9")
                    }
                >
                    <strong style={{ fontSize: "18px" }}>{user.name}</strong>{" "}
                    <br />
                    <span style={{ color: "#555" }}>{user.email}</span>
                </li>
            ))}
        </ul>
    );
};

export default UserList;
