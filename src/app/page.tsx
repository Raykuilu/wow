import { supabase } from '@/lib/supabase';

export default async function Home() {
  // On récupère les persos depuis la table que tu as créée
  const { data: characters } = await supabase.from('characters').select('*');

  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-3xl font-bold border-b border-slate-700 pb-4 mb-8">
        Team Dashboard — Saison 1
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characters?.map((char) => (
          <div key={char.id} className="bg-slate-800 p-5 rounded-lg border border-slate-700 shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-blue-400">{char.name}</h2>
              <span className="text-xs uppercase bg-slate-700 px-2 py-1 rounded">{char.class}</span>
            </div>
            <p className="text-slate-400 text-sm">{char.realm} - EU</p>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-500 uppercase">ilvl</p>
                <p className="text-lg font-mono">{char.ilvl || '???'}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 uppercase">Score RIO</p>
                <p className="text-lg font-mono text-orange-500">{char.rio_score || 0}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
