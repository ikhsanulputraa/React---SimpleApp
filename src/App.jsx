import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await res.json();
                setUsers(data);
                setFiltered(data);
            } catch (err) {
                console.error("Gagal memuat data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const result = users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(result);
    }, [search, users]);

    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "40px auto",
                fontFamily: "Segoe UI, sans-serif",
            }}
        >
            <h1 style={{ textAlign: "center", color: "#333" }}>
                Daftar Pengguna
            </h1>

            <input
                type="text"
                placeholder="Cari nama pengguna..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "12px",
                    width: "100%",
                    marginBottom: "20px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                }}
            />
            {selectedUser && <UserDetail user={selectedUser} />}
            {loading ? (
                <p style={{ textAlign: "center" }}>
                    Memuat data pengguna...
                </p>
            ) : (
                <UserList users={filtered} onSelectUser={setSelectedUser} />
            )}

            
        </div>
    );
};

export default App;
