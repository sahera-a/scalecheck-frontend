import { useState } from "react";
import { REMEDIATION_STEPS } from "./remediationSteps";

function RemediationGuide({ riskFlags }) {
  const [openFlag, setOpenFlag] = useState(riskFlags[0]?.type || null);
  const [checkedSteps, setCheckedSteps] = useState({});

  const toggleStep = (key) => {
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!riskFlags || riskFlags.length === 0) return null;

  return (
    <div className="remediation-section">
      <h3>Your Action Plan</h3>
      <p className="remediation-intro">
        Based on the risks flagged above, here's a concrete path to address each one.
      </p>

      {riskFlags.map((flag, i) => {
        const guide = REMEDIATION_STEPS[flag.type];
        if (!guide) return null;

        const isOpen = openFlag === flag.type;
        const doneCount = guide.steps.filter(
          (_, idx) => checkedSteps[`${flag.type}-${idx}`]
        ).length;

        return (
          <div key={i} className={`remediation-card severity-${flag.severity}`}>
            <div
              className="remediation-card-header"
              onClick={() => setOpenFlag(isOpen ? null : flag.type)}
            >
              <div>
                <span className="remediation-flag-title">{flag.type}</span>
                <span className={`remediation-severity-tag ${flag.severity}`}>
                  {flag.severity}
                </span>
              </div>
              <div className="remediation-progress">
                {doneCount}/{guide.steps.length} steps
                <span className={`remediation-toggle-icon ${isOpen ? "open" : ""}`}>▾</span>
              </div>
            </div>

            {isOpen && (
              <div className="remediation-card-body">
                <p className="remediation-flag-intro">{guide.intro}</p>
                <div className="remediation-steps">
                  {guide.steps.map((step, idx) => {
                    const key = `${flag.type}-${idx}`;
                    const checked = !!checkedSteps[key];
                    return (
                      <label key={idx} className={`remediation-step ${checked ? "checked" : ""}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleStep(key)}
                        />
                        <span className="remediation-step-check"></span>
                        <span className="remediation-step-text">
                          <span className="remediation-step-title">{step.title}</span>
                          <span className="remediation-step-desc">{step.description}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RemediationGuide;