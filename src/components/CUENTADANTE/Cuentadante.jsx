import { useState } from "react";
<<<<<<< HEAD
import logo from "../../logo/logo sena.png";
=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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
<<<<<<< HEAD
    ambienteId: "AMB-204",
    piso: 2,
=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
    archivoNombre: null,
  },
];

<<<<<<< HEAD
const PERFIL_USUARIO = {
  iniciales: "CM",
  nombre: "Ing. Carlos Mendoza R.",
  rol: "Instructor / Cuentadante",
  correo: "carlos.mendoza@sena.edu.co",
  centro: "SENA CIDE Soacha - Regional Cundinamarca",
  sede: "Edificio CIDE",
  ambientesAsignados: "36 Ambientes (4 Pisos)",
};

=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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
<<<<<<< HEAD
    etiquetaCompleta: `${codigoAmbiente} - Piso ${piso}`,
=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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

<<<<<<< HEAD
  // Notificaciones estilo celular + menú de perfil + acta abierta desde alerta
  const [mostrarNotifCelular, setMostrarNotifCelular] = useState(false);
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  const [notificacionesDescartadas, setNotificacionesDescartadas] = useState([]);
  const [actaAbiertaDetalle, setActaAbiertaDetalle] = useState(null);

=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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

<<<<<<< HEAD
  const notificacionesVisibles = actas
    .filter((acta) => !notificacionesDescartadas.includes(acta.id))
    .map((acta) => ({
      id: acta.id,
      app: "NovedaSoft",
      titulo: `${acta.tipoMovimiento} • ${acta.id}`,
      mensaje: `${acta.ambiente} — ${acta.bien}`,
      hora: acta.fecha,
      piso: acta.piso,
      ambienteId: acta.ambienteId,
      actaCompleta: acta,
    }));

  const irALugarDeNotificacion = (notif) => {
    setSeccionSidebar("bienes");
    setMostrarSubida(false);
    setPisoSeleccionado(notif.piso || "todos");
    setActaSeleccionadaId(notif.ambienteId || notif.id);
    setActaAbiertaDetalle(notif.actaCompleta);
    setMostrarNotifCelular(false);
  };

  const descartarNotificacion = (id) => {
    setNotificacionesDescartadas((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const limpiarTodasNotificaciones = () => {
    setNotificacionesDescartadas(actas.map((a) => a.id));
    setMostrarNotifCelular(false);
  };

=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
  const handleSubirActaAmbiente = (e) => {
    e.preventDefault();
    if (!archivoActa) return;

<<<<<<< HEAD
    const ambienteEncontrado = AMBIENTES_36.find(
      (amb) => amb.etiquetaCompleta === ambienteForm
    );

=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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
<<<<<<< HEAD
      ambienteId: ambienteEncontrado ? ambienteEncontrado.id : "AMB-101",
      piso: ambienteEncontrado ? ambienteEncontrado.piso : 1,
=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
      archivoNombre: archivoActa.name,
    };

    setActas((prev) => [nuevaActa, ...prev]);
<<<<<<< HEAD
    setActaSeleccionadaId(nuevaActa.ambienteId);
    setActaAbiertaDetalle(nuevaActa);
=======
    setActaSeleccionadaId(nuevoId);
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
    setCodigoActaForm("");
    setObservacionForm("");
    setArchivoActa(null);
    setFileInputKey((prev) => prev + 1);
    setMostrarSubida(false);
    setSeccionSidebar("bienes");
<<<<<<< HEAD
    setMostrarNotifCelular(true);
=======
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
  };

  return (
    <div className="ns-layout">
<<<<<<< HEAD
      {/* Banners flotantes estilo notificación de celular */}
      {mostrarNotifCelular && (
        <div
          aria-live="polite"
          style={{
            position: "fixed",
            top: "74px",
            right: "20px",
            width: "350px",
            maxWidth: "calc(100vw - 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 999,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px 6px",
              fontSize: "12px",
              color: "#374151",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(8px)",
              borderRadius: "999px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <span style={{ fontWeight: 600, paddingLeft: "6px" }}>
              Alertas del sistema ({notificacionesVisibles.length})
            </span>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {notificacionesVisibles.length > 0 && (
                <button
                  type="button"
                  onClick={limpiarTodasNotificaciones}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#16a34a",
                    fontSize: "11px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Limpiar
                </button>
              )}
              <button
                type="button"
                onClick={() => setMostrarNotifCelular(false)}
                aria-label="Cerrar notificaciones"
                style={{
                  background: "#f3f4f6",
                  border: "none",
                  borderRadius: "999px",
                  width: "22px",
                  height: "22px",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {notificacionesVisibles.length === 0 ? (
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(12px)",
                borderRadius: "18px",
                padding: "14px 16px",
                boxShadow: "0 12px 28px rgba(15, 23, 42, 0.16)",
                border: "1px solid rgba(229, 231, 235, 0.9)",
                fontSize: "13px",
                color: "#4b5563",
              }}
            >
              No tienes notificaciones pendientes.
            </div>
          ) : (
            notificacionesVisibles.map((notif) => (
              <div
                key={notif.id}
                onClick={() => irALugarDeNotificacion(notif)}
                title="Clic para ir al ambiente y ver el detalle"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "20px",
                  padding: "12px 14px",
                  boxShadow: "0 14px 30px rgba(15, 23, 42, 0.18)",
                  border: "1px solid rgba(226, 232, 240, 0.95)",
                  cursor: "pointer",
                  transition: "transform 0.15s ease",
                }}
              >
                {/* Ícono de app estilo celular */}
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "11px",
                    backgroundColor: "#16a34a",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "13px",
                    flexShrink: 0,
                  }}
                >
                  NS
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#16a34a",
                      }}
                    >
                      {notif.app}
                    </span>
                    <span style={{ fontSize: "11px", color: "#6b7280" }}>
                      {notif.hora}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#111827",
                      lineHeight: 1.25,
                    }}
                  >
                    {notif.titulo}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#4b5563",
                      marginTop: "2px",
                      lineHeight: 1.35,
                    }}
                  >
                    {notif.mensaje}
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      color: "#16a34a",
                      fontWeight: 600,
                      marginTop: "4px",
                    }}
                  >
                    Toca para ir al ambiente →
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Descartar notificación"
                  onClick={(e) => {
                    e.stopPropagation();
                    descartarNotificacion(notif.id);
                  }}
                  style={{
                    background: "rgba(243, 244, 246, 0.9)",
                    border: "none",
                    borderRadius: "999px",
                    width: "22px",
                    height: "22px",
                    fontSize: "11px",
                    color: "#4b5563",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      )}

      <aside className="ns-sidebar">
        {/* Bloque del Logo SENA más grande y NovedaSoft */}
        <div className="ns-brand ns-brand--dinamica">
          <div className="ns-brand-logo ns-brand-logo--lg" aria-hidden="true">
            <img src={logo} alt="Logo SENA" />
          </div>
          <div className="ns-brand-text">
            <div className="ns-brand-name">NovedaSoft</div>
            <div className="ns-brand-sub">CIDE Soacha</div>
          </div>
        </div>

        {/* Barra del Rol breve y dinámica */}
        <button
          type="button"
          className="ns-role-bar ns-role-bar--compact"
          onClick={() => setPerfilAbierto((prev) => !prev)}
          title="Ver información del rol y perfil"
        >
          <span className="ns-role-badge">
            <span className="ns-pulse-dot" aria-hidden="true" />
            Cuentadante
          </span>
          <span className="ns-role-place">36 Amb. • 4 Pisos</span>
        </button>
=======
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
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f

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
<<<<<<< HEAD
              {PERFIL_USUARIO.iniciales}
            </div>
            <div className="ns-user-info">
              <div className="ns-user-name">{PERFIL_USUARIO.nombre}</div>
              <div className="ns-user-role">{PERFIL_USUARIO.rol}</div>
              <div className="ns-user-email">{PERFIL_USUARIO.correo}</div>
=======
              CM
            </div>
            <div className="ns-user-info">
              <div className="ns-user-name">Ing. Carlos Mendoza R.</div>
              <div className="ns-user-role">Instructor / Cuentadante</div>
              <div className="ns-user-email">carlos.mendoza@sena.edu.co</div>
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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

<<<<<<< HEAD
          <div className="ns-topbar-right" style={{ position: "relative" }}>
            <span className="ns-server-pill">● Servidor Activo</span>
            <span className="ns-center-pill">{PERFIL_USUARIO.centro}</span>
            <button type="button" className="ns-manual-btn">
              Descargar Manual de Actas (PDF)
            </button>

          {/* Botón de Notificaciones */}
          <button
            type="button"
            className="ns-notif-btn"
            aria-label="Notificaciones"
            aria-expanded={mostrarNotifCelular}
            onClick={() => {
              setMostrarNotifCelular((prev) => !prev);
              setPerfilAbierto(false);
            }}
            style={{ position: "relative" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>

  {notificacionesVisibles.length > 0 && (
    <span
      style={{
        position: "absolute",
        top: "4px",
        right: "4px",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "#ef4444",
      }}
    />
  )}
</button>

            {/* Botón de Perfil */}
            <button
              type="button"
              className="ns-mini-avatar"
              aria-label="Ver perfil y mi información"
              aria-expanded={perfilAbierto}
              onClick={() => {
                setPerfilAbierto((prev) => !prev);
                setMostrarNotifCelular(false);
              }}
              style={{ cursor: "pointer", border: "none" }}
            >
              {PERFIL_USUARIO.iniciales}
            </button>

            {/* Popover de Información de Perfil */}
            {perfilAbierto && (
              <div
                className="ns-popover-card"
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: "0px",
                  width: "300px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
                  padding: "16px",
                  zIndex: 50,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  <div className="ns-avatar" aria-hidden="true">
                    {PERFIL_USUARIO.iniciales}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px" }}>
                      {PERFIL_USUARIO.nombre}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#16a34a",
                        fontWeight: 600,
                      }}
                    >
                      {PERFIL_USUARIO.rol}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#374151",
                    marginTop: "12px",
                  }}
                >
                  <div>
                    <strong>Correo:</strong> {PERFIL_USUARIO.correo}
                  </div>
                  <div>
                    <strong>Centro:</strong> {PERFIL_USUARIO.centro}
                  </div>
                  <div>
                    <strong>Sede:</strong> {PERFIL_USUARIO.sede}
                  </div>
                  <div>
                    <strong>Cobertura:</strong> {PERFIL_USUARIO.ambientesAsignados}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "8px",
                    marginTop: "14px",
                    paddingTop: "10px",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <button
                    type="button"
                    className="ns-cancel-btn"
                    onClick={() => setPerfilAbierto(false)}
                  >
                    Cerrar
                  </button>
                  <button type="button" className="ns-logout-btn">
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            )}
=======
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
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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
<<<<<<< HEAD
              <>
                {/* Tarjeta enfocada al entrar desde una notificación */}
                {actaAbiertaDetalle && (
                  <div
                    style={{
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #86efac",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#15803d",
                            textTransform: "uppercase",
                          }}
                        >
                          Detalle de notificación • {actaAbiertaDetalle.id}
                        </span>
                        <h3
                          style={{
                            margin: "2px 0 0",
                            fontSize: "15px",
                            color: "#111827",
                          }}
                        >
                          {actaAbiertaDetalle.tipoMovimiento} —{" "}
                          {actaAbiertaDetalle.ambiente}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActaAbiertaDetalle(null)}
                        style={{
                          background: "#ffffff",
                          border: "1px solid #d1d5db",
                          borderRadius: "8px",
                          padding: "4px 10px",
                          fontSize: "12px",
                          cursor: "pointer",
                        }}
                      >
                        Ocultar
                      </button>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "8px",
                        marginTop: "10px",
                        fontSize: "12px",
                        color: "#374151",
                      }}
                    >
                      <div>
                        <strong>Detalle / Bien:</strong> {actaAbiertaDetalle.bien}
                      </div>
                      <div>
                        <strong>Custodia:</strong> {actaAbiertaDetalle.custodiaLinea}
                      </div>
                      <div>
                        <strong>Estado:</strong> {actaAbiertaDetalle.estado}
                      </div>
                      {actaAbiertaDetalle.archivoNombre && (
                        <div>
                          <strong>Archivo:</strong> {actaAbiertaDetalle.archivoNombre}
                        </div>
                      )}
                    </div>
                  </div>
                )}

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
              </>
=======
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
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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
<<<<<<< HEAD
                    <select
                      id="amb-select"
                      value={ambienteForm}
                      onChange={(e) => setAmbienteForm(e.target.value)}
                      required
                    >
                      {PISOS.map((piso) => (
                        <optgroup key={piso} label={`Piso ${piso}`}>
                          {AMBIENTES_36.filter((amb) => amb.piso === piso).map(
                            (amb) => {
                              const etiqueta = `${amb.nombre} - Piso ${amb.piso}`;
                              return (
                                <option key={amb.id} value={etiqueta}>
                                  {etiqueta}
                                </option>
                              );
                            }
                          )}
                        </optgroup>
                      ))}
                    </select>
=======
                    <input
                      id="amb-select"
                      type="text"
                      value={ambienteForm}
                      onChange={(e) => setAmbienteForm(e.target.value)}
                      placeholder="Ej. Ambiente 101 - Piso 1"
                      required
                    />
>>>>>>> dfff90288e81cdbce6878bacefc5411d0ec2751f
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