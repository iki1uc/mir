export const MIR = {
  EVO: 2,
  ROOT: {
    ID: "MIR-CORE",
    GATE: "GATE-M",
    SAT: "SAT-ACTIVE",
    ANKER: "ANKER-MIR"
  },
  flag: true,
  move: "gesetzt",
  role: "künstler",
  pulse: 0
};

export function mirShow() {
  MIR.pulse++;

  const line = "-".repeat(MIR.pulse);

  return {
    EVO: MIR.EVO,
    ROOT: MIR.ROOT,
    text: `MIR zeigt Linie #${MIR.pulse}`,
    art: line,
    pulse: MIR.pulse
  };
}
