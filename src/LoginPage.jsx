import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSyncAlt } from 'react-icons/fa';

// Komponen untuk Style (CSS dimasukkan langsung ke sini)
const LoginStyles = () => (
  <style>{`
    :root {
        --primary-blue: #2a65a9;
        --light-blue: #3a7bc8;
        --text-light: #d4e3f3;
        --text-white: #ffffff;
    }
    .login-body {
        display: flex; justify-content: center; align-items: center;
        min-height: 100vh; width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: var(--primary-blue);
    }
    .login-container { max-width: 420px; width: 100%; padding: 20px; }
    .login-box {
        background: transparent; padding: 20px 10px; border-radius: 8px;
        text-align: center; color: var(--text-white);
    }
    .login-logo { max-width: 120px; margin-bottom: 25px; }
    .login-box h2 {
        color: var(--text-white); margin-bottom: 10px; font-size: 1.8rem; font-weight: 500;
    }
    .login-box p {
        color: var(--text-light); margin-bottom: 30px; font-size: 0.95rem; transition: color 0.3s;
    }
    .login-box p.error { color: #ffcdd2; font-weight: bold; }
    .input-group { position: relative; margin-bottom: 15px; }
    .input-icon {
        position: absolute; left: 15px; top: 50%; transform: translateY(-50%);
        color: var(--text-light); font-size: 0.9rem;
    }
    .input-group input {
        width: 100%; padding: 14px 15px 14px 45px; border-radius: 5px; font-size: 1rem;
        background: var(--light-blue); border: 1px solid var(--light-blue); color: var(--text-white);
        box-sizing: border-box;
    }
    .input-group input::placeholder { color: var(--text-light); }
    .input-group input:focus { outline: none; border: 1px solid var(--text-white); }
    .hak-akses-label {
        color: var(--text-light); font-size: 0.9rem; text-align: left;
        margin-bottom: 10px; padding-left: 5px;
    }
    .hak-akses-buttons { display: flex; justify-content: flex-start; gap: 10px; margin-bottom: 20px; }
    .akses-btn {
        width: auto; padding: 8px 15px; font-size: 0.9rem; font-weight: 500; cursor: pointer;
        transition: all 0.3s ease; background: transparent; border: 1px solid var(--text-light);
        color: var(--text-light); border-radius: 5px;
    }
    .akses-btn:hover { background: rgba(255, 255, 255, 0.1); }
    .akses-btn.active {
        background-color: var(--text-white); border-color: var(--text-white);
        color: var(--primary-blue); font-weight: bold;
    }
    .recaptcha-placeholder {
        background: #ffffff; border: 1px solid #ccc; border-radius: 5px; padding: 12px 15px;
        display: flex; align-items: center; margin-bottom: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .recaptcha-placeholder input[type="checkbox"] { width: 20px; height: 20px; margin-right: 12px; cursor: pointer; }
    .recaptcha-placeholder label { color: #333; font-size: 0.95em; font-weight: 500; }
    .recaptcha-logo { margin-left: auto; color: #999; font-size: 1.5em; }
    .login-button {
        width: 100%; padding: 14px; background-color: var(--text-white); border: none; border-radius: 5px;
        color: var(--primary-blue); font-size: 1rem; font-weight: bold; cursor: pointer;
        transition: background-color 0.3s; text-transform: uppercase;
    }
    .login-button:hover { background-color: #f0f0f0; }
    .forgot-password {
        display: block; margin-top: 20px; font-size: 0.9rem; color: var(--text-light); font-weight: 500;
    }
    .forgot-password:hover { color: var(--text-white); text-decoration: underline; }
    .login-footer { text-align: center; margin-top: 40px; color: var(--text-light); font-size: 0.9rem; }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
      20%, 40%, 60%, 80% { transform: translateX(8px); }
    }
    .login-box.shake { animation: shake 0.5s ease-in-out; }
  `}</style>
);

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hakAkses, setHakAkses] = useState(null);
    const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Silakan login ke akun Anda');
    const [isShaking, setIsShaking] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        const triggerError = (message) => {
            setErrorMessage(message); setIsShaking(true);       
            setTimeout(() => {
                setIsShaking(false);
                setTimeout(() => setErrorMessage('Silakan login ke akun Anda'), 3000);
            }, 500);
        };

        if (!isRecaptchaChecked) return triggerError("Silakan centang 'I'm not a robot'");
        if (!hakAkses) return triggerError("Silakan pilih Hak Akses Anda");

        if (username === 'ciam' && password === '123' && hakAkses === 'mahasiswa') {
            onLogin('mahasiswa'); navigate('/mahasiswa'); 
        } else if (username === 'admin' && password === 'admin' && hakAkses === 'admin') {
            onLogin('admin'); navigate('/admin');
        } else if (username === 'dosen' && password === 'dosen' && hakAkses === 'dosen') {
            onLogin('dosen'); navigate('/dosen');
        } else {
            triggerError('NIM, Password, atau Hak Akses salah!');
        }
    };

    return (
        <> 
            <LoginStyles /> 
            <div className="login-body">
                <div className="login-container">
                    <div className={`login-box ${isShaking ? 'shake' : ''}`}>
                        <img src="/Logo TIMEElearning.png" alt="Logo Kampus" className="login-logo" />
                        <h2>Portal Akademik</h2>
                        <p className={`login-message ${isShaking ? 'error' : ''}`}>{errorMessage}</p>
                        <form id="login-form" onSubmit={handleLogin}>
                            <div className="input-group">
                                <FaUser className="input-icon" />
                                <input type="text" placeholder="NIM / Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="input-group">
                                <FaLock className="input-icon" />
                                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="hak-akses-group">
                                <p className="hak-akses-label">Hak Akses *</p>
                                <div className="hak-akses-buttons">
                                    {['admin', 'dosen', 'mahasiswa'].map((role) => (
                                        <button type="button" key={role}
                                            className={`akses-btn ${hakAkses === role ? 'active' : ''}`}
                                            onClick={() => setHakAkses(role)}>
                                            {role.charAt(0).toUpperCase() + role.slice(1)} {/* Capitalize */}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="recaptcha-placeholder">
                                <input type="checkbox" id="fake-recaptcha" checked={isRecaptchaChecked} onChange={(e) => setIsRecaptchaChecked(e.target.checked)} />
                                <label htmlFor="fake-recaptcha">I'm not a robot</label>
                                <FaSyncAlt className="recaptcha-logo" />
                            </div>
                            <button type="submit" className="login-button">LOGIN</button>
                            <a href="#" className="forgot-password">Lupa Password?</a>
                        </form>
                    </div>
                    <div className="login-footer">&copy; 2025 Akademik TimeMultiSmart.</div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;