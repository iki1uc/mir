export const MIR = {
  flag: true,
  move: "gesetzt",
  role: "künstler",
  pulse: 0
};

export function mirShow() {
  MIR.pulse++;

  // kleine Kunstlinie
  const line = "-".repeat(MIR.pulse);

  return {
    text: `MIR zeigt Linie #${MIR.pulse}`,
    art: line
  };
}

