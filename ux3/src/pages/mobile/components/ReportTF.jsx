import React from "react";

export default function ReportTF({ onBack, onRemove }) {
    return (
        <div className="m-card m-card-report">
            <div className="m-report-head">
                <div className="m-report-title">🛡️ PhishGuard Report</div>
                <div className="m-report-sub">
                    Výsledky analýzy súboru: <b>Foto.zip</b>
                </div>
            </div>

            <div className="m-tablewrap">
                <table className="m-table">
                    <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Výsledok</th>
                        <th>Stav</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Sieťe pripojenia</td>
                        <td>2 pokusy, blokované</td>
                        <td><span className="m-pill m-pill-red">Rizikové</span></td>
                    </tr>
                    <tr>
                        <td>Makro kód</td>
                        <td>Detegovaný VBA skript</td>
                        <td><span className="m-pill m-pill-orange">Potenciálne nebezpečné</span></td>
                    </tr>
                    <tr>
                        <td>Prístup k systémovým súborom</td>
                        <td>Povolený pokus o zápis</td>
                        <td><span className="m-pill m-pill-red">Rizikové</span></td>
                    </tr>
                    <tr>
                        <td>Digitálny podpis</td>
                        <td>Chýba</td>
                        <td><span className="m-pill m-pill-yellow">Neoverený</span></td>
                    </tr>
                    <tr>
                        <td>Analýza reputácie</td>
                        <td>Zhoda s databázou vírusov</td>
                        <td><span className="m-pill m-pill-black">Nebezpečné</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="m-actions m-actions-report">
                <button className="m-btn m-btn-ghost" onClick={onBack}>
                    Späť
                </button>
                <button className="m-btn m-btn-danger m-btn-wide" onClick={onRemove}>
                    Odstrániť súbor
                </button>
            </div>
        </div>
    );
}
