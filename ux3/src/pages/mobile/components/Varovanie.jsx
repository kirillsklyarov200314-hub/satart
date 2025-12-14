import React from "react";

export default function Varovanie({ risk = 82, onBlock, onSafe }) {
    return (
        <div className="m-card m-card-danger">
            <div className="m-danger-frame">
                <div className="m-danger-row">
                    <span aria-hidden="true">⚠️</span>
                    <div className="m-danger-title">POZOR</div>
                    <span aria-hidden="true">⚠️</span>
                </div>

                <div className="m-danger-text">
                    Súbor môže obsahovať škodlivý kód. Odporúčame ho neotvárať.
                </div>

                <div className="m-danger-risk">Riziko: {risk} %</div>

                <div className="m-actions">
                    <button className="m-btn m-btn-danger" onClick={onBlock}>
                        Zablokovať
                    </button>
                    <button className="m-btn m-btn-ghost" onClick={onSafe}>
                        Bezpečný režim
                    </button>
                </div>
            </div>
        </div>
    );
}
