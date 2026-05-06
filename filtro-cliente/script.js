// script.js - funcionalidades: menu toggle, filtros e export CSV
(function () {
  // Menu toggle
  const hamburger = document.querySelector('.hamburger');
  const side = document.querySelector('.side-menu');
  const overlay = document.querySelector('.menu-overlay');
  const closeBtn = document.querySelector('.close-menu');
  const root = document.documentElement;

  function openMenu() {
    root.classList.add('menu-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    if (side) side.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.removeAttribute('hidden');
  }

  function closeMenu() {
    root.classList.remove('menu-open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    if (side) side.setAttribute('aria-hidden', 'true');
    if (overlay) overlay.setAttribute('hidden', '');
  }

  if (hamburger) hamburger.addEventListener('click', function () {
    if (root.classList.contains('menu-open')) closeMenu(); else openMenu();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('menu-open')) closeMenu(); });

  // Filters: input text (nome), select (status), date (ignored for now)
  const filtros = document.querySelector('.filtros');
  if (!filtros) return;

  const inputNome = filtros.querySelector('input[type="text"]');
  const selectStatus = filtros.querySelector('select');
  const inputDate = filtros.querySelector('input[type="date"]');
  const btnGerar = filtros.querySelector('button');

  const tabela = document.querySelector('.tabela table');
  const tbody = tabela ? tabela.querySelector('tbody') : null;

  function aplicarFiltros() {
    if (!tbody) return;
    const nomeFiltro = inputNome ? inputNome.value.trim().toLowerCase() : '';
    const statusFiltro = selectStatus ? (selectStatus.value === 'Status' ? '' : selectStatus.value) : '';

    Array.from(tbody.rows).forEach(row => {
      const nome = (row.cells[0] && row.cells[0].textContent.trim().toLowerCase()) || '';
      const status = (row.cells[2] && row.cells[2].textContent.trim()) || '';

      let mostrar = true;
      if (nomeFiltro && !nome.includes(nomeFiltro)) mostrar = false;
      if (statusFiltro && status !== statusFiltro) mostrar = false;

      row.style.display = mostrar ? '' : 'none';
    });
  }

  if (btnGerar) btnGerar.addEventListener('click', function (e) {
    e.preventDefault();
    aplicarFiltros();
  });

  // Export CSV - exporta linhas visíveis
  const exportar = document.querySelector('.exportar');
  if (exportar && tbody) {
    const btnCSV = exportar.querySelector('button:nth-child(1)');
    const btnExcel = exportar.querySelector('button:nth-child(2)');

    function tableToCSV() {
      const rows = [];
      const headers = Array.from(tabela.querySelectorAll('th')).map(th => th.textContent.trim());
      rows.push(headers.join(','));

      Array.from(tbody.rows).forEach(row => {
        if (row.style.display === 'none') return; // pular colunas ocultas
        const cols = Array.from(row.cells).map(td => '"' + td.textContent.replace(/"/g, '""').trim() + '"');
        rows.push(cols.join(','));
      });

      return rows.join('\n');
    }

    if (btnCSV) btnCSV.addEventListener('click', function () {
      const csv = tableToCSV();
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'relatorio_clientes.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    if (btnExcel) btnExcel.addEventListener('click', function () {
      // Simple CSV export but with .xls extension for Excel to open
      const csv = tableToCSV();
      const blob = new Blob([csv], { type: 'application/vnd.ms-excel' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'relatorio_clientes.xls';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
})();