import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Impor Halaman dan Layout
import LoginPage from './LoginPage';
import DashboardLayout from './DashboardLayout';
import DashboardMahasiswa from './DashboardMahasiswa';
import DashboardDosen from './DashboardDosen';
import DashboardAdmin from './DashboardAdmin';

// Data Profil Statis untuk semua peran
const userData = {
    mahasiswa: {
        role: "Mahasiswa",
        name: "Steven Ciam, S.Kom., M.Kom",
        details: ["NIM. 2544000", "Class. TI A 25", "Merbabu Malam"],
        greeting: "Selamat Datang, Steven Ciam, S.Kom., M.Kom",
        logo: "/Logo TIMEElearning.png",
        profilePic: "/82.png"
    },
    admin: {
        role: "Admin",
        name: "Administrator",
        details: ["Username: admin", "Role: Super Admin"],
        greeting: "Selamat Datang, Admin Portal",
        logo: "/Logo TIMEElearning.png",
        profilePic: "/82.png" // Ganti jika punya foto profil admin
    },
    dosen: {
        role: "Dosen",
        name: "Budi Santoso, M.TI", // Contoh nama dosen
        details: ["NIDN. 012345678", "Dosen Tetap"],
        greeting: "Selamat Datang, Budi Santoso, M.TI",
        logo: "/Logo TIMEElearning.png",
        profilePic: "/82.png" // Ganti jika punya foto profil dosen default
    }
};

function App() {
    // State untuk menyimpan data pengguna yang login
    const [user, setUser] = useState(null); 
    
    // Fungsi yang akan dipanggil oleh LoginPage saat login berhasil
    const handleLogin = (role) => {
        setUser(userData[role]); // Simpan data user sesuai role
    };

    // Fungsi untuk logout (akan dipanggil oleh DashboardLayout)
    const handleLogout = () => {
        setUser(null); // Hapus data user
        // Navigasi ke halaman login ditangani oleh Link di DashboardLayout
    };

    return (
        <Routes>
            {/* Rute Halaman Login */}
            {/* Kirim fungsi handleLogin sebagai prop 'onLogin' */}
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} /> 
            
            {/* Rute untuk semua halaman di dalam Dashboard */}
            {/* Kirim data 'user' dan fungsi 'onLogout' ke Layout */}
            <Route element={<DashboardLayout user={user} onLogout={handleLogout} />}> 
                {/* Rute anak: halaman spesifik akan dirender di <Outlet> */}
                <Route path="/mahasiswa" element={<DashboardMahasiswa />} />
                <Route path="/dosen" element={<DashboardDosen />} />
                <Route path="/admin" element={<DashboardAdmin />} />
            </Route>
            
        </Routes>
    );
}

export default App;