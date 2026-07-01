import React, { useEffect, useRef, useState } from 'react';

let mermaidLoaded = false;
let mermaidInstance = null;

const loadMermaid = async () => {
  if (mermaidInstance) return mermaidInstance;
  const m = await import('mermaid');
  mermaidInstance = m.default;
  mermaidInstance.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      primaryColor: '#10b981',
      primaryTextColor: '#e2e8f0',
      primaryBorderColor: '#10b981',
      lineColor: '#6ee7b7',
      secondaryColor: '#0f2a1f',
      tertiaryColor: '#0a1628',
      background: '#0a1628',
      mainBkg: '#0f1f14',
      nodeBorder: '#10b981',
      clusterBkg: '#0a1e12',
      clusterBorder: '#10b981',
      titleColor: '#6ee7b7',
      edgeLabelBackground: '#0f2a1f',
      attributeBackgroundColorEven: '#0f1f14',
      attributeBackgroundColorOdd: '#0a1628',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: '13px',
      actorBkg: '#0f2a1f',
      actorBorder: '#10b981',
      actorTextColor: '#e2e8f0',
      actorLineColor: '#10b981',
      signalColor: '#6ee7b7',
      signalTextColor: '#e2e8f0',
      labelBoxBkgColor: '#0f2a1f',
      labelBoxBorderColor: '#10b981',
      labelTextColor: '#e2e8f0',
      loopTextColor: '#e2e8f0',
      noteBorderColor: '#10b981',
      noteBkgColor: '#0a1e12',
      noteTextColor: '#6ee7b7',
      activationBorderColor: '#10b981',
      activationBkgColor: '#0f2a1f',
      sequenceNumberColor: '#10b981',
    },
    flowchart: { curve: 'basis', padding: 20 },
    sequence: { actorMargin: 60, messageMargin: 35, mirrorActors: false, useMaxWidth: true },
  });
  mermaidLoaded = true;
  return mermaidInstance;
};

let idCounter = 0;

const MermaidChart = ({ chart, title }) => {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  const [rendered, setRendered] = useState(false);
  const idRef = useRef(`mermaid-${++idCounter}`);

  useEffect(() => {
    if (!chart) return;
    let cancelled = false;

    const render = async () => {
      try {
        const m = await loadMermaid();
        if (cancelled || !ref.current) return;

        const id = idRef.current;
        const { svg } = await m.render(id, chart);
        if (cancelled || !ref.current) return;

        ref.current.innerHTML = svg;
        // Make SVG responsive
        const svgEl = ref.current.querySelector('svg');
        if (svgEl) {
          svgEl.style.width = '100%';
          svgEl.style.height = 'auto';
          svgEl.style.maxWidth = '100%';
        }
        setRendered(true);
      } catch (e) {
        if (!cancelled) {
          setError(e.message || 'Failed to render diagram');
        }
      }
    };

    render();
    return () => { cancelled = true; };
  }, [chart]);

  if (error) {
    return (
      <div className="mermaid-error">
        <span>Diagram render error: {error}</span>
      </div>
    );
  }

  return (
    <div className="mermaid-wrapper">
      {!rendered && <div className="mermaid-loading">Rendering diagram…</div>}
      <div ref={ref} className="mermaid-container" />
    </div>
  );
};

export default MermaidChart;
