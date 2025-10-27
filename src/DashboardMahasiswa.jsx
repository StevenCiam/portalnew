import React from 'react';
import { FaStar, FaBook, FaCheckCircle, FaBullhorn, FaCalendarDay } from 'react-icons/fa';

function DashboardMahasiswa() {
  return (
    <section className="content-area">
      <div className="summary-cards">
        <div className="card">
          <FaStar className="card-icon" style={{ color: '#ffc107' }} />
          <div className="card-info"><strong>IPK Saat Ini</strong><span>3.79</span></div>
        </div>
        <div className="card">
          <FaBook className="card-icon" style={{ color: '#007bff' }} />
          <div className="card-info"><strong>Total SKS</strong><span>38 SKS</span></div>
        </div>
        <div className="card">
          <FaCheckCircle className="card-icon" style={{ color: '#28a745' }} />
          <div className="card-info"><strong>Status</strong><span>Aktif</span></div>
        </div>
      </div>
      <div className="content-row">
        <div className="content-widget">
          <h3><FaBullhorn /> Pengumuman Terbaru</h3>
          <ul className="announcement-list">
            <li><strong>11 Okt 2025</strong><p>AWS User Group Medan MeetUp X STMIK Time</p></li>
            <li><strong>25 Okt 2025</strong><p>Mulai Klub Akademik (Ms. Excel)</p></li>
            <li><strong>31 Okt 2025</strong><p>Halloween Event W/ TimeMultiSmart</p></li>
          </ul>
        </div>
        <div className="content-widget">
          <h3><FaCalendarDay /> Jadwal Hari Ini</h3>
          <ul className="schedule-list">
            <li><strong>13:00 - 15:00</strong><p>Klub Microsoft Excel</p><p className="dosen-name">With. Mr. Johanes Terang Kita Perangin Angin, S.Kom., M.TI</p><span>Ruang: Lab A 206</span></li>
            <li><strong>19:00 - 21:00</strong><p>Konsep Basis Data (TI 22104)</p><p className="dosen-name">With. Mr. Octara Pribadi, S.Kom., M.Kom</p><span>Ruang: A 302</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default DashboardMahasiswa;