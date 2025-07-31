import React from "react";

const UserDetail = ({ user }) => {
    const { name, email, phone, website, address, company } = user;
    return (
        <div
            style={{
                marginTop: "30px",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#f1f5f9",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ marginBottom: "10px" }}>Detail Pengguna</h2>
            <p>
                <strong>Nama:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <p>
                <strong>Telepon:</strong> {phone}
            </p>
            <p>
                <strong>Website:</strong>{" "}
                <a href={`http://${website}`} target="_blank" rel="noreferrer">
                    {website}
                </a>
            </p>
            <p>
                <strong>Alamat:</strong> {address.street}, {address.suite},{" "}
                {address.city}
            </p>
            <p>
                <strong>Perusahaan:</strong> {company.name}
            </p>
        </div>
    );
};

export default UserDetail;
