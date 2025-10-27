import React from 'react';
import { FaBookReader, FaUsers, FaCalendarDay, FaBullhorn } from 'react-icons/fa';

function DashboardDosen() {
  return (
    <section className="content-area">
      <div className="summary-cards">
        <div className="card">
          <FaBookReader className="card-icon" style={{ color: '#007bff' }} />
          <div className="card-info"><strong>Total Mengajar</strong><span>3 Mata Kuliah</span></div>
        </div>
        <div className="card">
          <FaUsers className="card-icon" style={{ color: '#28a745' }} />
          <div className="card-info"><strong>Total Kelas</strong><span>11 Kelas</span></div>
        </div>
      </div>
      <div className="content-row">
        <div className="content-widget">
          <h3><FaCalendarDay /> Jadwal Mengajar Hari Ini</h3>
          <ul className="schedule-list">
            <li><strong>19:40 - 21:00</strong><p>Konsep Basis Data (TI-22104)</p><span>Ruang: Lab A 206</span></li>
          </ul>
        </div>
        <div className="content-widget">
          <h3><FaBullhorn /> Pengumuman Akademik</h3>
          <ul className="announcement-list">
            <li><strong>30 Okt 2025</strong><p>Batas akhir pengumpulan nilai Kuis.</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default DashboardDosen;