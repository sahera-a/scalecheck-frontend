import { useState } from "react";
import axios from "axios";
import Results from "./Results";

const BASE_URL = "https://ion-scale-check-diagnostic.onrender.com";

function FindReports({ onBack }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(null);
    setSearched(false);
    try {
      const res = await axios.get(`${BASE_URL}/submissions/by-email`, {
        params: { email: email.trim() },
      });
      setReports(res.data);
      setSearched(true);
    } catch (err) {
      setError("Couldn't look up reports right now — please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (selected) {
    return (
      <Results
        result={selected}
        onRestart={() => setSelected(null)}
        onFeedback={() => setSelected(null)}
      />
    );
  }

  return (
    <div className="find-reports-page">
      <div className="find-reports-blob find-reports-blob-1"></div>
      <div className="find-reports-blob find-reports-blob-2"></div>
      <svg className="find-reports-watermark" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,30 260,110 220,240 80,240 40,110" fill="none" stroke="rgba(201,162,75,0.18)" strokeWidth="1.5"/>
        <polygon points="150,70 220,125 195,215 105,215 80,125" fill="none" stroke="rgba(201,162,75,0.18)" strokeWidth="1.5"/>
        <polygon points="150,110 185,140 170,190 130,190 115,140" fill="rgba(201,162,75,0.08)" stroke="rgba(201,162,75,0.18)" strokeWidth="1.5"/>
      </svg>

      <div className="find-reports-card">
        <span className="find-reports-logo">ScaleCheck</span>
        <h2>Find My Reports</h2>
        <p className="intake-subtitle">
          Enter the email you used at intake to view your past assessments.
        </p>
        <form onSubmit={handleSearch} className="find-reports-form">
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="primary-button" disabled={loading}>
            {loading ? "Searching..." : "Find"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {searched && reports.length === 0 && !error && (
          <p className="find-reports-empty">No reports found for that email.</p>
        )}

        {reports.length > 0 && (
          <div className="find-reports-list">
            {reports.map((r) => (
              <div key={r.id} className="find-reports-item" onClick={() => setSelected(r)}>
                <div>
                  <span className="find-reports-org">{r.org_name}</span>
                  <span className="find-reports-date">
                    {new Date(r.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <span className="find-reports-score">{r.overall_score}/100</span>
              </div>
            ))}
          </div>
        )}

        <button className="restart-button" onClick={onBack} style={{ marginTop: 20 }}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default FindReports;