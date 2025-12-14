import React from "react";

export default function Blokovanie({ onClose }) {
    return (
        <div className="m-card m-card-green">

            {/* Header */}
            <div className="m-removed-header">
                <div className="m-removed-icon">🛡️</div>
                <div className="m-removed-brand">PhishGuard</div>
            </div>

            {/* Text */}
            <div className="m-removed-text">
                Súbor bol úspešne odstránený z vášho zariadenia.
                <div className="m-removed-bold">Vaše zariadenie je chránené.</div>
            </div>

            {/* Button */}
            <div className="m-removed-actions">
                <button className="m-btn m-btn-soft" onClick={onClose}>
                    Zavrieť
                </button>
            </div>

        </div>
    );
}
