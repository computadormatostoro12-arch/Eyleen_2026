import { useState } from "react";
import "./cuentadante.css";

const ACTAS_INICIALES = [
  {
    id: "ACT-2026-042",
    fecha: "Hoy, 09:15 AM",
    estado: "PENDIENTE_FIRMA",
    pendiente: true,
    tipoMovimiento: "Traspaso de Asignación",
    custodiaLinea: "Almacén Central → Ing. Carlos Mendoza",
    bien: "Kit Arduino Advanced",
    placa: "SENA-77301",
    serial: "ARD-2025-992",
    emisor: "Almacén Central (Ing. Mauricio Gómez)",
    receptor: "Ing. Carlos Mendoza R. (Instructor)",
    tipoBien: "Material Pedagógico",
    ambiente: "Ambiente 204 - Piso 2",
    archivoNombre: null,
  },
];

const PISOS = [1, 2, 3, 4];

const AMBIENTES_36 = Array.from({ length: 36 }, (_, index) => {
  const piso = Math.floor(index / 9) + 1;
  const numeroEnPiso = (index % 9) + 1;
  const codigoAmbiente = `Ambiente ${piso}0${numeroEnPiso}`;
  const modulo =
    numeroEnPiso <= 3
      ? `Módulo A - Piso ${piso}`
      : numeroEnPiso <= 6
      ? `Módulo B - Piso ${piso}`
      : `Módulo C - Piso ${piso}`;

  return {
    id: `AMB-${piso}0${numeroEnPiso}`,
    nombre: codigoAmbiente,
    piso,
    modulo,
    bienes:
      index === 0
        ? [
            {
              nombre: "Kit Arduino Advanced",
              placa: "SENA-77301",
              serial: "ARD-2025-992",
              estado: "ASIGNADO",
            },
          ]
        : [
            {
              nombre: `Mobiliario y equipo ${codigoAmbiente}`,
              placa: `SENA-${78000 + index + 1}`,
              serial: `SER-${piso}0${numeroEnPiso}-2026`,
              estado: "ASIGNADO",
            },
          ],
  };
});

export default function RecepcionActas() {
  const [seccionSidebar, setSeccionSidebar] = useState("bienes");
  const [pisoSeleccionado, setPisoSeleccionado] = useState("todos");
  const [actas, setActas] = useState(ACTAS_INICIALES);
  const [actaSeleccionadaId, setActaSeleccionadaId] = useState("ACT-2026-042");

  // Estado para subir documento de acta de ambiente de formación
  const [mostrarSubida, setMostrarSubida] = useState(false);
  const [ambienteForm, setAmbienteForm] = useState("Ambiente 101 - Piso 1");
  const [codigoActaForm, setCodigoActaForm] = useState("");
  const [observacionForm, setObservacionForm] = useState("");
  const [archivoActa, setArchivoActa] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  const ambientesFiltrados =
    pisoSeleccionado === "todos"
      ? AMBIENTES_36
      : AMBIENTES_36.filter((amb) => amb.piso === Number(pisoSeleccionado));

  const handleSubirActaAmbiente = (e) => {
    e.preventDefault();
    if (!archivoActa) return;

    const nuevoId =
      codigoActaForm.trim() ||
      `ACT-AMB-${String(Math.floor(100 + Math.random() * 900))}`;

    const nuevaActa = {
      id: nuevoId,
      fecha: "Ahora mismo",
      estado: "PENDIENTE_FIRMA",
      pendiente: true,
      tipoMovimiento: "Acta de Ambiente de Formación",
      custodiaLinea: `${ambienteForm} → Ing. Carlos Mendoza`,
      bien: observacionForm.trim() || "Inventario y mobiliario de ambiente",
      placa: "AMB-SENA",
      serial: archivoActa.name,
      emisor: `Responsable ${ambienteForm}`,
      receptor: "Ing. Carlos Mendoza R. (Instructor / Cuentadante)",
      tipoBien: "Documento de Ambiente",
      ambiente: ambienteForm,
      archivoNombre: archivoActa.name,
    };

    setActas((prev) => [nuevaActa, ...prev]);
    setActaSeleccionadaId(nuevoId);
    setCodigoActaForm("");
    setObservacionForm("");
    setArchivoActa(null);
    setFileInputKey((prev) => prev + 1);
    setMostrarSubida(false);
    setSeccionSidebar("bienes");
  };

  return (
    <div className="ns-layout">
      <aside className="ns-sidebar">
        <div className="ns-brand">
          <div className="ns-brand-logo" aria-hidden="true">
            NS
          </div>
          <div>
            <div className="ns-brand-name">NovedaSoft</div>
            <div className="ns-brand-sub">SENA CIDE Soacha</div>
          </div>
        </div>

        <div className="ns-role-bar">
          <span className="ns-role-badge">● Panel Cuentadante</span>
          <span className="ns-role-place">Edificio CIDE</span>
        </div>

        <div className="ns-menu-title">MENÚ PRINCIPAL</div>
        <nav className="ns-nav" aria-label="Menú principal">
          <button
            type="button"
            className={`ns-nav-item ${
              seccionSidebar === "bienes" && !mostrarSubida ? "is-active" : ""
            }`}
            onClick={() => {
              setSeccionSidebar("bienes");
              setMostrarSubida(false);
            }}
          >
            <span>Bienes a mi Cargo</span>
          </button>

          <button
            type="button"
            className={`ns-upload-btn ns-sidebar-upload-btn ${
              mostrarSubida ? "is-active" : ""
            }`}
            onClick={() => {
              setSeccionSidebar("acta");
              setMostrarSubida((prev) => !prev);
            }}
          >
            + Subir Acta de Ambiente
          </button>
        </nav>

        <div className="ns-user-card">
          <div className="ns-user-top">
            <div className="ns-avatar" aria-hidden="true">
              CM
            </div>
            <div className="ns-user-info">
              <div className="ns-user-name">Ing. Carlos Mendoza R.</div>
              <div className="ns-user-role">Instructor / Cuentadante</div>
              <div className="ns-user-email">carlos.mendoza@sena.edu.co</div>
            </div>
          </div>
          <button type="button" className="ns-logout-btn">
            Cerrar Sesión
          </button>
        </div>
      </aside>

      <div className="ns-content-wrap">
        <header className="ns-topbar">
          <div className="ns-breadcrumb">
            <span>Portal CIDE</span>
            <span>›</span>
            <span>Cuentadante</span>
            <span>›</span>
            <strong>
              {mostrarSubida ? "Subir Acta de Ambiente" : "Bienes a mi Cargo"}
            </strong>
          </div>

          <div className="ns-topbar-right">
            <span className="ns-server-pill">● Servidor Activo</span>
            <span className="ns-center-pill">
              SENA CIDE Soacha - Regional Cundinamarca
            </span>
            <button type="button" className="ns-manual-btn">
              Descargar Manual de Actas (PDF)
            </button>
            <button
              type="button"
              className="ns-notif-btn"
              aria-label="Notificaciones"
            >
              🔔
            </button>
            <div className="ns-mini-avatar" aria-hidden="true">
              CM
            </div>
          </div>
        </header>

        <main className="ns-main-grid">
          <section className="ns-center-col">
            <div className="ns-hero">
              <div className="ns-kicker">
                ● TRASPASO LEGAL Y FIRMA DIGITAL DE CUSTODIA • CIDE SOACHA
              </div>
              <h1 className="ns-title">
                {mostrarSubida
                  ? "Subir Acta de Ambiente de Formación"
                  : "Bienes a mi Cargo"}
              </h1>
              <p className="ns-subtitle">
                {mostrarSubida
                  ? "Adjunta el documento de soporte de inventario y mobiliario del ambiente."
                  : "Consulta los 36 ambientes, pisos y módulos asignados bajo tu responsabilidad como cuentadante."}
              </p>
            </div>

            {seccionSidebar === "bienes" && !mostrarSubida && (
              <div className="ns-list-card">
                <div className="ns-list-header">
                  <div className="ns-list-title-group">
                    <h2 className="ns-list-title">Bienes por Piso y Módulo</h2>
                    <span className="ns-count-pill">36 Ambientes • 4 Pisos</span>
                  </div>
                  <span className="ns-sync-text">
                    Mostrando {ambientesFiltrados.length} ambientes •{" "}
                    {actas.length} actas registradas
                  </span>
                </div>

                <div className="ns-pisos-bar">
                  <button
                    type="button"
                    className={`ns-piso-btn ${
                      pisoSeleccionado === "todos" ? "is-active" : ""
                    }`}
                    onClick={() => setPisoSeleccionado("todos")}
                  >
                    Todos los Pisos (36)
                  </button>
                  {PISOS.map((piso) => (
                    <button
                      key={piso}
                      type="button"
                      className={`ns-piso-btn ${
                        pisoSeleccionado === piso ? "is-active" : ""
                      }`}
                      onClick={() => setPisoSeleccionado(piso)}
                    >
                      Piso {piso} (9)
                    </button>
                  ))}
                </div>

                <div className="ns-modulos-grid">
                  {ambientesFiltrados.map((amb) => (
                    <article
                      key={amb.id}
                      className={`ns-modulo-card ${
                        amb.id === actaSeleccionadaId ? "is-selected" : ""
                      }`}
                      onClick={() => setActaSeleccionadaId(amb.id)}
                    >
                      <div className="ns-modulo-top">
                        <div>
                          <h3 className="ns-modulo-title">{amb.nombre}</h3>
                          <span className="ns-modulo-sub">
                            Piso {amb.piso} • {amb.modulo}
                          </span>
                        </div>
                        <span className="ns-status-chip is-ok">
                          {amb.bienes.length}{" "}
                          {amb.bienes.length === 1 ? "Bien" : "Bienes"}
                        </span>
                      </div>

                      <div className="ns-modulo-bienes">
                        {amb.bienes.map((bien) => (
                          <div key={bien.placa} className="ns-bien-item">
                            <strong>{bien.nombre}</strong>
                            <span>
                              Placa: {bien.placa} • Serial: {bien.serial}
                            </span>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {mostrarSubida && (
              <form className="ns-upload-card" onSubmit={handleSubirActaAmbiente}>
                <div className="ns-upload-head">
                  <h2>Subir Documento de Acta de Ambiente de Formación</h2>
                  <button
                    type="button"
                    className="ns-close-btn"
                    onClick={() => {
                      setMostrarSubida(false);
                      setSeccionSidebar("bienes");
                    }}
                  >
                    ✕
                  </button>
                </div>

                <div className="ns-upload-grid">
                  <div className="ns-field">
                    <label htmlFor="amb-select">Ambiente de formación</label>
                    <input
                      id="amb-select"
                      type="text"
                      value={ambienteForm}
                      onChange={(e) => setAmbienteForm(e.target.value)}
                      placeholder="Ej. Ambiente 101 - Piso 1"
                      required
                    />
                  </div>

                  <div className="ns-field">
                    <label htmlFor="cod-acta">Número de acta (opcional)</label>
                    <input
                      id="cod-acta"
                      type="text"
                      value={codigoActaForm}
                      onChange={(e) => setCodigoActaForm(e.target.value)}
                      placeholder="Ej. ACT-2026-045"
                    />
                  </div>
                </div>

                <div className="ns-field">
                  <label htmlFor="obs-acta">Resumen / Observación del ambiente</label>
                  <input
                    id="obs-acta"
                    type="text"
                    value={observacionForm}
                    onChange={(e) => setObservacionForm(e.target.value)}
                    placeholder="Ej. Entrega de equipos y mobiliario al inicio de trimestre"
                  />
                </div>

                <div className="ns-field">
                  <label htmlFor="file-acta">Documento del acta (PDF, JPG o PNG)</label>
                  <input
                    key={fileInputKey}
                    id="file-acta"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setArchivoActa(e.target.files?.[0] || null)}
                    required
                  />
                  {archivoActa && (
                    <span className="ns-file-hint">
                      Archivo seleccionado: <strong>{archivoActa.name}</strong>
                    </span>
                  )}
                </div>

                <div className="ns-upload-actions">
                  <button
                    type="button"
                    className="ns-cancel-btn"
                    onClick={() => {
                      setMostrarSubida(false);
                      setSeccionSidebar("bienes");
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="ns-sign-btn">
                    Guardar y Adjuntar Acta
                  </button>
                </div>
              </form>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}