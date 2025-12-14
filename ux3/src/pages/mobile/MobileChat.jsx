import React, { useEffect, useState } from "react";
import Varovanie from "./components/Varovanie";
import BezpecnyRezim from "./components/BezpecnyRezim";
import ReportTF from "./components/ReportTF";
import Blokovanie from "./components/Blokovanie";

const FILE = {
    name: "Foto.zip",
    size: "2,3 MB",
    img: "/mobile/img/foto_zip.png",
};

export default function MobileChat() {
    const [state, setState] = useState("idle");
    const [risk, setRisk] = useState(82);

    function onOpenFile() {
        setState("scanning");

        window.setTimeout(() => {
            setRisk(82);
            setState("warning");
        }, 1500);
    }

    function onSafeMode() {
        setState("sandbox");
    }

    function onBlockOrRemove() {
        setState("removed");
    }

    function onCloseRemoved() {
        setState("idle");
    }

    function onOpenReport() {
        setState("report");
    }

    function onBackFromReport() {
        setState("sandbox");
    }

    return (
        <div className="m-root">
            <div className="m-phone">
                <header className="m-header">
                    <div className="m-topline">PhishGuard aktívny</div>

                    <div className="m-headrow">
                        <button className="m-iconbtn" aria-label="Back">
                            ←
                        </button>

                        <div className="m-titlecol">
                            <div className="m-title">Stefa Molnarova</div>
                            <div className="m-sub">online</div>
                        </div>

                        <div className="m-avatar" />
                    </div>
                </header>

                <main className="m-body">
                    <div className="m-bubble">Ahoj, to si ty na tejto fotke?</div>

                    {/* Файл */}
                    <div className="m-file">
                        <div className="m-file-left">
                            <img className="m-file-img" src={FILE.img} alt="" />
                            <div>
                                <div className="m-file-name">{FILE.name}</div>
                                <div className="m-file-size">{FILE.size}</div>
                            </div>
                        </div>

                        <button
                            className="m-open"
                            onClick={onOpenFile}
                            disabled={state !== "idle"}
                        >
                            Otvorit&apos;
                        </button>
                    </div>

                    {/* Панель безопасности: появляется во всех состояниях кроме idle */}
                    {state !== "idle" && (
                        <div className="m-security">
                            <div className="m-notice-title">
                                <span className="m-notice-icon">🛡️</span>
                                <span>PhishGuard hlásenie zabezpečenia</span>
                            </div>

                            {state === "scanning" && <ScanningCard />}

                            {state === "warning" && (
                                <Varovanie risk={risk} onBlock={onBlockOrRemove} onSafe={onSafeMode} />
                            )}

                            {state === "sandbox" && (
                                <BezpecnyRezim onReport={onOpenReport} onRemove={onBlockOrRemove} />
                            )}

                            {state === "report" && (
                                <div className="m-notification">
                                    <ReportTF onBack={onBackFromReport} onRemove={onBlockOrRemove} />
                                </div>
                            )}

                            {state === "removed" && <Blokovanie onClose={onCloseRemoved} />}
                        </div>
                    )}
                </main>

                <footer className="m-inputbar">
                    <button className="m-ibtn" aria-label="Attachment">
                        📎
                    </button>
                    <div className="m-inputfake">Napísať odpoveď...</div>
                    <button className="m-ibtn" aria-label="Mic">
                        🎤
                    </button>
                </footer>
            </div>
        </div>
    );
}

function ScanningCard() {
    return (
        <div className="m-card m-card-orange">
            <div className="m-spinner" aria-label="Scanning" />
            <div className="m-card-title">Spustí sa analýza súboru..</div>
            <button className="m-btn m-btn-soft" disabled>
                Zastaviť
            </button>
        </div>
    );
}
