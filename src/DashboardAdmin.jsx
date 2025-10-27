import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUsersCog, FaTasks, FaChartLine } from 'react-icons/fa';

function DashboardAdmin() {
  return (
    <section className="content-area">
      <div className="summary-cards">
        <div className="card">
          <FaUserGraduate className="card-icon" style={{ color: '#007bff' }} />
          <div className="card-info"><strong>Total Mahasiswa Aktif</strong><span>563</span></div>
        </div>
        <div className="card">
          <FaChalkboardTeacher className="card-icon" style={{ color: '#28a745' }} />
          <div className="card-info"><strong>Total Dosen Aktif</strong><span>46</span></div>
        </div>
        <div className="card">
          <FaUsersCog className="card-icon" style={{ color: '#ffc107' }} />
          <div className="card-info"><strong>Total Admin</strong><span>2</span></div>
        </div>
      </div>
      <div className="content-row">
        <div className="content-widget">
          <h3><FaTasks /> Tugas Cepat (Quick Actions)</h3>
          <p>Ini adalah area untuk tombol-tombol manajemen admin.</p>
        </div>
        <div className="content-widget">
          <h3><FaChartLine /> Statistik Server</h3>
          <p>Area untuk menampilkan status sistem atau log aktivitas terbaru.</p>
        </div>
      </div>
    </section>
  );
}
export default DashboardAdmin;