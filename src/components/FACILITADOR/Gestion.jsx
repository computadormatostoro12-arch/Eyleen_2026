import "./gestion.css";

import "./gestion.css";

export default function Gestion({ onIrFacilitador }) {
  return (
    <div className="asig-page">
      <aside className="asig-sidebar">
        <div className="asig-sidebar-top">
          {/* ... */}
          <nav className="asig-nav">
            <button
              type="button"
              className="asig-nav-item"
              onClick={onIrFacilitador}
            >
              <span>Carga de Malla Horaria</span>
            </button>

            <button
              type="button"
              className="asig-nav-item asig-nav-item--active"
            >
              <span>Gestión de Asignaciones</span>
            </button>
          </nav>
        </div>

        {/* ... resto igual ... */}

        <div className="asig-user-footer">
          <div className="asig-user-row">
            <div className="asig-user-avatar">AD</div>
            <div className="asig-user-info">
              <div className="asig-user-name">Admin. Gestión CIDE</div>
              <div className="asig-user-email">
                administracion.cide@sena.edu.co
              </div>
            </div>
          </div>

          <button type="button" className="asig-logout-btn">
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      <div className="asig-main">
        <header className="asig-topbar">
          <div className="asig-topbar-left">
            <span className="asig-crumb">Portal CIDE</span>
            <span className="asig-crumb-sep"></span>
            <span className="asig-crumb">Administración</span>
            <span className="asig-crumb-sep"></span>
            <span className="asig-crumb-active">Gestión de Asignaciones</span>
            <span className="asig-server-pill">
              <span className="asig-server-dot" />
              <span>Servidor Activo</span>
            </span>
          </div>

          <div className="asig-topbar-right">
            <button type="button" className="asig-export-btn">
              Exportar Programación (PDF)
            </button>
            <span className="asig-center-badge">SENA CIDE Soacha</span>
            <div className="asig-top-avatar">AD</div>
          </div>
        </header>

        <main className="asig-content">
          <header className="asig-header">
            <div className="asig-eyebrow-row">
              <span className="asig-eyebrow-dot" />
              <span className="asig-eyebrow">
                PROGRAMACIÓN Y AJUSTES MANUALES • CIDE SOACHA
              </span>
            </div>
            <h1 className="asig-title">
              Gestión y Ajuste de Asignaciones Horarias
            </h1>
            <p className="asig-subtitle">
              Interfaz para la modificación manual de la programación de
              instructores, fichas de formación y ambientes de clase.
            </p>
          </header>

          <section className="asig-toolbar">
            <div className="asig-search-box">
              <input
                type="text"
                className="asig-search-input"
                placeholder="Buscar por ambiente, ficha o instructor..."
              />
              <span className="asig-kbd">Ctrl + K</span>
            </div>

            <div className="asig-filters">
              <button
                type="button"
                className="asig-filter-btn asig-filter-btn--active"
              >
                <span>Todas las Jornadas</span>
                <span className="asig-filter-count">42</span>
              </button>

              <button type="button" className="asig-filter-btn">
                <span className="asig-dot-morning" />
                <span>Mañana (06:00 - 12:00)</span>
              </button>

              <button type="button" className="asig-filter-btn">
                <span className="asig-dot-afternoon" />
                <span>Tarde (12:00 - 18:00)</span>
              </button>

              <button type="button" className="asig-filter-btn">
                <span className="asig-dot-night" />
                <span>Noche (18:00 - 22:00)</span>
              </button>

              <div className="asig-trimester-wrap">
                <span className="asig-trimester-pill">Trimestre IV - 2026</span>
              </div>
            </div>
          </section>

          <section className="asig-card">
            <div className="asig-card-header">
              <div className="asig-card-title-group">
                <h2 className="asig-card-title">
                  Programación Actual de Ambientes y Fichas
                </h2>
                <span className="asig-card-badge">
                  42 Asignaciones Vigentes
                </span>
              </div>

              <div className="asig-card-status">
                <span className="asig-status-dot" />
                <span>36 Ambientes • 4 Pisos Operativos</span>
              </div>
            </div>

            <div className="asig-table-wrap">
              <table className="asig-table">
                <thead>
                  <tr>
                    <th>Ambiente / Piso</th>
                    <th>Ficha / Programa</th>
                    <th>Instructor Asignado</th>
                    <th>Jornada / Horario</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ambiente 101 • Piso 1</td>
                    <td>2873491 • ADSO</td>
                    <td>Ing. Mario Bustamante</td>
                    <td>Mañana (06:00 - 12:00)</td>
                    <td>
                      <button type="button" className="asig-export-btn">
                        Ajustar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}