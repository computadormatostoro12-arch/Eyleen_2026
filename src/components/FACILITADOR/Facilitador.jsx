import "./facilitador.css";
import "./gestion.css";

import "./facilitador.css";
import "./gestion.css";

export default function Facilitadores({ onIrGestion }) {
  return (
    <div className="layout-container">
      {/* Sidebar Izquierda */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand-logo">
            <div className="brand-icon">N</div>
            <div>
              <div className="brand-title">NovedadSoft</div>
              <div className="brand-subtitle">SENA CIDE SOACHA</div>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button type="button" className="nav-item nav-item--active">
              Carga de Malla Horaria
            </button>
            <button
              type="button"
              className="nav-item"
              onClick={onIrGestion}
            >
              Gestión de Asignaciones
            </button>
          </nav>
        </div>

        {/* ... resto igual ... */}

        {/* Info de Usuario al pie del sidebar */}
        <div className="user-card">
          <div className="user-info">
            <div className="user-avatar">AD</div>
            <div>
              <div className="user-name">Admin. Gestion CIDE</div>
              <div className="user-email">administradorcide@sena.edu.co</div>
            </div>
          </div>
          <button type="button" className="btn-logout">
            ↳ Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <div className="main-wrapper">
        {/* Navbar Superior */}
        <header className="top-navbar">
          <div className="breadcrumb">
            <span>Portal CIDE</span> <span>Administración</span>{" "}
            <span className="active">Carga de Malla Horaria</span>
          </div>
          <div className="navbar-right">
            <span className="server-status">
              <span className="facilitadores-badge-dot" /> Servidor Activo
            </span>
            <button type="button" className="btn-download-template">
              Descargar Plantilla Excel (.xlsx)
            </button>
          </div>
        </header>

        {/* Contenido en 2 columnas */}
        <div className="content-body">
          {/* Columna Izquierda: Historial y Filtros */}
          <div className="left-column">
            <header className="facilitadores-header">
              <div className="facilitadores-badge">
                <span className="facilitadores-badge-dot" />
                <span className="facilitadores-badge-text">
                  Importación Masiva y Programación Académica • CIDE Soacha
                </span>
              </div>
              <h1 className="facilitadores-title">
                Carga de Malla Horaria Institucional
              </h1>
              <p className="facilitadores-subtitle">
                Módulo para la importación masiva de archivos de programación
                horaria en formato Excel (.xlsx) o CSV.
              </p>
            </header>

            {/* Buscador y pestañas */}
            <section className="facilitadores-toolbar">
              <div className="facilitadores-search-box">
                <input
                  type="text"
                  className="facilitadores-search-input"
                  placeholder="Buscar..."
                />
                <span className="facilitadores-shortcut">Ctrl + K</span>
              </div>

              <div className="facilitadores-filters-group">
                <div className="facilitadores-tabs">
                  <button
                    type="button"
                    className="facilitadores-tab facilitadores-tab--active"
                  >
                    <span>Todas las Cargas</span>
                    <span className="facilitadores-tab-count">12</span>
                  </button>
                  <button type="button" className="facilitadores-tab">
                    <span>Importaciones Exitosas</span>
                    <span className="facilitadores-tab-count">10</span>
                  </button>
                  <button type="button" className="facilitadores-tab">
                    <span>Con Advertencias / Conflictos</span>
                    <span className="facilitadores-tab-count">2</span>
                  </button>
                </div>
                <div className="facilitadores-trimester-select">
                  Trimestre IV - 2026
                </div>
              </div>
            </section>

            {/* Tabla de Historial */}
            <section className="facilitadores-card">
              <div className="facilitadores-card-header">
                <div className="facilitadores-card-icon" />
                <div>
                  <div className="facilitadores-card-title-row">
                    <h2 className="facilitadores-card-title">
                      Historial de Mallas Horarias Importadas
                    </h2>
                    <span className="facilitadores-card-pill">12 Registros</span>
                  </div>
                  <p className="facilitadores-card-subtitle">
                    Registro auditado de versiones y cargas masivas ejecutadas
                  </p>
                </div>
              </div>

              <div className="facilitadores-table-wrap">
                <table className="facilitadores-table">
                  <thead>
                    <tr>
                      <th>Periodo / Fecha Carga</th>
                      <th>Archivo Fuente</th>
                      <th>Registros / Ambientes</th>
                      <th>Responsable</th>
                      <th className="is-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Fila 1 */}
                    <tr>
                      <td>
                        <div className="facilitadores-period-title">
                          Trimestre IV - 2026
                        </div>
                        <div className="facilitadores-period-date">
                          Hoy, 09:30 AM
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-file-cell">
                          <div className="facilitadores-file-icon" />
                          <div>
                            <div className="facilitadores-file-name">
                              Malla_Horaria_CIDE_T4_2026.xlsx
                            </div>
                            <div className="facilitadores-file-size">
                              2.4 MB
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-metric-main">
                          1,240 Horarios
                        </div>
                        <div className="facilitadores-metric-sub">
                          36 Ambientes
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-responsible">
                          <span className="facilitadores-avatar">MB</span>
                          <span className="facilitadores-responsible-name">
                            Ing. Mario Bustamante
                          </span>
                        </div>
                      </td>
                      <td className="is-right">
                        <button
                          type="button"
                          className="facilitadores-action-btn"
                        >
                          Ver Detalle
                        </button>
                      </td>
                    </tr>

                    {/* Fila 2 */}
                    <tr>
                      <td>
                        <div className="facilitadores-period-title">
                          Trimestre III - 2026
                        </div>
                        <div className="facilitadores-period-date">
                          12/07/2026, 02:15 PM
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-file-cell">
                          <div className="facilitadores-file-icon" />
                          <div>
                            <div className="facilitadores-file-name">
                              Malla_Definitiva_T3_SENA.xlsx
                            </div>
                            <div className="facilitadores-file-size">
                              2.1 MB
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-metric-main">
                          1,180 Horarios
                        </div>
                        <div className="facilitadores-metric-sub">
                          36 Ambientes
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-responsible">
                          <span className="facilitadores-avatar">CR</span>
                          <span className="facilitadores-responsible-name">
                            Lic. Claudia Romero
                          </span>
                        </div>
                      </td>
                      <td className="is-right">
                        <button
                          type="button"
                          className="facilitadores-action-btn"
                        >
                          Ver Detalle
                        </button>
                      </td>
                    </tr>

                    {/* Fila 3 */}
                    <tr>
                      <td>
                        <div className="facilitadores-period-title">
                          Trimestre II - 2026
                        </div>
                        <div className="facilitadores-period-date">
                          04/04/2026, 11:00 AM
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-file-cell">
                          <div className="facilitadores-file-icon" />
                          <div>
                            <div className="facilitadores-file-name">
                              Malla_Academica_CIDE_T2_v1.xlsx
                            </div>
                            <div className="facilitadores-file-size">
                              2.3 MB
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-metric-main">
                          1,210 Horarios
                        </div>
                        <div className="facilitadores-metric-sub">
                          36 Ambientes
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-responsible">
                          <span className="facilitadores-avatar">MB</span>
                          <span className="facilitadores-responsible-name">
                            Ing. Mario Bustamante
                          </span>
                        </div>
                      </td>
                      <td className="is-right">
                        <button
                          type="button"
                          className="facilitadores-action-btn"
                        >
                          Ver Detalle
                        </button>
                      </td>
                    </tr>

                    {/* Fila 4 */}
                    <tr>
                      <td>
                        <div className="facilitadores-period-title">
                          Trimestre I - 2026
                        </div>
                        <div className="facilitadores-period-date">
                          18/01/2026, 08:45 AM
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-file-cell">
                          <div className="facilitadores-file-icon" />
                          <div>
                            <div className="facilitadores-file-name">
                              Malla_Inicial_T1_2026.xlsx
                            </div>
                            <div className="facilitadores-file-size">
                              1.9 MB
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-metric-main">
                          1,150 Horarios
                        </div>
                        <div className="facilitadores-metric-sub">
                          36 Ambientes
                        </div>
                      </td>
                      <td>
                        <div className="facilitadores-responsible">
                          <span className="facilitadores-avatar">AD</span>
                          <span className="facilitadores-responsible-name">
                            Admin
                          </span>
                        </div>
                      </td>
                      <td className="is-right">
                        <button
                          type="button"
                          className="facilitadores-action-btn"
                        >
                          Ver Detalle
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Paginación */}
              <div className="pagination-container">
                <span>Mostrando 4 de 12 registros de carga</span>
                <div className="pagination-controls">
                  <button type="button" className="page-btn"></button>
                  <button
                    type="button"
                    className="page-btn page-btn--active"
                  >
                    1
                  </button>
                  <button type="button" className="page-btn">
                    2
                  </button>
                  <button type="button" className="page-btn">
                    3
                  </button>
                  <button type="button" className="page-btn"></button>
                </div>
              </div>
            </section>
          </div>

          {/* Columna Derecha: Formulario "Cargar Archivo de Horarios" */}
          <aside className="right-column">
            <div className="upload-card">
              <div className="upload-card-header">
                <span className="upload-badge">NUEVA IMPORTACIÓN MASIVA</span>
                <h3 className="upload-card-title">
                  Cargar Archivo de Horarios
                </h3>
                <p className="upload-card-desc">
                  Asignación masiva de fichas, instructores y ambientes para el
                  periodo lectivo.
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Periodo / Trimestre Académico *
                </label>
                <select className="form-select">
                  <option>Trimestre IV - 2026 (Activo)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Modo de Carga *</label>
                <select className="form-select">
                  <option>Sobrescribir Programación Vigente</option>
                </select>
              </div>

              {/* Dropzone */}
              <div className="dropzone">
                <span className="dropzone-text">
                  Arrastra y suelta tu archivo Excel (.xlsx) o CSV aquí
                </span>
                <span className="dropzone-subtext">
                  o haz clic para explorar en tu equipo (Tamaño máx: 15 MB)
                </span>
                <span
                  className="dropzone-subtext"
                  style={{ color: "#39a900" }}
                >
                  Soporta formatos oficial SENA: .xlsx, .csv
                </span>
              </div>

              {/* Preview de Archivo Validado */}
              <div className="file-validation-box">
                <div className="file-preview-item">
                  <span className="facilitadores-file-name">
                    Malla_Horaria_CIDE_T4.xlsx
                  </span>
                  <span className="facilitadores-file-size">
                    2.4 MB • Preparado
                  </span>
                </div>

                <div className="validation-list">
                  <div className="validation-item">
                    ✓ Archivo Validado - 1,240 Filas Detectadas
                  </div>
                  <div className="validation-item">
                    ✓ Estructura de 18 columnas oficial SENA OK
                  </div>
                  <div className="validation-item">
                    ✓ Sin campos nulos en código de ambiente ni ficha
                  </div>
                  <div className="validation-item">
                    ✓ Instructores homologados en aplicativo SOFIA Plus
                  </div>
                </div>
              </div>

              <button type="button" className="btn-process">
                Procesar e Importar Malla Horaria
              </button>
              <button type="button" className="btn-cancel">
                Cancelar
              </button>
            </div>

            <div className="system-status-footer">
              <span>Conectado a Base Académica Regional</span>
              <span style={{ fontWeight: 600 }}>CIDE_V4.9_PROD</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}