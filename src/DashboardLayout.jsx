import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
// Impor ikon yang lebih lengkap
import { 
    FaHome, FaUser, FaBookOpen, FaPoll, FaCalendarAlt, FaMoneyBillWave, FaSignOutAlt, 
    FaTimes, FaBars, FaBell, FaTachometerAlt, FaUsersCog, FaUniversity, FaChalkboardTeacher,
    FaUserGraduate, FaCogs, FaUserTie, FaCalendarCheck, FaUsers
} from 'react-icons/fa';
import './DashboardLayout.css'; // Memuat CSS Eksternal untuk Layout

function DashboardLayout({ user, onLogout }) { 
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Pengamanan: Redirect jika user tidak login
    useEffect(() => {
        if (!user && location.pathname !== '/') {
            navigate('/');
        }
    }, [user, location.pathname, navigate]);

    // Tampilkan loading jika data user belum siap
    if (!user) {
        return <div style={{padding: '50px', textAlign: 'center'}}>Loading or Redirecting...</div>;
    }

    // --- VARIABEL DINAMIS ---
    const { role, name, details, greeting, logo, profilePic } = user;
    
    const profileName = name;
    const profileDetails = details;
    const headerTitle = greeting;
    const headerSubtitle = role === "Admin" ? "Halaman Manajemen Sistem." : "Senang melihat Anda kembali.";

    // Atur menu berdasarkan peran (role)
    let menuItems = [];
    if (role === 'Mahasiswa') {
        menuItems = [
            { text: 'Dashboard', icon: FaHome, path: '/mahasiswa' },
            { text: 'Profil Mahasiswa', icon: FaUser, path: '#' },
            { text: 'Kartu Rencana Studi', icon: FaBookOpen, path: '#' },
            { text: 'Kartu Hasil Studi', icon: FaPoll, path: '#' },
            { text: 'Jadwal Kuliah', icon: FaCalendarAlt, path: '#' },
            { text: 'Keuangan', icon: FaMoneyBillWave, path: '#' }
        ];
    } else if (role === 'Admin') {
         menuItems = [
            { text: 'Dashboard Admin', icon: FaTachometerAlt, path: '/admin' },
            { text: 'Manajemen User', icon: FaUsersCog, path: '#' },
            { text: 'Data Akademik', icon: FaUniversity, path: '#' },
            { text: 'Manajemen Dosen', icon: FaChalkboardTeacher, path: '#' },
            { text: 'Manajemen Mahasiswa', icon: FaUserGraduate, path: '#' },
            { text: 'Pengaturan Sistem', icon: FaCogs, path: '#' }
        ];
    } else if (role === 'Dosen') {
         menuItems = [
            { text: 'Dashboard Dosen', icon: FaHome, path: '/dosen' },
            { text: 'Profil Dosen', icon: FaUserTie, path: '#' },
            { text: 'Input Nilai', icon: FaCalendarCheck, path: '#' },
            { text: 'Bimbingan Akademik', icon: FaUsers, path: '#' },
            { text: 'Jadwal Mengajar', icon: FaCalendarAlt, path: '#' }
        ];
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarVisible ? 'sidebar-visible' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <img src={logo} alt="Logo" className="sidebar-logo" />
                    <button className="sidebar-close" onClick={() => setSidebarVisible(false)}>
                        <FaTimes />
                    </button>
                </div>
                
                <nav className="sidebar-nav">
                    {menuItems.map((item) => {
                        const IconComponent = item.icon; 
                        return (
                            <Link 
                                key={item.text} 
                                to={item.path} 
                                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => setSidebarVisible(false)} 
                            >
                                <IconComponent /> 
                                <span>{item.text}</span>
                            </Link>
                        );
                    })}
                    
                    {/* Link Logout memanggil fungsi onLogout */}
                    <Link to="/" onClick={onLogout} className="nav-item nav-logout">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </Link>
                </nav>
            </aside>

            {/* Overlay Mobile */}
            <div 
                className={`mobile-overlay ${isSidebarVisible ? 'visible' : ''}`} 
                onClick={() => setSidebarVisible(false)}
            ></div>

            {/* Konten Utama (Header + Outlet) */}
            <main className="main-content">
                <header className="header">
                    <button className="header-toggle" onClick={() => setSidebarVisible(true)}>
                        <FaBars />
                    </button>
                    <div className="header-title">
                        <h1>{headerTitle}</h1>
                        <p>{headerSubtitle}</p>
                    </div>
                    <div className="header-profile">
                        <FaBell /> 
                        <div className="profile-info">
                            <strong>{profileName}</strong>
                            {profileDetails.map(detail => <span key={detail}>{detail}</span>)}
                        </div>
                        <img src={profilePic} alt="Foto Profil" className="profile-pic" />
                    </div>
                </header>

                {/* Tempat konten dashboard spesifik akan dirender */}
                <Outlet /> 
            </main>
        </div>
    );
}

export default DashboardLayout;