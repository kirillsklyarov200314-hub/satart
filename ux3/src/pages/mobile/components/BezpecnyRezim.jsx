import React from "react";

export default function BezpecnyRezim({ onReport, onRemove }) {
    return (
        <div className="m-card m-card-blue">
            <div className="m-hex">⬡</div>

            <div className="m-s-title">Súbor je otvorený v izolovanom prostredí</div>

            <ul className="m-list">
                <li><a href="#" onClick={(e) => e.preventDefault()}>Kontrola procesov...</a></li>
                <li>Analýza pripojení: <b>2 blokované</b> požiadavky</li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Skripty: detegovaný makro kód</a></li>
                <li>Výsledok: <b>riziko zostáva</b></li>
            </ul>

            <div className="m-actions">
                <button className="m-btn m-btn-soft" onClick={onReport}>
                    Zobraziť správu
                </button>
                <button className="m-btn m-btn-danger" onClick={onRemove}>
                    Odstrániť súbor
                </button>
            </div>
        </div>
    );
}
