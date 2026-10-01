import React from "react";

export const App: React.FC = () => {
  return (
    <main style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <span style={styles.appTitle}>DAILY DAMAGE</span>
        <span style={styles.badge}>TODAY</span>
      </header>

      {/* Main Companion Shell */}
      <section style={styles.content}>
        <div style={styles.card}>
          <div style={styles.percentageRow}>
            <span style={styles.percentage}>0%</span>
            <span style={styles.levelBadge}>L1</span>
          </div>
          <p style={styles.canonicalCopy}>“Chalo, shuru toh karey.”</p>
        </div>

        <hr style={styles.divider} />

        <div style={styles.statusBox}>
          <span style={styles.statusIcon}>⚡️</span>
          <p style={styles.statusText}>Foundation ready.</p>
          <p style={styles.statusSubtext}>Actual tracking arrives in later phases.</p>
        </div>
      </section>

      {/* Footer System Info */}
      <footer style={styles.footer}>
        <span>P2 Desktop Shell</span>
        <span>macOS Native</span>
      </footer>
    </main>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    backgroundColor: "var(--bg-app)",
    color: "var(--text-primary)",
    padding: "20px 16px",
    gap: "16px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "8px",
    borderBottom: "1px solid var(--border-subtle)",
  },
  appTitle: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "var(--text-secondary)",
  },
  badge: {
    fontSize: "10px",
    fontWeight: 600,
    padding: "2px 6px",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "var(--bg-surface)",
    border: "1px solid var(--border-subtle)",
    color: "var(--accent-amber)",
    letterSpacing: "0.05em",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    flex: 1,
  },
  card: {
    backgroundColor: "var(--bg-surface)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-md)",
    padding: "20px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  percentageRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  percentage: {
    fontSize: "44px",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    color: "var(--text-primary)",
    lineHeight: 1,
  },
  levelBadge: {
    fontSize: "13px",
    fontWeight: 700,
    padding: "4px 8px",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "var(--border-subtle)",
    color: "var(--text-secondary)",
  },
  canonicalCopy: {
    fontSize: "14px",
    fontStyle: "italic",
    color: "var(--accent-amber)",
    lineHeight: 1.4,
  },
  divider: {
    border: "none",
    borderTop: "1px solid var(--border-subtle)",
    margin: "4px 0",
  },
  statusBox: {
    backgroundColor: "var(--bg-surface)",
    border: "1px dashed var(--border-accent)",
    borderRadius: "var(--radius-md)",
    padding: "16px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  statusIcon: {
    fontSize: "20px",
    marginBottom: "4px",
  },
  statusText: {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--text-primary)",
  },
  statusSubtext: {
    fontSize: "11px",
    color: "var(--text-secondary)",
    lineHeight: 1.4,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "10px",
    color: "var(--text-muted)",
    paddingTop: "8px",
    borderTop: "1px solid var(--border-subtle)",
  },
};
