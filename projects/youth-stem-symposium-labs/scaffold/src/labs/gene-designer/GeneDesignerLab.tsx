import React, { useState } from 'react';


const GENETIC_CODE: Record<string, string> = {
  AUG: 'Methionine (START)', UUU: 'Phenylalanine', UUC: 'Phenylalanine',
  UUA: 'Leucine', UUG: 'Leucine', GGU: 'Glycine', GGC: 'Glycine',
  GGA: 'Glycine', GGG: 'Glycine', UAA: 'STOP', UAG: 'STOP', UGA: 'STOP'
};


export const GeneDesignerLab: React.FC = () => {
  const [dna, setDna] = useState('TACAAACCCTGAATC');
  const complement = dna.split('').map(b => ({ A: 'T', T: 'A', C: 'G', G: 'C' }[b] || '?')).join('');
  const mrna = dna.split('').map(b => ({ A: 'U', T: 'A', C: 'G', G: 'C' }[b] || '?')).join('');
  const codons = mrna.match(/.{1,3}/g) || [];
  const aminoAcids = codons.map(c => GENETIC_CODE[c] || 'Unknown');


  return (
    <div style={{ padding: 20, background: '#161b22', color: '#c9d1d9', borderRadius: 8 }}>
      <h3 style={{ color: '#58a6ff' }}>CRISPR & Gene Designer Lab</h3>
      <label>Template DNA Strand (3 to 5):</label>
      <input
        value={dna}
        onChange={(e) => setDna(e.target.value.toUpperCase())}
        style={{ width: '100%', padding: 8, margin: '8px 0', background: '#0d1117', color: '#7ee787', border: '1px solid #30363d' }}
      />
      <p><strong>Complementary DNA:</strong> {complement}</p>
      <p><strong>Transcribed mRNA:</strong> {mrna}</p>
      <h4 style={{ marginTop: 12, color: '#f0883e' }}>Translated Polypeptide Chain:</h4>
      <ul>
        {codons.map((codon, i) => (
          <li key={i}>Codon <code>{codon}</code> &rarr; <strong>{aminoAcids[i]}</strong></li>
        ))}
      </ul>
    </div>
  );
};
