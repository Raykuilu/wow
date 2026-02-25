// Force le rendu côté serveur pour éviter tout cache bizarre
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#3b82f6' }}>Connexion établie !</h1>
      <p>Le projet WoW Companion est en ligne.</p>
      <p style={{ fontSize: '12px', color: '#666' }}>ID Déploiement : ca950f8</p>
    </div>
  );
}
