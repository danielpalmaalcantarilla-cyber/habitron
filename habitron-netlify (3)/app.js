function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef,
  useEffect
} = React;
const C = {
  bg: "#FAFAF8",
  surf: "#FFFFFF",
  card: "#FFFFFF",
  border: "#E8E3DC",
  accent: "#1AB8A0",
  accentBg: "rgba(26,184,160,0.08)",
  accentBrd: "rgba(26,184,160,0.25)",
  accent2: "#2563EB",
  accent2Bg: "rgba(37,99,235,0.08)",
  accent2Brd: "rgba(37,99,235,0.25)",
  red: "#DC2626",
  redBg: "rgba(220,38,38,0.08)",
  redBrd: "rgba(220,38,38,0.25)",
  blue: "#2563EB",
  blueBg: "rgba(37,99,235,0.08)",
  blueBrd: "rgba(37,99,235,0.25)",
  orange: "#EA580C",
  orangeBg: "rgba(234,88,12,0.08)",
  orangeBrd: "rgba(234,88,12,0.25)",
  green: "#16A34A",
  greenBg: "rgba(22,163,74,0.08)",
  greenBrd: "rgba(22,163,74,0.25)",
  grad: "linear-gradient(135deg,#4BC95A,#1AB8A0,#0BA8D0)",
  gradText: "linear-gradient(135deg,#4BC95A,#1AB8A0,#0BA8D0)",
  text: "#1C1033",
  sub: "#7C7B8A",
  subtle: "#F8F9FF"
};
const todayStr = () => new Date().toISOString().split("T")[0];
const todayDayIdx = () => {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
};
const DAYS_ES = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DAYS_SHORT = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];
const daysDiff = iso => iso ? (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24) : 0;
const CSS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:wght@400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0;}body{background:linear-gradient(160deg,#C8DFFA 0%,#E8D5C8 55%,#F2E8DC 100%);min-height:100vh;}input,select,textarea{color-scheme:light;}input::placeholder,textarea::placeholder{color:#A09EB0;}::-webkit-scrollbar{width:3px;height:3px;}::-webkit-scrollbar-thumb{background:rgba(109,40,217,0.3);border-radius:2px;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes pulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}`;
/* ── PRIMITIVES ── */
const Card = ({
  children,
  style: s,
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onClick,
  style: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
    cursor: onClick ? "pointer" : "default",
    ...s
  }
}, children);
const Lbl = ({
  children,
  color,
  style: s
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Chakra Petch',sans-serif",
    fontSize: 10,
    letterSpacing: 2,
    color: color || C.sub,
    textTransform: "uppercase",
    marginBottom: 7,
    ...s
  }
}, children);
const H1 = ({
  children,
  size = 28,
  color,
  style: s
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Bebas Neue',sans-serif",
    fontSize: size,
    letterSpacing: 2,
    color: color || C.text,
    lineHeight: 1,
    ...s
  }
}, children);
const Btn = ({
  children,
  onClick,
  variant = "primary",
  disabled,
  style: s,
  sm
}) => {
  const v = {
    primary: {
      bg: C.grad,
      color: "#FFFFFF",
      border: "none"
    },
    ghost: {
      bg: "transparent",
      color: C.sub,
      border: `1px solid ${C.border}`
    },
    danger: {
      bg: C.redBg,
      color: C.red,
      border: `1px solid ${C.redBrd}`
    },
    success: {
      bg: C.greenBg,
      color: C.green,
      border: `1px solid ${C.greenBrd}`
    },
    orange: {
      bg: C.orangeBg,
      color: C.orange,
      border: `1px solid ${C.orangeBrd}`
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      background: v.bg,
      color: v.color,
      border: v.border,
      borderRadius: 10,
      padding: sm ? "6px 14px" : "11px 18px",
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: sm ? 11 : 13,
      fontWeight: 700,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? .5 : 1,
      transition: "all .15s",
      ...s
    }
  }, children);
};
const Inp = ({
  label,
  unit,
  style: s,
  ...p
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 11
  }
}, label && /*#__PURE__*/React.createElement(Lbl, null, label), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("input", _extends({}, p, {
  style: {
    width: "100%",
    boxSizing: "border-box",
    background: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    color: C.text,
    padding: unit ? "10px 42px 10px 14px" : "10px 14px",
    fontSize: 16,
    fontFamily: "'Chakra Petch',sans-serif",
    outline: "none",
    ...s
  }
})), unit && /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    right: 13,
    top: "50%",
    transform: "translateY(-50%)",
    color: C.sub,
    fontSize: 11,
    fontFamily: "'Chakra Petch',sans-serif"
  }
}, unit)));
const Sel = ({
  label,
  options,
  value,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 11
  }
}, label && /*#__PURE__*/React.createElement(Lbl, null, label), /*#__PURE__*/React.createElement("select", {
  value: value,
  onChange: e => onChange(e.target.value),
  style: {
    width: "100%",
    background: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    color: C.text,
    padding: "10px 14px",
    fontSize: 16,
    fontFamily: "'Chakra Petch',sans-serif",
    outline: "none",
    cursor: "pointer"
  }
}, options.map(o => /*#__PURE__*/React.createElement("option", {
  key: o.v || o,
  value: o.v || o
}, o.l || o))));
const Ring = ({
  pct,
  size = 80,
  stroke = 7,
  color = C.accent,
  children
}) => {
  const r = (size - stroke * 2) / 2,
    circ = 2 * Math.PI * r,
    offset = circ * (1 - Math.min(pct || 0, 1));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "#EEE",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeDasharray: circ,
    strokeDashoffset: offset,
    strokeLinecap: "round",
    style: {
      transition: "stroke-dashoffset .6s ease"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }
  }, children));
};
const MBar = ({
  label,
  value,
  max,
  color,
  unit = "g"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "'Chakra Petch',sans-serif",
    fontSize: 11,
    color: C.sub
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "'Chakra Petch',sans-serif",
    fontSize: 11,
    color: C.text
  }
}, value, /*#__PURE__*/React.createElement("span", {
  style: {
    color: C.sub
  }
}, "/", max, unit))), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 3,
    background: "#EEE",
    borderRadius: 2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: "100%",
    width: `${Math.min((value || 0) / max * 100, 100)}%`,
    background: color,
    borderRadius: 2,
    transition: "width .5s"
  }
})));
/* ── STEP ICONS (SVG) ── */
const STEP_META = [{
  title: "SITUACIÓN DE PARTIDA",
  sub: "Datos de tu báscula de bioimpedancia",
  icon: /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1C1033",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }))
}, {
  title: "TUS OBJETIVOS",
  sub: "Define tu transformación",
  icon: /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1C1033",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }))
}, {
  title: "ESTILO DE VIDA",
  sub: "Trabajo, experiencia y equipamiento",
  icon: /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1C1033",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }))
}, {
  title: "PREFERENCIAS DE ENTRENAMIENTO",
  sub: "Días, tiempos y hábitos avanzados",
  icon: /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1C1033",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8h1a4 4 0 0 1 0 8h-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "1",
    x2: "6",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "1",
    x2: "10",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "1",
    x2: "14",
    y2: "4"
  }))
}];
const STEPS = [{
  fields: [{
    k: "age",
    l: "Edad",
    t: "number",
    ph: "44",
    u: "años"
  }, {
    k: "sex",
    l: "Sexo",
    t: "select",
    opts: [{
      v: "masculino",
      l: "Masculino"
    }, {
      v: "femenino",
      l: "Femenino"
    }]
  }, {
    k: "weight",
    l: "Peso",
    t: "number",
    ph: "75",
    u: "kg"
  }, {
    k: "height",
    l: "Altura",
    t: "number",
    ph: "178",
    u: "cm"
  }, {
    k: "bodyFat",
    l: "% Grasa corporal",
    t: "number",
    ph: "17",
    u: "%"
  }, {
    k: "muscleMass",
    l: "% Masa muscular",
    t: "number",
    ph: "55",
    u: "%"
  }]
}, {
  fields: [{
    k: "goalType",
    l: "Objetivo principal",
    t: "select",
    opts: [{
      v: "Perder grasa",
      l: "Perder grasa 🔥"
    }, {
      v: "Ganar músculo",
      l: "Ganar músculo 💪"
    }, {
      v: "Recomposición corporal",
      l: "Recomposición corporal ⚡"
    }]
  }, {
    k: "targetBodyFat",
    l: "% Grasa objetivo",
    t: "number",
    ph: "12",
    u: "%"
  }, {
    k: "targetMuscleMass",
    l: "% Músculo objetivo",
    t: "number",
    ph: "60",
    u: "%"
  }, {
    k: "timelineMonths",
    l: "Plazo para conseguirlo",
    t: "number",
    ph: "5",
    u: "meses"
  }, {
    k: "additionalGoals",
    l: "Objetivos o datos adicionales",
    t: "textarea",
    ph: "Lesiones, eventos próximos, objetivos específicos..."
  }]
}, {
  fields: [{
    k: "trainingTitle",
    l: "Nombre de tu programa",
    t: "text",
    ph: "Ej: Operación Verano 2026..."
  }, {
    k: "jobType",
    l: "Tipo de trabajo",
    t: "select",
    opts: [{
      v: "sedentario",
      l: "Sedentario (escritorio)"
    }, {
      v: "leve",
      l: "Levemente activo"
    }, {
      v: "activo",
      l: "Activo (de pie)"
    }, {
      v: "muy_activo",
      l: "Muy activo (físico)"
    }]
  }, {
    k: "experience",
    l: "Experiencia en gym",
    t: "select",
    opts: [{
      v: "principiante",
      l: "Principiante (<1 año)"
    }, {
      v: "intermedio",
      l: "Intermedio (1-3 años)"
    }, {
      v: "avanzado",
      l: "Avanzado (>3 años)"
    }]
  }, {
    k: "restrictions",
    l: "Restricciones alimentarias",
    t: "text",
    ph: "Sin gluten, vegetariano... (opcional)"
  }]
}, {
  fields: []
}];
/* ── ONBOARDING PICKERS ── */
const WEEK_DAYS = [{
  k: "lunes",
  s: "L",
  full: "Lunes"
}, {
  k: "martes",
  s: "M",
  full: "Martes"
}, {
  k: "miercoles",
  s: "X",
  full: "Miércoles"
}, {
  k: "jueves",
  s: "J",
  full: "Jueves"
}, {
  k: "viernes",
  s: "V",
  full: "Viernes"
}, {
  k: "sabado",
  s: "S",
  full: "Sábado"
}, {
  k: "domingo",
  s: "D",
  full: "Domingo"
}];
function DayPicker({
  selected,
  onChange
}) {
  const toggle = k => {
    const n = selected.includes(k) ? selected.filter(d => d !== k) : [...selected, k];
    onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "D\xEDas preferidos para entrenar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      flexWrap: "wrap",
      marginBottom: 8
    }
  }, WEEK_DAYS.map(d => {
    const on = selected.includes(d.k);
    return /*#__PURE__*/React.createElement("button", {
      key: d.k,
      onClick: () => toggle(d.k),
      style: {
        width: 42,
        height: 42,
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.sub,
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: 17,
        letterSpacing: 1,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.3)" : "0 1px 3px rgba(0,0,0,0.06)"
      }
    }, d.s);
  })), selected.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.accent
    }
  }, selected.length, " d\xEDas: ", selected.map(k => WEEK_DAYS.find(d => d.k === k)?.full).join(", ")));
}
function TimePicker({
  value,
  onChange
}) {
  const opts = [];
  for (let m = 30; m <= 120; m += 5) opts.push(m);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Tiempo m\xE1ximo por sesi\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7
    }
  }, opts.map(m => {
    const on = value === m;
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: () => onChange(m),
      style: {
        padding: "7px 11px",
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.sub,
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        fontWeight: on ? 700 : 400,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.3)" : "0 1px 3px rgba(0,0,0,0.05)"
      }
    }, m, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9
      }
    }, " min"));
  })), value && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.accent,
      marginTop: 7
    }
  }, "Sesiones de m\xE1ximo ", value, " minutos"));
}
const REST_ACTS = [{
  k: "yoga",
  l: "Yoga / Stretching",
  i: "🧘"
}, {
  k: "caminar",
  l: "Caminar",
  i: "🚶"
}, {
  k: "correr",
  l: "Carrera suave",
  i: "🏃"
}, {
  k: "bici",
  l: "Bicicleta",
  i: "🚴"
}, {
  k: "nadar",
  l: "Natación",
  i: "🏊"
}, {
  k: "pilates",
  l: "Pilates",
  i: "🤸"
}, {
  k: "movilidad",
  l: "Movilidad articular",
  i: "💪"
}];
function ActiveRestPicker({
  admitsRest,
  activities,
  onToggleRest,
  onToggleActivity
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "\xBFAdmites descanso activo en d\xEDas libres?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: admitsRest ? 12 : 0
    }
  }, [{
    v: true,
    l: "Sí, me apunto"
  }, {
    v: false,
    l: "No, prefiero descansar"
  }].map(o => {
    const on = admitsRest === o.v;
    return /*#__PURE__*/React.createElement("button", {
      key: String(o.v),
      onClick: () => onToggleRest(o.v),
      style: {
        flex: 1,
        padding: "10px 0",
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.sub,
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        fontWeight: on ? 700 : 400,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.3)" : "none"
      }
    }, o.l);
  })), admitsRest && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
    style: {
      marginBottom: 8
    }
  }, "Actividades preferidas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, REST_ACTS.map(a => {
    const on = activities.includes(a.k);
    return /*#__PURE__*/React.createElement("button", {
      key: a.k,
      onClick: () => onToggleActivity(a.k),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 12px",
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.text,
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.25)" : "0 1px 3px rgba(0,0,0,0.05)"
      }
    }, /*#__PURE__*/React.createElement("span", null, a.i), /*#__PURE__*/React.createElement("span", null, a.l));
  }))));
}
function FastingPicker({
  admits,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "\xBFAdmites ayuno intermitente?"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#EEF5FF",
      border: "1px solid rgba(37,99,235,0.2)",
      borderRadius: 12,
      padding: "10px 14px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.blue,
      lineHeight: 1.5
    }
  }, "Si aplica a tu objetivo, se incluir\xE1 una ventana de ayuno en el plan (ej: 16:8 o 14:10).")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, [{
    v: true,
    l: "Sí, puedo intentarlo"
  }, {
    v: false,
    l: "No, prefiero no ayunar"
  }].map(o => {
    const on = admits === o.v;
    return /*#__PURE__*/React.createElement("button", {
      key: String(o.v),
      onClick: () => onToggle(o.v),
      style: {
        flex: 1,
        padding: "10px 0",
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.sub,
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        fontWeight: on ? 700 : 400,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.3)" : "none"
      }
    }, o.l);
  })));
}
/* ── LANDING PAGE ── */
function Landing({
  onEnter
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg,#F8FFFE 0%,#F0F8FF 40%,#F5FFF5 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px 32px 52px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:wght@400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0;}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}@keyframes rotateSlow{to{transform:rotate(360deg)}}@keyframes pulse2{0%,100%{opacity:.7}50%{opacity:1}}`), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: show ? 1 : 0,
      transition: "opacity .7s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36,
      position: "relative",
      width: 220,
      height: 220
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "220",
    height: "220",
    viewBox: "0 0 220 220",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ringGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#C8E63C"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "35%",
    stopColor: "#4BC95A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "70%",
    stopColor: "#1AB8A0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0BA8D0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "leafGrad1",
    x1: "0%",
    y1: "100%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1AB8A0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#8ED63C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "leafGrad2",
    x1: "0%",
    y1: "100%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#2DB87A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#C8E63C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "leafGrad3",
    x1: "0%",
    y1: "100%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1AB8A0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#4BC95A"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "110",
    r: "96",
    fill: "none",
    stroke: "url(#ringGrad)",
    strokeWidth: "8",
    strokeLinecap: "round",
    strokeDasharray: "520 80",
    strokeDashoffset: "-20",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "110",
    r: "86",
    fill: "none",
    stroke: "url(#ringGrad)",
    strokeWidth: "2.5",
    strokeDasharray: "200 340",
    strokeDashoffset: "80",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85,145 C70,120 72,90 88,75 C92,100 95,125 85,145Z",
    fill: "url(#leafGrad3)",
    opacity: "0.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100,150 C80,118 82,80 105,62 C115,90 118,125 100,150Z",
    fill: "url(#leafGrad1)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M115,145 C105,115 110,82 130,68 C132,98 128,128 115,145Z",
    fill: "url(#leafGrad2)",
    opacity: "0.88"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M105,62 C108,95 106,125 100,150",
    stroke: "white",
    strokeWidth: "1.5",
    strokeOpacity: "0.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38,130 C28,100 35,65 60,45",
    stroke: "url(#ringGrad)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    fill: "none",
    opacity: "0.6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      animation: show ? "fadeUp .8s ease .2s both" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 58,
      letterSpacing: 8,
      lineHeight: 1,
      background: "linear-gradient(135deg,#C8E63C 0%,#4BC95A 35%,#1AB8A0 70%,#0BA8D0 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "HABITRON"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      letterSpacing: 5,
      color: "#7CB0A0",
      marginTop: 6,
      fontWeight: 600
    }
  }, "INTELIGENCIA ARTIFICIAL")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      textAlign: "center",
      animation: show ? "fadeUp .8s ease .5s both" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: "#8AABA0",
      letterSpacing: 1,
      lineHeight: 1.7
    }
  }, "Tu entrenador y nutricionista personal", /*#__PURE__*/React.createElement("br", null), "potenciado por IA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 320,
      animation: show ? "fadeUp .8s ease .8s both" : "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onEnter,
    style: {
      width: "100%",
      padding: "18px 0",
      background: "linear-gradient(135deg,#4BC95A,#1AB8A0,#0BA8D0)",
      border: "none",
      borderRadius: 18,
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 22,
      letterSpacing: 5,
      color: "#FFFFFF",
      cursor: "pointer",
      boxShadow: "0 6px 30px rgba(27,184,160,0.35)",
      transition: "transform .15s, box-shadow .15s"
    }
  }, "ACCEDER \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 14,
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "#AACCC0",
      letterSpacing: 2
    }
  }, "POWERED BY CLAUDE AI")));
}

/* ── EQUIPMENT PICKER ── */
const EQUIP_OPTS = [{
  k: "gym",
  l: "Gym completo",
  i: "🏋️"
}, {
  k: "mancuernas",
  l: "Mancuernas",
  i: "💪"
}, {
  k: "barra",
  l: "Barra y discos",
  i: "🔩"
}, {
  k: "kettlebell",
  l: "Kettlebells",
  i: "⚫"
}, {
  k: "bandas",
  l: "Bandas elásticas",
  i: "🎯"
}, {
  k: "calistenia",
  l: "Peso corporal",
  i: "🤸"
}, {
  k: "cardio",
  l: "Cardio (cinta/bici)",
  i: "🏃"
}, {
  k: "piscina",
  l: "Piscina",
  i: "🏊"
}];
function EquipmentPicker({
  selected,
  onChange
}) {
  const toggle = k => {
    const n = selected.includes(k) ? selected.filter(e => e !== k) : [...selected, k];
    onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Equipamiento disponible (selecciona todos los que tengas)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, EQUIP_OPTS.map(e => {
    const on = selected.includes(e.k);
    return /*#__PURE__*/React.createElement("button", {
      key: e.k,
      onClick: () => toggle(e.k),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 13px",
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.text,
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.3)" : "0 1px 3px rgba(0,0,0,0.05)"
      }
    }, /*#__PURE__*/React.createElement("span", null, e.i), /*#__PURE__*/React.createElement("span", null, e.l));
  })), selected.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.accent,
      marginTop: 8
    }
  }, selected.map(k => EQUIP_OPTS.find(e => e.k === k)?.l).join(", ")));
}

/* ── TRAINING TIME PICKER ── */
function TrainingTimePicker({
  value,
  onChange
}) {
  const slots = ["06:00", "06:30", "07:00", "07:30", "08:00", "09:00", "10:00", "12:00", "13:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "\xBFA qu\xE9 hora sueles entrenar?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, slots.map(t => {
    const on = value === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange(t),
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        border: `1px solid ${on ? "transparent" : C.border}`,
        background: on ? C.grad : "#FFFFFF",
        color: on ? "#FFFFFF" : C.sub,
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 13,
        fontWeight: on ? 700 : 400,
        cursor: "pointer",
        transition: "all .15s",
        boxShadow: on ? "0 2px 8px rgba(109,40,217,0.3)" : "0 1px 3px rgba(0,0,0,0.05)"
      }
    }, t);
  })), value && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.accent,
      marginTop: 8
    }
  }, "Entrenas habitualmente a las ", value, "h"));
}

/* ── ONBOARDING ── */
function Onboarding({
  onComplete
}) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    age: "44",
    sex: "masculino",
    weight: "75",
    height: "178",
    bodyFat: "17",
    muscleMass: "55",
    goalType: "Recomposición corporal",
    targetBodyFat: "12",
    targetMuscleMass: "60",
    timelineMonths: "5",
    additionalGoals: "",
    trainingTitle: "",
    jobType: "sedentario",
    experience: "intermedio",
    equipmentList: ["gym"],
    restrictions: "",
    preferredTrainingTime: "07:00",
    trainingDaysOfWeek: ["lunes", "miercoles", "viernes", "sabado"],
    maxTrainingMinutes: 60,
    admitsActiveRest: true,
    activeRestActivities: ["yoga", "caminar"],
    admitsFasting: false
  });
  const upd = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  const isLast = step === STEPS.length - 1;
  const s = STEPS[step];
  const meta = STEP_META[step];
  const bmi = data.weight && data.height ? (parseFloat(data.weight) / (parseFloat(data.height) / 100) ** 2).toFixed(1) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100vh",
      background: "linear-gradient(160deg,#C8DFFA 0%,#E8D5C8 55%,#F2E8DC 100%)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: "rgba(0,0,0,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${(step + 1) / STEPS.length * 100}%`,
      background: "linear-gradient(90deg,#4BC95A,#1AB8A0,#0BA8D0)",
      transition: "width .4s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      padding: "14px 0 0"
    }
  }, STEPS.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === step ? 24 : 8,
      height: 8,
      borderRadius: 4,
      background: i <= step ? "#1AB8A0" : "rgba(0,0,0,0.15)",
      transition: "all .3s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "20px 24px 0",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, meta.icon, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 28,
      letterSpacing: 3,
      color: "#1C1033",
      lineHeight: 1
    }
  }, meta.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub,
      marginTop: 5
    }
  }, meta.sub)), s.fields.map(f => f.t === "select" ? /*#__PURE__*/React.createElement(Sel, {
    key: f.k,
    label: f.l,
    value: data[f.k],
    options: f.opts || [],
    onChange: v => upd(f.k, v)
  }) : f.t === "textarea" ? /*#__PURE__*/React.createElement("div", {
    key: f.k,
    style: {
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, f.l), /*#__PURE__*/React.createElement("textarea", {
    placeholder: f.ph,
    value: data[f.k],
    onChange: e => upd(f.k, e.target.value),
    rows: 3,
    style: {
      width: "100%",
      boxSizing: "border-box",
      background: "#FFFFFF",
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      color: C.text,
      padding: "10px 14px",
      fontSize: 16,
      fontFamily: "'Chakra Petch',sans-serif",
      outline: "none",
      resize: "none"
    }
  })) : /*#__PURE__*/React.createElement(Inp, {
    key: f.k,
    label: f.l,
    type: f.t,
    placeholder: f.ph,
    unit: f.u,
    value: data[f.k],
    onChange: e => upd(f.k, e.target.value)
  })), step === 0 && bmi && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(37,99,235,0.08)",
      border: "1px solid rgba(37,99,235,0.2)",
      borderRadius: 12,
      padding: "10px 16px",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.blue
    }
  }, "IMC calculado: ", /*#__PURE__*/React.createElement("strong", null, bmi))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EquipmentPicker, {
    selected: data.equipmentList,
    onChange: v => upd("equipmentList", v)
  }), /*#__PURE__*/React.createElement(TrainingTimePicker, {
    value: data.preferredTrainingTime,
    onChange: v => upd("preferredTrainingTime", v)
  })), step === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DayPicker, {
    selected: data.trainingDaysOfWeek,
    onChange: v => upd("trainingDaysOfWeek", v)
  }), /*#__PURE__*/React.createElement(TimePicker, {
    value: data.maxTrainingMinutes,
    onChange: v => upd("maxTrainingMinutes", v)
  }), /*#__PURE__*/React.createElement(ActiveRestPicker, {
    admitsRest: data.admitsActiveRest,
    activities: data.activeRestActivities,
    onToggleRest: v => upd("admitsActiveRest", v),
    onToggleActivity: k => {
      const c = data.activeRestActivities;
      upd("activeRestActivities", c.includes(k) ? c.filter(a => a !== k) : [...c, k]);
    }
  }), /*#__PURE__*/React.createElement(FastingPicker, {
    admits: data.admitsFasting,
    onToggle: v => upd("admitsFasting", v)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px 32px",
      display: "flex",
      gap: 10,
      borderTop: "1px solid rgba(0,0,0,0.08)",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(16px)",
      flexShrink: 0,
      boxShadow: "0 -2px 16px rgba(0,0,0,0.06)"
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => setStep(s => s - 1),
    style: {
      flex: 1
    }
  }, "\u2190 ATR\xC1S"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => isLast ? onComplete(data) : setStep(s => s + 1),
    style: {
      flex: 2
    }
  }, isLast ? "🚀 GENERAR MI PLAN" : "SIGUIENTE →")));
}
/* ── GENERATING ── */
function Generating({
  profile,
  ready,
  onConfirm,
  onImport
}) {
  const [showImport, setShowImport] = useState(false);

  // Export profile as downloadable JSON
  const exportProfile = () => {
    const data = {
      type: "habitron_input",
      version: "1.0",
      exported_at: new Date().toISOString(),
      profile
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const ts2 = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 16);
    a.download = "input_" + ts2 + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Import plan from JSON file
  const handleFileImport = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.type === "habitron_plan" && data.plan) {
          onImport(data.plan);
        } else {
          alert("Archivo no válido. Asegúrate de importar un plan generado por Claude.");
        }
      } catch (err) {
        alert("Error al leer el archivo: " + err.message);
      }
    };
    reader.readAsText(file);
  };
  const bmi = profile.weight && profile.height ? (parseFloat(profile.weight) / (parseFloat(profile.height) / 100) ** 2).toFixed(1) : "—";
  if (ready && ready.dailyCalories) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        background: "linear-gradient(160deg,#C8DFFA 0%,#E8D5C8 55%,#F2E8DC 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(Ring, {
      pct: 1,
      size: 90,
      stroke: 5,
      color: "#1AB8A0"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 28
      }
    }, "\u2705"))), /*#__PURE__*/React.createElement(H1, {
      size: 24,
      style: {
        marginBottom: 8
      }
    }, "\xA1PLAN LISTO!"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        color: C.sub,
        marginBottom: 24
      }
    }, "Plan personalizado cargado correctamente"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 320
      }
    }, ready.planRationale && Object.entries(ready.planRationale).map(([k, v]) => {
      const icons = {
        calorias: "🔥",
        proteina: "💪",
        entreno: "🏋️",
        timeline: "📅",
        adaptaciones: "⚙️"
      };
      const labels = {
        calorias: "Calorías",
        proteina: "Proteína",
        entreno: "Entrenamiento",
        timeline: "Proyección",
        adaptaciones: "Adaptaciones"
      };
      return v ? /*#__PURE__*/React.createElement("div", {
        key: k,
        style: {
          background: "#FFFFFF",
          border: "1px solid rgba(26,184,160,0.2)",
          borderRadius: 12,
          padding: "12px 14px",
          marginBottom: 8,
          textAlign: "left"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 4
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13
        }
      }, icons[k]), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: 13,
          color: "#1AB8A0",
          letterSpacing: 1
        }
      }, labels[k])), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "'Chakra Petch',sans-serif",
          fontSize: 11,
          color: C.text,
          lineHeight: 1.6
        }
      }, v)) : null;
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onConfirm,
      style: {
        width: "100%",
        padding: "16px 0",
        background: C.grad,
        border: "none",
        borderRadius: 16,
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: 20,
        letterSpacing: 4,
        color: "#FFFFFF",
        cursor: "pointer",
        boxShadow: "0 6px 24px rgba(26,184,160,0.35)",
        marginTop: 8
      }
    }, "VER MI PLAN \u2192")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg,#C8DFFA 0%,#E8D5C8 55%,#F2E8DC 100%)",
      display: "flex",
      flexDirection: "column",
      padding: "40px 24px 32px"
    }
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12
    }
  }, "\uD83E\uDD16"), /*#__PURE__*/React.createElement(H1, {
    size: 26,
    style: {
      marginBottom: 8
    }
  }, "GENERA TU PLAN CON IA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub,
      lineHeight: 1.6
    }
  }, "El plan lo genera Claude IA con toda su inteligencia.", /*#__PURE__*/React.createElement("br", null), "Sigue los pasos:")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: "1px solid rgba(26,184,160,0.25)",
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: C.grad,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: "#FFF"
    }
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: C.text,
      letterSpacing: 1
    }
  }, "EXPORTA TU PERFIL")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, "Descarga el archivo con tus datos. Lo necesitar\xE1s en el paso 2."), /*#__PURE__*/React.createElement("button", {
    onClick: exportProfile,
    style: {
      width: "100%",
      padding: "12px 0",
      background: C.grad,
      border: "none",
      borderRadius: 12,
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: "#FFFFFF",
      cursor: "pointer",
      letterSpacing: 1
    }
  }, "\u2B07\uFE0F DESCARGAR habitron-perfil.json")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: "1px solid rgba(37,99,235,0.25)",
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(135deg,#2563EB,#7C3AED)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: "#FFF"
    }
  }, "2")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: C.text,
      letterSpacing: 1
    }
  }, "P\xCDDELE EL PLAN A CLAUDE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, "Abre claude.ai en el navegador, adjunta el archivo y escribe:"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(37,99,235,0.06)",
      border: "1px solid rgba(37,99,235,0.2)",
      borderRadius: 10,
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: "#2563EB",
      lineHeight: 1.7,
      fontStyle: "italic"
    }
  }, "\"Aqu\xED tienes mi perfil de fitness. Genera un plan completo de 7 d\xEDas de dieta y entrenamiento personalizado en formato habitron_plan JSON.\""))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: "1px solid rgba(234,88,12,0.25)",
      borderRadius: 16,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(135deg,#EA580C,#F59E0B)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: "#FFF"
    }
  }, "3")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: C.text,
      letterSpacing: 1
    }
  }, "IMPORTA EL PLAN")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, "Claude te dar\xE1 un archivo JSON. Desc\xE1rgalo e imp\xF3rtalo aqu\xED:"), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width: "100%",
      padding: "12px 0",
      background: "linear-gradient(135deg,#EA580C,#F59E0B)",
      border: "none",
      borderRadius: 12,
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: "#FFFFFF",
      cursor: "pointer",
      letterSpacing: 1,
      textAlign: "center"
    }
  }, "\u2B06\uFE0F IMPORTAR PLAN JSON", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".json",
    onChange: handleFileImport,
    style: {
      display: "none"
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Tu perfil resumido"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8
    }
  }, [["PESO", profile.weight + "kg"], ["GRASA", profile.bodyFat + "%"], ["MÚSCULO", profile.muscleMass + "%"], ["IMC", bmi], ["OBJETIVO", profile.goalType?.split(" ")[0] || "—"], ["DÍAS", (profile.trainingDaysOfWeek || []).length + "/sem"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: "center",
      background: C.subtle,
      borderRadius: 8,
      padding: "8px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 17,
      color: C.accent
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 9,
      color: C.sub,
      letterSpacing: 1
    }
  }, l))))));
}

/* ── HELPERS ── */
function calcCompliance(plans, logs) {
  let done = 0,
    total = 0;
  Object.entries(logs).forEach(([key, dl]) => {
    let di;
    if (key.startsWith("day-")) di = parseInt(key.split("-")[1]);else {
      const d = new Date(key + "T12:00:00");
      const j = d.getDay();
      di = j === 0 ? 6 : j - 1;
    }
    const dp = plans?.dietPlan?.[di],
      wp = plans?.workoutPlan?.[di];
    dp?.meals?.forEach(m => {
      const ml = dl.meals?.[m.id];
      if (ml !== undefined) {
        total++;
        if (ml.status === "done" || ml.status === "alternative") done++;
      }
    });
    if (wp && !wp.isRest) wp?.exercises?.forEach(e => {
      const el = dl.exercises?.[e.id];
      if (el !== undefined) {
        total++;
        if (el.done === true) done++;
      }
    });
  });
  // Only show compliance when user has actually logged something
  if (total === 0) return null;
  return {
    pct: Math.round(done / total * 100),
    done,
    total
  };
}
function getSupplements(profile) {
  if (!profile) return [];
  const goal = profile.goalType || "",
    sed = profile.jobType === "sedentario" || profile.jobType === "leve";
  return [...(sed ? [{
    blockTitle: "Desayuno",
    blockIcon: "🌅",
    name: "Vitamina D3 + K2",
    icon: "☀️",
    dose: "2000-4000 UI D3",
    timing: "Con el desayuno (comida con grasa)",
    why: "El 80% con trabajo de escritorio tienen déficit. Clave para testosterona, fuerza e inmunidad.",
    detail: "Toma D3+K2 juntos: la K2 dirige el calcio a los huesos.",
    color: C.orange
  }] : []), {
    blockTitle: "Comida principal",
    blockIcon: "🍽️",
    name: "Omega-3 (EPA+DHA)",
    icon: "🐟",
    dose: "2-3g EPA+DHA",
    timing: "Con almuerzo o cena",
    why: "Antiinflamatorio, reduce DOMS, mejora sensibilidad a la insulina.",
    detail: "Busca cápsulas con al menos 500mg EPA+DHA por cápsula.",
    color: C.blue
  }, ...(goal.includes("músculo") || goal.includes("Recomposición") ? [{
    blockTitle: "Pre-entreno",
    blockIcon: "⚡",
    name: "Creatina Monohidrato",
    icon: "💎",
    dose: "5g/día",
    timing: "20-30 min antes del entreno",
    why: "Aumenta fuerza 5-15% y masa muscular. El suplemento más respaldado científicamente.",
    detail: "No necesita fase de carga. Con agua o zumo.",
    color: C.accent
  }] : []), {
    blockTitle: "Post-entreno",
    blockIcon: "💪",
    name: "Proteína Whey",
    icon: "🥛",
    dose: "25-30g",
    timing: "Dentro de 30-45 min post-entreno",
    why: "Dispara la síntesis proteica cuando el músculo es más receptivo.",
    detail: "Con agua o leche desnatada.",
    color: C.accent
  }, {
    blockTitle: "Antes de dormir",
    blockIcon: "🌙",
    name: "Magnesio Bisglicinato",
    icon: "😴",
    dose: "300-400mg",
    timing: "30 min antes de acostarse",
    why: "Mejora calidad del sueño y recuperación muscular nocturna.",
    detail: "El bisglicinato no produce efecto laxante.",
    color: C.blue
  }];
}
function getPhaseSuggestion(profile, plans) {
  if (!profile || !plans) return null;
  const bf = parseFloat(profile.bodyFat),
    tbf = parseFloat(profile.targetBodyFat),
    mm = parseFloat(profile.muscleMass),
    tmm = parseFloat(profile.targetMuscleMass);
  const bfD = bf - tbf,
    mmD = tmm - mm;
  if (bfD < 4 || mmD < 3) return null;
  const months = parseInt(profile.timelineMonths) || 6,
    cw = Math.min(Math.ceil(bfD / 0.5), Math.floor(months * 4.3 * 0.55)),
    bw = Math.floor(months * 4.3 * 0.45);
  const t = new Date(),
    ce = new Date(t);
  ce.setDate(ce.getDate() + cw * 7);
  const be = new Date(ce);
  be.setDate(be.getDate() + bw * 7);
  const fmt = d => d.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short"
  });
  const cal = plans.dailyCalories || 2200;
  return {
    phases: [{
      name: "FASE CORTE",
      icon: "🔥",
      color: C.red,
      weeks: cw,
      from: fmt(t),
      to: fmt(ce),
      calories: Math.round(cal * .8),
      description: `Déficit 20% · ${Math.round(cal * .8)} kcal/día`
    }, {
      name: "VOLUMEN LIMPIO",
      icon: "💪",
      color: C.accent,
      weeks: bw,
      from: fmt(ce),
      to: fmt(be),
      calories: Math.round(cal * 1.1),
      description: `Superávit 10% · ${Math.round(cal * 1.1)} kcal/día`
    }],
    note: "Enfoque en 2 fases más eficaz con estas diferencias."
  };
}
function getMealLabel(time) {
  if (!time) return "";
  const h = parseInt(time.split(":")[0]);
  if (h < 10) return {
    label: "Desayuno",
    icon: "🌅"
  };
  if (h < 12) return {
    label: "Media mañana",
    icon: "🥐"
  };
  if (h < 15) return {
    label: "Almuerzo",
    icon: "🍽️"
  };
  if (h < 17) return {
    label: "Merienda",
    icon: "🍎"
  };
  if (h < 19) return {
    label: "Pre-entreno",
    icon: "⚡"
  };
  if (h < 22) return {
    label: "Cena",
    icon: "🌙"
  };
  return {
    label: "Noche",
    icon: "😴"
  };
}
function getInterleavedItems(meals, supps) {
  const n = meals?.length || 0;
  const slotMap = {
    "Desayuno": 0,
    "Comida principal": 1,
    "Pre-entreno": Math.max(1, n - 2),
    "Post-entreno": Math.max(1, n - 2),
    "Antes de dormir": n - 1
  };
  const bySlot = {};
  (supps || []).forEach(s => {
    const slot = slotMap[s.blockTitle] ?? n - 1;
    if (!bySlot[slot]) bySlot[slot] = [];
    bySlot[slot].push(s);
  });
  const items = [];
  (meals || []).forEach((m, i) => {
    items.push({
      type: "meal",
      data: m
    });
    if (bySlot[i]) bySlot[i].forEach(s => items.push({
      type: "supp",
      data: s
    }));
  });
  return items;
}
function parseAdditionalGoals(text) {
  const t = (text || "").toLowerCase();
  const alterno = t.match(/d[ií]as?\s+altern/);
  const timeM = t.match(/(\d{1,2})[:h](\d{0,2})\s*(am|pm)?/) || t.match(/a\s+las?\s+(\d{1,2})/);
  let trainTime = "07:00";
  if (timeM) {
    let h = parseInt(timeM[1]);
    const m = parseInt(timeM[2] || "0");
    if (timeM[3] === "pm" && h < 12) h += 12;
    trainTime = String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
  }
  return {
    alternodays: !!alterno,
    trainTime
  };
}
/* ── DEMO PLAN ── */
function makeDemoPlan(profile) {
  const w = parseFloat(profile.weight || 75),
    h = parseFloat(profile.height || 178),
    a = parseFloat(profile.age || 44);
  const isFem = profile.sex === "femenino";
  const bmr = isFem ? 10 * w + 6.25 * h - 5 * a - 161 : 10 * w + 6.25 * h - 5 * a + 5;
  const act = {
    sedentario: 1.2,
    leve: 1.375,
    activo: 1.55,
    muy_activo: 1.725
  }[profile.jobType] || 1.375;
  const tdee = Math.round(bmr * act);
  const goal = profile.goalType || "";
  const kcal = Math.round(goal.includes("grasa") ? tdee * .82 : goal.includes("músculo") ? tdee * 1.1 : tdee * .95);
  const prot = Math.round(w * 2.3),
    fat = Math.round(kcal * .25 / 9),
    carbs = Math.round((kcal - prot * 4 - fat * 9) / 4);
  const {
    alternodays,
    trainTime: autoTime
  } = parseAdditionalGoals(profile.additionalGoals);
  const trainTime = profile.preferredTrainingTime || autoTime;
  const dayKeyToIdx = {
    lunes: 0,
    martes: 1,
    miercoles: 2,
    jueves: 3,
    viernes: 4,
    sabado: 5,
    domingo: 6
  };
  let tdays;
  if (profile.trainingDaysOfWeek && profile.trainingDaysOfWeek.length > 0) {
    tdays = profile.trainingDaysOfWeek.map(k => dayKeyToIdx[k]).filter(i => i !== undefined).sort((a, b) => a - b);
  } else if (alternodays) {
    tdays = [0, 2, 4, 6];
  } else {
    tdays = [0, 1, 2, 3];
  }
  // Pick meals based on goal & seed from profile weight+height for variety
  const seed = parseInt(profile.weight || 75) + parseInt(profile.height || 178);
  const pick = (arr, i) => arr[(seed + i) % arr.length];
  const isLoss = goal.includes("grasa"),
    isMuscle = goal.includes("músculo");
  const BREAKFASTS = [{
    name: "Avena proteica con plátano y nueces",
    calories: 420,
    protein: 35,
    carbs: 52,
    fat: 10,
    ingredients: [{
      name: "Avena integral",
      amount: 80,
      unit: "g"
    }, {
      name: "Proteína whey",
      amount: 25,
      unit: "g"
    }, {
      name: "Plátano",
      amount: 100,
      unit: "g"
    }, {
      name: "Nueces",
      amount: 15,
      unit: "g"
    }, {
      name: "Leche semidesnatada",
      amount: 200,
      unit: "ml"
    }]
  }, {
    name: "Tortilla de claras con tostada integral",
    calories: 390,
    protein: 38,
    carbs: 36,
    fat: 10,
    ingredients: [{
      name: "Claras de huevo",
      amount: 200,
      unit: "g"
    }, {
      name: "Huevo entero",
      amount: 1,
      unit: "ud"
    }, {
      name: "Pan integral",
      amount: 60,
      unit: "g"
    }, {
      name: "Tomate natural",
      amount: 80,
      unit: "g"
    }, {
      name: "AOVE",
      amount: 8,
      unit: "ml"
    }]
  }, {
    name: "Yogur griego con frutos rojos y granola",
    calories: 360,
    protein: 28,
    carbs: 42,
    fat: 9,
    ingredients: [{
      name: "Yogur griego 0%",
      amount: 250,
      unit: "g"
    }, {
      name: "Frutos rojos mixtos",
      amount: 100,
      unit: "g"
    }, {
      name: "Granola proteica",
      amount: 40,
      unit: "g"
    }, {
      name: "Miel",
      amount: 10,
      unit: "g"
    }]
  }, {
    name: "Bocadillo de pavo con aguacate",
    calories: 410,
    protein: 34,
    carbs: 38,
    fat: 14,
    ingredients: [{
      name: "Pan integral",
      amount: 80,
      unit: "g"
    }, {
      name: "Pechuga de pavo",
      amount: 120,
      unit: "g"
    }, {
      name: "Aguacate",
      amount: 60,
      unit: "g"
    }, {
      name: "Lechuga y tomate",
      amount: 80,
      unit: "g"
    }]
  }, {
    name: "Batido proteico con avena y mantequilla de cacahuete",
    calories: 445,
    protein: 40,
    carbs: 48,
    fat: 11,
    ingredients: [{
      name: "Proteína whey",
      amount: 30,
      unit: "g"
    }, {
      name: "Avena",
      amount: 60,
      unit: "g"
    }, {
      name: "Mantequilla de cacahuete",
      amount: 15,
      unit: "g"
    }, {
      name: "Leche desnatada",
      amount: 300,
      unit: "ml"
    }, {
      name: "Plátano",
      amount: 80,
      unit: "g"
    }]
  }, {
    name: "Huevos revueltos con salmón ahumado",
    calories: 400,
    protein: 42,
    carbs: 18,
    fat: 17,
    ingredients: [{
      name: "Huevos",
      amount: 3,
      unit: "ud"
    }, {
      name: "Salmón ahumado",
      amount: 80,
      unit: "g"
    }, {
      name: "Pan integral",
      amount: 50,
      unit: "g"
    }, {
      name: "Queso fresco",
      amount: 40,
      unit: "g"
    }]
  }, {
    name: "Bowl de queso cottage con fruta y semillas",
    calories: 350,
    protein: 36,
    carbs: 35,
    fat: 7,
    ingredients: [{
      name: "Queso cottage",
      amount: 250,
      unit: "g"
    }, {
      name: "Melocotón",
      amount: 150,
      unit: "g"
    }, {
      name: "Semillas de chía",
      amount: 15,
      unit: "g"
    }, {
      name: "Canela",
      amount: 2,
      unit: "g"
    }]
  }];
  const LUNCHES = [{
    name: "Pechuga a la plancha con arroz integral y brócoli",
    calories: 520,
    protein: 50,
    carbs: 58,
    fat: 9,
    ingredients: [{
      name: "Pechuga de pollo",
      amount: 200,
      unit: "g"
    }, {
      name: "Arroz integral cocido",
      amount: 180,
      unit: "g"
    }, {
      name: "Brócoli al vapor",
      amount: 200,
      unit: "g"
    }, {
      name: "AOVE",
      amount: 10,
      unit: "ml"
    }]
  }, {
    name: "Merluza al horno con patata y verduras",
    calories: 490,
    protein: 46,
    carbs: 52,
    fat: 10,
    ingredients: [{
      name: "Merluza",
      amount: 250,
      unit: "g"
    }, {
      name: "Patata",
      amount: 180,
      unit: "g"
    }, {
      name: "Pimiento y cebolla",
      amount: 120,
      unit: "g"
    }, {
      name: "Limón y especias",
      amount: 20,
      unit: "g"
    }]
  }, {
    name: "Ternera magra con quinoa y espinacas salteadas",
    calories: 560,
    protein: 52,
    carbs: 50,
    fat: 14,
    ingredients: [{
      name: "Ternera magra picada",
      amount: 180,
      unit: "g"
    }, {
      name: "Quinoa cocida",
      amount: 160,
      unit: "g"
    }, {
      name: "Espinacas",
      amount: 150,
      unit: "g"
    }, {
      name: "Ajo y AOVE",
      amount: 12,
      unit: "ml"
    }]
  }, {
    name: "Ensalada de salmón con garbanzos y aguacate",
    calories: 510,
    protein: 44,
    carbs: 38,
    fat: 18,
    ingredients: [{
      name: "Salmón al horno",
      amount: 180,
      unit: "g"
    }, {
      name: "Garbanzos cocidos",
      amount: 120,
      unit: "g"
    }, {
      name: "Aguacate",
      amount: 70,
      unit: "g"
    }, {
      name: "Lechuga mixta",
      amount: 100,
      unit: "g"
    }, {
      name: "Vinagreta",
      amount: 15,
      unit: "ml"
    }]
  }, {
    name: "Pavo al curry con arroz basmati",
    calories: 530,
    protein: 48,
    carbs: 54,
    fat: 11,
    ingredients: [{
      name: "Muslo de pavo sin piel",
      amount: 200,
      unit: "g"
    }, {
      name: "Arroz basmati",
      amount: 160,
      unit: "g"
    }, {
      name: "Leche de coco light",
      amount: 100,
      unit: "ml"
    }, {
      name: "Curry y especias",
      amount: 10,
      unit: "g"
    }]
  }, {
    name: "Dorada a la sal con patata al microondas",
    calories: 470,
    protein: 48,
    carbs: 44,
    fat: 12,
    ingredients: [{
      name: "Dorada",
      amount: 300,
      unit: "g"
    }, {
      name: "Patata mediana",
      amount: 200,
      unit: "g"
    }, {
      name: "AOVE y limón",
      amount: 12,
      unit: "ml"
    }]
  }, {
    name: "Lentejas estofadas con verduras",
    calories: 500,
    protein: 30,
    carbs: 72,
    fat: 8,
    ingredients: [{
      name: "Lentejas cocidas",
      amount: 200,
      unit: "g"
    }, {
      name: "Zanahoria y apio",
      amount: 120,
      unit: "g"
    }, {
      name: "Tomate triturado",
      amount: 80,
      unit: "g"
    }, {
      name: "AOVE",
      amount: 10,
      unit: "ml"
    }]
  }];
  const SNACKS = [{
    name: "Yogur griego con nueces",
    calories: 200,
    protein: 18,
    carbs: 12,
    fat: 10,
    ingredients: [{
      name: "Yogur griego 0%",
      amount: 200,
      unit: "g"
    }, {
      name: "Nueces",
      amount: 20,
      unit: "g"
    }]
  }, {
    name: "Batido proteico con leche",
    calories: 220,
    protein: 28,
    carbs: 22,
    fat: 3,
    ingredients: [{
      name: "Proteína whey",
      amount: 30,
      unit: "g"
    }, {
      name: "Leche desnatada",
      amount: 250,
      unit: "ml"
    }]
  }, {
    name: "Manzana con mantequilla de almendras",
    calories: 210,
    protein: 5,
    carbs: 30,
    fat: 9,
    ingredients: [{
      name: "Manzana",
      amount: 180,
      unit: "g"
    }, {
      name: "Mantequilla de almendras",
      amount: 20,
      unit: "g"
    }]
  }, {
    name: "Requesón con fruta del tiempo",
    calories: 190,
    protein: 22,
    carbs: 18,
    fat: 3,
    ingredients: [{
      name: "Requesón",
      amount: 200,
      unit: "g"
    }, {
      name: "Fruta de temporada",
      amount: 150,
      unit: "g"
    }]
  }, {
    name: "Tosta de aguacate con jamón",
    calories: 230,
    protein: 16,
    carbs: 22,
    fat: 9,
    ingredients: [{
      name: "Pan integral",
      amount: 50,
      unit: "g"
    }, {
      name: "Aguacate",
      amount: 60,
      unit: "g"
    }, {
      name: "Jamón serrano",
      amount: 40,
      unit: "g"
    }]
  }, {
    name: "Edamame con sal marina",
    calories: 180,
    protein: 15,
    carbs: 14,
    fat: 6,
    ingredients: [{
      name: "Edamame",
      amount: 150,
      unit: "g"
    }, {
      name: "Sal marina",
      amount: 2,
      unit: "g"
    }]
  }];
  const DINNERS = [{
    name: "Salmón al vapor con espárragos y puré de boniato",
    calories: 480,
    protein: 42,
    carbs: 38,
    fat: 16,
    ingredients: [{
      name: "Salmón",
      amount: 200,
      unit: "g"
    }, {
      name: "Espárragos",
      amount: 150,
      unit: "g"
    }, {
      name: "Boniato",
      amount: 150,
      unit: "g"
    }, {
      name: "AOVE",
      amount: 8,
      unit: "ml"
    }]
  }, {
    name: "Pollo al limón con ensalada de espinacas y feta",
    calories: 420,
    protein: 46,
    carbs: 16,
    fat: 17,
    ingredients: [{
      name: "Pechuga de pollo",
      amount: 180,
      unit: "g"
    }, {
      name: "Espinacas frescas",
      amount: 100,
      unit: "g"
    }, {
      name: "Queso feta",
      amount: 40,
      unit: "g"
    }, {
      name: "Tomate cherry",
      amount: 80,
      unit: "g"
    }]
  }, {
    name: "Pavo a la plancha con calabacín y ensalada",
    calories: 380,
    protein: 44,
    carbs: 18,
    fat: 11,
    ingredients: [{
      name: "Filete de pavo",
      amount: 200,
      unit: "g"
    }, {
      name: "Calabacín a la plancha",
      amount: 200,
      unit: "g"
    }, {
      name: "Lechuga con tomate",
      amount: 100,
      unit: "g"
    }]
  }, {
    name: "Bacalao al pil-pil con verduras al horno",
    calories: 390,
    protein: 46,
    carbs: 20,
    fat: 12,
    ingredients: [{
      name: "Bacalao desalado",
      amount: 220,
      unit: "g"
    }, {
      name: "Pimiento rojo y verde",
      amount: 150,
      unit: "g"
    }, {
      name: "Cebolla",
      amount: 80,
      unit: "g"
    }, {
      name: "AOVE",
      amount: 10,
      unit: "ml"
    }]
  }, {
    name: "Tortilla española con ensalada verde",
    calories: 400,
    protein: 28,
    carbs: 32,
    fat: 16,
    ingredients: [{
      name: "Huevos",
      amount: 3,
      unit: "ud"
    }, {
      name: "Patata",
      amount: 150,
      unit: "g"
    }, {
      name: "Cebolla",
      amount: 50,
      unit: "g"
    }, {
      name: "Ensalada verde",
      amount: 100,
      unit: "g"
    }]
  }, {
    name: "Gambas al ajillo con brócoli y arroz",
    calories: 430,
    protein: 40,
    carbs: 36,
    fat: 13,
    ingredients: [{
      name: "Gambas peladas",
      amount: 200,
      unit: "g"
    }, {
      name: "Brócoli",
      amount: 180,
      unit: "g"
    }, {
      name: "Arroz blanco",
      amount: 100,
      unit: "g"
    }, {
      name: "Ajo y AOVE",
      amount: 12,
      unit: "ml"
    }]
  }, {
    name: "Lubina a la papillote con patata panadera",
    calories: 410,
    protein: 44,
    carbs: 32,
    fat: 11,
    ingredients: [{
      name: "Lubina",
      amount: 250,
      unit: "g"
    }, {
      name: "Patata",
      amount: 130,
      unit: "g"
    }, {
      name: "Limón y hierbas",
      amount: 20,
      unit: "g"
    }, {
      name: "AOVE",
      amount: 8,
      unit: "ml"
    }]
  }];
  const MT = DAYS_ES.map((_, dayI) => {
    const mealTime1 = profile.admitsFasting ? parseInt((profile.preferredTrainingTime || "07:00").split(":")[0]) >= 12 ? "07:30" : "13:00" : "08:00";
    const b = pick(BREAKFASTS, dayI);
    const l = pick(LUNCHES, dayI + 3);
    const s = pick(SNACKS, dayI + 1);
    const d = pick(DINNERS, dayI + 5);
    const baseMeals = [{
      ...b,
      id: `M1`,
      time: mealTime1
    }, {
      ...l,
      id: `M2`,
      time: "14:00"
    }, {
      ...s,
      id: `M3`,
      time: "17:30"
    }, {
      ...d,
      id: `M4`,
      time: "21:00"
    }];
    // Adjust calories proportionally to target
    const rawTotal = baseMeals.reduce((s, m) => s + m.calories, 0);
    const scale = kcal / rawTotal;
    return baseMeals.map(m => ({
      ...m,
      calories: Math.round(m.calories * scale),
      protein: Math.round(m.protein * scale),
      carbs: Math.round(m.carbs * scale),
      fat: Math.round(m.fat * scale),
      ingredients: m.ingredients.map(ing => ({
        ...ing,
        amount: Math.round(ing.amount * scale)
      }))
    }));
  });
  const WT = [{
    focus: "Pecho + Tríceps",
    estimatedDuration: 65,
    warmup: "Bici + movilidad hombros",
    exercises: [{
      id: "E1",
      order: 1,
      name: "Press Banca con Barra",
      sets: 4,
      reps: "8-10",
      effortPct: 75,
      rpe: 8,
      toFailure: false,
      failureNote: "Última serie al 80%",
      restSeconds: 120,
      technique: "3 seg bajada, explotar arriba",
      targetMuscles: "Pecho mayor, tríceps"
    }, {
      id: "E2",
      order: 2,
      name: "Press Inclinado Mancuernas",
      sets: 3,
      reps: "10-12",
      effortPct: 70,
      rpe: 7,
      toFailure: false,
      failureNote: null,
      restSeconds: 90,
      technique: "Codos a 45°",
      targetMuscles: "Pecho superior"
    }, {
      id: "E3",
      order: 3,
      name: "Fondos en Paralelas",
      sets: 3,
      reps: "al fallo",
      effortPct: 85,
      rpe: 9,
      toFailure: true,
      failureNote: "Al fallo técnico",
      restSeconds: 90,
      technique: "Cuerpo inclinado adelante",
      targetMuscles: "Pecho inferior, tríceps"
    }, {
      id: "E4",
      order: 4,
      name: "Extensiones Tríceps Polea",
      sets: 3,
      reps: "12-15",
      effortPct: 65,
      rpe: 7,
      toFailure: false,
      failureNote: null,
      restSeconds: 60,
      technique: "Codos pegados al cuerpo",
      targetMuscles: "Tríceps lateral"
    }]
  }, {
    focus: "Espalda + Bíceps",
    estimatedDuration: 70,
    warmup: "Remo ligero + movilidad dorsal",
    exercises: [{
      id: "E1",
      order: 1,
      name: "Dominadas con Peso",
      sets: 4,
      reps: "6-8",
      effortPct: 80,
      rpe: 8,
      toFailure: false,
      failureNote: "Sin lastre si es necesario",
      restSeconds: 150,
      technique: "Escápulas bajas, tirar codo a cadera",
      targetMuscles: "Dorsal, bíceps"
    }, {
      id: "E2",
      order: 2,
      name: "Remo con Barra",
      sets: 4,
      reps: "8-10",
      effortPct: 75,
      rpe: 8,
      toFailure: false,
      failureNote: null,
      restSeconds: 120,
      technique: "Espalda paralela, tirar al ombligo",
      targetMuscles: "Dorsal, trapecio"
    }, {
      id: "E3",
      order: 3,
      name: "Curl Bíceps con Barra",
      sets: 3,
      reps: "10-12",
      effortPct: 70,
      rpe: 7,
      toFailure: false,
      failureNote: "Última serie al fallo",
      restSeconds: 90,
      technique: "Sin balanceo, supinación completa",
      targetMuscles: "Bíceps"
    }, {
      id: "E4",
      order: 4,
      name: "Curl Martillo Alterno",
      sets: 3,
      reps: "12",
      effortPct: 65,
      rpe: 7,
      toFailure: false,
      failureNote: null,
      restSeconds: 60,
      technique: "Pulgar arriba, controlar bajada",
      targetMuscles: "Braquial, braquiorradial"
    }]
  }, {
    focus: "Pierna Completa",
    estimatedDuration: 75,
    warmup: "Cinta + movilidad cadera",
    exercises: [{
      id: "E1",
      order: 1,
      name: "Sentadilla con Barra",
      sets: 4,
      reps: "6-8",
      effortPct: 80,
      rpe: 8,
      toFailure: false,
      failureNote: "Última serie al 85% al fallo",
      restSeconds: 180,
      technique: "Rodillas alineadas, hasta paralelo",
      targetMuscles: "Cuádriceps, glúteos"
    }, {
      id: "E2",
      order: 2,
      name: "Prensa de Piernas",
      sets: 3,
      reps: "10-12",
      effortPct: 70,
      rpe: 7,
      toFailure: false,
      failureNote: null,
      restSeconds: 120,
      technique: "No bloquear rodillas",
      targetMuscles: "Cuádriceps, glúteos"
    }, {
      id: "E3",
      order: 3,
      name: "Peso Muerto Rumano",
      sets: 3,
      reps: "10",
      effortPct: 70,
      rpe: 7,
      toFailure: false,
      failureNote: null,
      restSeconds: 120,
      technique: "Cadera atrás, espalda recta",
      targetMuscles: "Isquios, glúteos"
    }, {
      id: "E4",
      order: 4,
      name: "Elevación de Gemelos",
      sets: 4,
      reps: "15-20",
      effortPct: 60,
      rpe: 7,
      toFailure: true,
      failureNote: "Al fallo cada serie",
      restSeconds: 60,
      technique: "Máximo rango, pausa arriba",
      targetMuscles: "Gemelos"
    }]
  }, {
    focus: "Hombro + Core",
    estimatedDuration: 60,
    warmup: "Rotaciones manguito + activación core",
    exercises: [{
      id: "E1",
      order: 1,
      name: "Press Militar con Barra",
      sets: 4,
      reps: "8-10",
      effortPct: 72,
      rpe: 8,
      toFailure: false,
      failureNote: null,
      restSeconds: 120,
      technique: "Core apretado, no arquear lumbar",
      targetMuscles: "Deltoides, tríceps"
    }, {
      id: "E2",
      order: 2,
      name: "Elevaciones Laterales",
      sets: 4,
      reps: "12-15",
      effortPct: 60,
      rpe: 7,
      toFailure: true,
      failureNote: "Última serie drop-set al fallo",
      restSeconds: 60,
      technique: "Codos ligeramente flexionados",
      targetMuscles: "Deltoides lateral"
    }, {
      id: "E3",
      order: 3,
      name: "Plancha con Rotación",
      sets: 3,
      reps: "10 c/lado",
      effortPct: 55,
      rpe: 6,
      toFailure: false,
      failureNote: null,
      restSeconds: 60,
      technique: "Caderas estables",
      targetMuscles: "Core, oblicuos"
    }, {
      id: "E4",
      order: 4,
      name: "Rueda Abdominal",
      sets: 3,
      reps: "8-12",
      effortPct: 70,
      rpe: 8,
      toFailure: true,
      failureNote: "Al fallo última serie",
      restSeconds: 90,
      technique: "Espalda plana",
      targetMuscles: "Recto abdominal"
    }]
  }];
  const maxMin = parseInt(profile.maxTrainingMinutes) || 60;
  const dietPlan = DAYS_ES.map((day, i) => {
    const t = MT[i % MT.length];
    return {
      day,
      dayIndex: i,
      totalCalories: kcal,
      meals: t.map(m => ({
        ...m,
        id: `${day[0]}${i}-${m.id}`
      }))
    };
  });
  const workoutPlan = DAYS_ES.map((day, i) => {
    const isRest = !tdays.includes(i);
    if (isRest) {
      const acts = profile.activeRestActivities || [];
      const restAct = profile.admitsActiveRest && acts.length > 0;
      const actName = acts[0] === "yoga" ? "Yoga / Stretching 30 min" : acts[0] === "caminar" ? "Caminata 30 min" : acts[0] === "correr" ? "Carrera suave 25 min" : acts[0] === "bici" ? "Bicicleta suave 30 min" : acts[0] === "nadar" ? "Natación suave 20 min" : acts[0] === "pilates" ? "Pilates 30 min" : "Movilidad articular 20 min";
      if (restAct) return {
        day,
        dayIndex: i,
        isRest: false,
        focus: "Descanso Activo",
        estimatedDuration: 30,
        warmup: "Preparación ligera",
        exercises: [{
          id: `${day[0]}${i}-AR`,
          order: 1,
          name: actName,
          sets: 1,
          reps: "30 min",
          effortPct: 40,
          rpe: 4,
          toFailure: false,
          failureNote: null,
          restSeconds: 0,
          technique: "Ritmo cómodo, sin forzar",
          targetMuscles: "Recuperación general"
        }]
      };
      return {
        day,
        dayIndex: i,
        isRest: true
      };
    }
    const eq = profile.equipmentList || [profile.equipment || "gym"];
    const wt = WT[tdays.indexOf(i) % WT.length];
    const dur = Math.min(wt.estimatedDuration, maxMin);
    const exCount = Math.max(2, Math.round(wt.exercises.length * (dur / wt.estimatedDuration)));
    return {
      day,
      dayIndex: i,
      isRest: false,
      ...wt,
      estimatedDuration: dur,
      warmup: `${trainTime}h - ${wt.warmup}`,
      exercises: wt.exercises.slice(0, exCount).map(e => ({
        ...e,
        id: `${day[0]}${i}-${e.id}`
      }))
    };
  });
  const trainNote = `Entrenos a las ${trainTime}h, dias: ${tdays.map(i => DAYS_ES[i].slice(0, 3)).join(", ")}.`;
  // Generate rationale
  const tdeeStr = Math.round(tdee);
  const adjPct = goal.includes("grasa") ? "-18%" : goal.includes("músculo") ? "+10%" : "-5%";
  const bfDiff = (parseFloat(profile.bodyFat) - parseFloat(profile.targetBodyFat || 12)).toFixed(1);
  const mmDiff = (parseFloat(profile.targetMuscleMass || 60) - parseFloat(profile.muscleMass)).toFixed(1);
  const rationale = {
    calorias: `Tu TDEE calculado es ${tdeeStr} kcal/día (Mifflin-St Jeor × ${act} por actividad ${profile.jobType}). Con un ajuste de ${adjPct} para ${goal.toLowerCase()}, tu objetivo queda en ${kcal} kcal/día — un déficit/superávit sostenible que preserva el músculo.`,
    proteina: `${prot}g de proteína al día equivale a ${(prot / w).toFixed(1)}g por kg de peso corporal. Este rango (2.2-2.5g/kg) está respaldado por la evidencia científica para maximizar la retención muscular en fase de ${goal.toLowerCase()} y favorecer la síntesis proteica post-entreno.`,
    entreno: `${tdays.length} días de entrenamiento semanales con un máximo de ${maxMin} min/sesión es óptimo para tu nivel ${profile.experience} con equipamiento ${(profile.equipmentList || ["gym"]).join(", ")}. Permite estímulo suficiente para progresar sin comprometer la recuperación.`,
    timeline: `Con ${bfDiff}% de grasa a eliminar y ${mmDiff}% de músculo a ganar en ${profile.timelineMonths} meses, el ritmo propuesto es de ~${(parseFloat(bfDiff) / parseInt(profile.timelineMonths)).toFixed(1)}% de grasa/mes — dentro del rango saludable de 0.5-1% mensual que minimiza la pérdida muscular.`,
    adaptaciones: `Plan ajustado para trabajo ${profile.jobType} (factor actividad ${act}x). ${profile.admitsFasting ? "Ventana de ayuno incluida en la dieta. " : ""}${profile.admitsActiveRest ? "Descanso activo (" + (profile.activeRestActivities || []).join(", ") + ") en días libres. " : ""}${profile.restrictions ? "Restricciones alimentarias (" + profile.restrictions + ") aplicadas." : ""}`
  };
  return {
    dailyCalories: kcal,
    dailyMacros: {
      protein: prot,
      carbs,
      fat
    },
    planRationale: rationale,
    planNotes: `Plan de ${kcal} kcal/dia para ${goal.toLowerCase()}. Proteina ${prot}g/dia. ${trainNote}`,
    dietPlan,
    workoutPlan
  };
}
/* ── AI GENERATION ── */
async function generatePlans(profile) {
  const basePlan = makeDemoPlan(profile);
  const GK = "AIzaSyBwdsMq5caW2snqV1eMBxGQ989KVFX39u8";
  const w = parseFloat(profile.weight || 75),
    h = parseFloat(profile.height || 178),
    a = parseFloat(profile.age || 44);
  const isFem = profile.sex === "femenino";
  const bmr = isFem ? 10 * w + 6.25 * h - 5 * a - 161 : 10 * w + 6.25 * h - 5 * a + 5;
  const actF = {
    sedentario: 1.2,
    leve: 1.375,
    activo: 1.55,
    muy_activo: 1.725
  }[profile.jobType] || 1.375;
  const tdee = Math.round(bmr * actF);
  const kcal = basePlan.dailyCalories;
  const prot = basePlan.dailyMacros.protein;
  const days = profile.trainingDaysOfWeek || [];
  const equip = (profile.equipmentList || ["gym"]).join(", ");
  const bfDiff = Math.abs(parseFloat(profile.bodyFat || 17) - parseFloat(profile.targetBodyFat || 12)).toFixed(1);
  const mmDiff = Math.abs(parseFloat(profile.targetMuscleMass || 60) - parseFloat(profile.muscleMass || 55)).toFixed(1);
  const months = parseInt(profile.timelineMonths) || 5;
  const parts = [];
  parts.push("Eres nutricionista deportivo. Responde SOLO JSON sin markdown.");
  parts.push("Perfil: " + profile.sex + " " + profile.age + "a " + profile.weight + "kg " + profile.height + "cm");
  parts.push("Grasa " + profile.bodyFat + "% obj " + profile.targetBodyFat + "% | musculo " + profile.muscleMass + "% obj " + profile.targetMuscleMass + "%");
  parts.push("Objetivo: " + profile.goalType + " en " + months + " meses | trabajo: " + profile.jobType);
  parts.push("Entrena: " + days.join("-") + " max " + (profile.maxTrainingMinutes || 60) + "min nivel " + profile.experience + " equipo " + equip);
  if (profile.admitsFasting) parts.push("Fasting: si");
  if (profile.admitsActiveRest) parts.push("Descanso activo: " + (profile.activeRestActivities || []).join(", "));
  if (profile.restrictions) parts.push("Restricciones: " + profile.restrictions);
  if (profile.additionalGoals) parts.push("Notas: " + profile.additionalGoals);
  parts.push("TDEE: " + tdee + " kcal. Plan: " + kcal + " kcal " + prot + "g proteina");
  parts.push("Responde exactamente: {\"planNotes\":\"resumen 2 frases\",\"calorias\":\"razon\",\"proteina\":\"razon\",\"entreno\":\"razon\",\"timeline\":\"proyeccion\",\"adaptaciones\":\"ajustes\"}");
  const prompt = parts.join(". ");
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      }),
      signal: controller.signal
    });
    clearTimeout(timer);
    const d = await r.json();
    if (!r.ok) throw new Error("HTTP " + r.status + ": " + (d.error?.message || ""));
    const text = d.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const j1 = text.indexOf("{"),
      j2 = text.lastIndexOf("}");
    if (j1 === -1) throw new Error("No JSON");
    const ai = JSON.parse(text.slice(j1, j2 + 1));
    console.log("Gemini OK");
    basePlan.planNotes = ai.planNotes || basePlan.planNotes;
    basePlan.planRationale = {
      calorias: ai.calorias || "",
      proteina: ai.proteina || "",
      entreno: ai.entreno || "",
      timeline: ai.timeline || "",
      adaptaciones: ai.adaptaciones || ""
    };
    return basePlan;
  } catch (e) {
    console.warn("Gemini fallback:", e.message);
    basePlan.planRationale = {
      calorias: "TDEE " + tdee + " kcal ajustado a " + kcal + " kcal para " + profile.goalType.toLowerCase() + ".",
      proteina: prot + "g/dia = " + (prot / w).toFixed(1) + "g/kg. Optimo para preservar musculo.",
      entreno: days.length + " dias max " + (profile.maxTrainingMinutes || 60) + "min. Nivel " + profile.experience + ".",
      timeline: bfDiff + "% grasa en " + months + " meses = " + (parseFloat(bfDiff) / months).toFixed(1) + "% grasa/mes.",
      adaptaciones: "Trabajo " + profile.jobType + " factor " + actF + "x."
    };
    return basePlan;
  }
}

/* ── MEAL CARD ── */
function MealCard({
  meal,
  mealLog,
  onUpdate,
  mealLabel
}) {
  const isDone = mealLog?.status === "done",
    isAlt = mealLog?.status === "alternative",
    isLogged = isDone || isAlt;
  const [open, setOpen] = useState(false);
  const [altForm, setAltForm] = useState(false);
  const [alt, setAlt] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });
  const iS = {
    background: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    color: C.text,
    padding: "8px 12px",
    fontSize: 16,
    fontFamily: "'Chakra Petch',sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box"
  };
  const brdColor = isDone ? "rgba(22,163,74,0.4)" : isAlt ? "rgba(234,88,12,0.4)" : C.border;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, mealLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 5,
      paddingLeft: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, mealLabel.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 13,
      color: C.sub,
      letterSpacing: 2
    }
  }, mealLabel.label.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: C.border
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: isDone ? "rgba(22,163,74,0.04)" : isAlt ? "rgba(234,88,12,0.04)" : "#FFFFFF",
      border: `1px solid ${brdColor}`,
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      flexShrink: 0,
      background: isDone ? "rgba(22,163,74,0.12)" : isAlt ? "rgba(234,88,12,0.12)" : C.subtle,
      border: `1px solid ${brdColor}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16
    }
  }, isDone ? "✅" : isAlt ? "🔄" : "🍽️"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: isDone ? "rgba(22,163,74,0.9)" : isAlt ? C.orange : C.text,
      fontWeight: 600,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textDecoration: isLogged ? "line-through" : "none",
      textDecorationColor: "rgba(22,163,74,0.4)"
    }
  }, meal.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 2,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 15,
      color: isDone ? "rgba(22,163,74,0.7)" : isAlt ? C.orange : C.accent
    }
  }, meal.calories, " kcal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub
    }
  }, meal.time), isDone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "rgba(22,163,74,0.8)",
      marginLeft: "auto"
    }
  }, "\u2713 COMPLETADO"), isAlt && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.orange,
      marginLeft: "auto"
    }
  }, "~ SUSTITUIDO"))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.sub,
      fontSize: 11,
      flexShrink: 0
    }
  }, open ? "▲" : "▼")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border}`,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8,
      marginBottom: 14
    }
  }, [["PROT", meal.protein, C.accent], ["CARB", meal.carbs, C.blue], ["GRAS", meal.fat, C.orange]].map(([l, v, col]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: "center",
      background: C.subtle,
      borderRadius: 8,
      padding: "8px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 19,
      color: col
    }
  }, v, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.sub
    }
  }, "g")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 9,
      color: C.sub,
      letterSpacing: 1
    }
  }, l)))), /*#__PURE__*/React.createElement(Lbl, null, "Ingredientes"), meal.ingredients?.map((ing, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "7px 0",
      borderBottom: i < meal.ingredients.length - 1 ? `1px solid ${C.border}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: C.text
    }
  }, ing.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: C.accent
    }
  }, ing.amount, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: C.sub
    }
  }, " ", ing.unit)))), isAlt && mealLog?.data && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 13,
      background: C.orangeBg,
      border: `1px solid ${C.orangeBrd}`,
      borderRadius: 10,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    color: C.orange
  }, "Lo que comiste"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: C.text,
      fontWeight: 600
    }
  }, mealLog.data.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginTop: 4
    }
  }, mealLog.data.calories, "kcal \xB7 P:", mealLog.data.protein, "g \xB7 C:", mealLog.data.carbs, "g \xB7 G:", mealLog.data.fat, "g"), (() => {
    const d = mealLog.data.calories - meal.calories;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 10,
        color: d > 0 ? C.red : C.green,
        marginTop: 4
      }
    }, "\u0394 ", d > 0 ? "+" : "", d, " kcal");
  })()), !isLogged && !altForm && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => onUpdate({
      status: "done"
    }),
    variant: "success",
    style: {
      flex: 1
    }
  }, "\u2713 COMIDO"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setAltForm(true),
    variant: "danger",
    style: {
      flex: 1
    }
  }, "\u2717 NO PUDE")), isLogged && /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      onUpdate(undefined);
      setAltForm(false);
    },
    variant: "ghost",
    style: {
      width: "100%",
      marginTop: 12
    }
  }, "DESMARCAR"), altForm && !isAlt && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 13,
      background: C.subtle,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "\xBFQu\xE9 comiste?"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...iS,
      marginBottom: 8
    },
    placeholder: "Nombre del plato",
    value: alt.name,
    onChange: e => setAlt(a => ({
      ...a,
      name: e.target.value
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    placeholder: "Calor\xEDas",
    value: alt.calories,
    onChange: e => setAlt(a => ({
      ...a,
      calories: e.target.value
    }))
  }), /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    placeholder: "Prote\xEDna (g)",
    value: alt.protein,
    onChange: e => setAlt(a => ({
      ...a,
      protein: e.target.value
    }))
  }), /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    placeholder: "Carbos (g)",
    value: alt.carbs,
    onChange: e => setAlt(a => ({
      ...a,
      carbs: e.target.value
    }))
  }), /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    placeholder: "Grasa (g)",
    value: alt.fat,
    onChange: e => setAlt(a => ({
      ...a,
      fat: e.target.value
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      if (!alt.name || !alt.calories) return;
      onUpdate({
        status: "alternative",
        data: {
          name: alt.name,
          calories: +alt.calories,
          protein: +alt.protein || 0,
          carbs: +alt.carbs || 0,
          fat: +alt.fat || 0
        }
      });
      setAltForm(false);
    },
    style: {
      flex: 1
    }
  }, "GUARDAR"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => setAltForm(false),
    style: {
      flex: 1
    }
  }, "CANCELAR"))))));
}
/* ── SUPPLEMENT CARD ── */
function SupplementCard({
  supp
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: `1px solid ${supp.color}30`,
      borderRadius: 14,
      marginBottom: 10,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      flexShrink: 0,
      background: C.subtle,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18
    }
  }, supp.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: C.text,
      fontWeight: 600
    }
  }, supp.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 15,
      color: supp.color,
      marginTop: 2
    }
  }, supp.dose)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.sub,
      fontSize: 11
    }
  }, open ? "▲" : "▼")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border}`,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `${supp.color}10`,
      border: `1px solid ${supp.color}25`,
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: supp.color,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\u23F0 CU\xC1NDO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text
    }
  }, supp.timing)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.subtle,
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: supp.detail ? 10 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\uD83D\uDCA1 POR QU\xC9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text,
      lineHeight: 1.55
    }
  }, supp.why)), supp.detail && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.blueBg || "rgba(37,99,235,0.08)",
      border: `1px solid rgba(37,99,235,0.2)`,
      borderRadius: 10,
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.blue,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\uD83D\uDCCB NOTA PR\xC1CTICA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text,
      lineHeight: 1.55
    }
  }, supp.detail))));
}
/* ── EXERCISE CARD ── */
function ExerciseCard({
  exercise: ex,
  exLog,
  onUpdate
}) {
  const [open, setOpen] = useState(false);
  const isDone = exLog?.done === true,
    isMiss = exLog?.done === false;
  const ec = ex.effortPct >= 90 ? C.red : ex.effortPct >= 75 ? C.orange : C.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: `1px solid ${isDone ? "rgba(22,163,74,0.4)" : isMiss ? "rgba(220,38,38,0.4)" : C.border}`,
      borderRadius: 14,
      marginBottom: 10,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      flexShrink: 0,
      background: isDone ? "rgba(22,163,74,0.1)" : isMiss ? "rgba(220,38,38,0.1)" : C.subtle,
      border: `1px solid ${isDone ? "rgba(22,163,74,0.3)" : isMiss ? "rgba(220,38,38,0.3)" : C.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, isDone ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2705") : isMiss ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u274C") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 18,
      color: C.sub
    }
  }, ex.order)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: C.text,
      fontWeight: 600
    }
  }, ex.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 3,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: C.text
    }
  }, ex.sets, "\xD7", ex.reps), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: ec
    }
  }, "\u26A1", ex.effortPct, "% RPE ", ex.rpe), ex.toFailure && /*#__PURE__*/React.createElement("span", {
    style: {
      background: C.redBg,
      border: `1px solid ${C.redBrd}`,
      borderRadius: 6,
      padding: "1px 7px",
      fontSize: 9,
      color: C.red,
      fontFamily: "'Chakra Petch',sans-serif"
    }
  }, "AL FALLO"))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.sub,
      fontSize: 11
    }
  }, open ? "▲" : "▼")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border}`,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8,
      marginBottom: 14
    }
  }, [["ESFUERZO", `${ex.effortPct}%`, ec], ["RPE", ex.rpe, ec], ["DESCANSO", `${ex.restSeconds}s`, C.blue]].map(([l, v, col]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: "center",
      background: C.subtle,
      borderRadius: 8,
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 20,
      color: col
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 9,
      color: C.sub,
      letterSpacing: 1
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "#EEE",
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${ex.effortPct}%`,
      background: `linear-gradient(90deg,${C.accent},${ec})`,
      borderRadius: 3
    }
  }))), ex.failureNote && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.redBg,
      border: `1px solid ${C.redBrd}`,
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    color: C.red
  }, "\u26A0 FALLO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text
    }
  }, ex.failureNote)), ex.technique && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.blueBg || "rgba(37,99,235,0.08)",
      border: `1px solid ${C.blueBrd || "rgba(37,99,235,0.2)"}`,
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    color: C.blue
  }, "\uD83D\uDCA1 T\xC9CNICA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text
    }
  }, ex.technique)), ex.targetMuscles && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginBottom: 14
    }
  }, "\uD83C\uDFAF ", ex.targetMuscles), !isDone && !isMiss ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => onUpdate({
      done: true
    }),
    variant: "success",
    style: {
      flex: 1
    }
  }, "\u2713 HECHO"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => onUpdate({
      done: false
    }),
    variant: "danger",
    style: {
      flex: 1
    }
  }, "\u2717 NO HICE")) : /*#__PURE__*/React.createElement(Btn, {
    onClick: () => onUpdate(undefined),
    variant: "ghost",
    style: {
      width: "100%"
    }
  }, "DESMARCAR")));
}
/* ── DAY SELECTOR ── */
function DaySelector({
  selected,
  onChange,
  workoutPlan
}) {
  const ti = todayDayIdx();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      overflowX: "auto",
      marginBottom: 16,
      paddingBottom: 2
    }
  }, DAYS_SHORT.map((d, i) => {
    const isRest = workoutPlan ? workoutPlan[i]?.isRest : false,
      isSel = selected === i;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange(i),
      style: {
        flexShrink: 0,
        background: isSel ? C.grad : "#FFFFFF",
        color: isSel ? "#FFFFFF" : isRest ? C.sub : C.text,
        border: `1px solid ${isSel ? C.accent : C.border}`,
        borderRadius: 10,
        padding: "6px 12px",
        fontSize: 10,
        cursor: "pointer",
        fontFamily: "'Chakra Petch',sans-serif",
        fontWeight: isSel ? 700 : 400,
        transition: "all .15s",
        boxShadow: isSel ? "0 2px 8px rgba(109,40,217,0.3)" : "0 1px 3px rgba(0,0,0,0.05)"
      }
    }, d, i === ti && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: isSel ? "#FFFFFF" : C.accent,
        margin: "3px auto 0"
      }
    }));
  }));
}
/* ── FASTING CARD ── */
function FastingCard({
  goal,
  calories
}) {
  const [open, setOpen] = useState(false);
  const isLoss = goal?.includes("grasa");
  const protocol = isLoss ? "16:8" : "14:10";
  const startH = isLoss ? 13 : 12,
    endH = isLoss ? 21 : 22;
  const ws = `${String(startH).padStart(2, "0")}:00`,
    we = `${String(endH).padStart(2, "0")}:00`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      border: "1px solid rgba(37,99,235,0.25)",
      borderRadius: 14,
      marginBottom: 13,
      overflow: "hidden",
      boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    style: {
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "rgba(37,99,235,0.1)",
      border: "1px solid rgba(37,99,235,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      flexShrink: 0
    }
  }, "\u23F1\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 16,
      color: C.blue,
      letterSpacing: 1
    }
  }, "AYUNO INTERMITENTE ", protocol), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginTop: 2
    }
  }, "Ventana alimentaci\xF3n: ", ws, " \u2013 ", we)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.sub,
      fontSize: 11
    }
  }, open ? "▲" : "▼")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border}`,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(37,99,235,0.06)",
      border: "1px solid rgba(37,99,235,0.2)",
      borderRadius: 10,
      padding: "12px 14px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.blue,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\uD83C\uDF7D\uFE0F COME DESDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 28,
      color: C.blue
    }
  }, ws)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(37,99,235,0.06)",
      border: "1px solid rgba(37,99,235,0.2)",
      borderRadius: 10,
      padding: "12px 14px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.blue,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\uD83D\uDEAB DEJA DE COMER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 28,
      color: C.blue
    }
  }, we))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(234,88,12,0.06)",
      border: "1px solid rgba(234,88,12,0.2)",
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.orange,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\u23F3 PER\xCDODO DE AYUNO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 13,
      color: C.text
    }
  }, we, " \u2192 ", ws, " (", protocol.split(":")[1], "h de ayuno)")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      lineHeight: 1.6
    }
  }, "Durante el ayuno: agua, caf\xE9 solo e infusiones sin az\xFAcar.", isLoss ? " El 16:8 potencia la oxidación de grasa." : " El 14:10 es más llevadero para recomposición.")));
}
/* ── DIET TAB ── */
function DietTab({
  plans,
  logs,
  updateLog,
  profile
}) {
  const [day, setDay] = useState(todayDayIdx());
  const lk = day === todayDayIdx() ? todayStr() : `day-${day}`;
  const dl = logs[lk] || {},
    dp = plans?.dietPlan?.[day];
  const done = dp?.meals?.filter(m => ["done", "alternative"].includes(dl.meals?.[m.id]?.status)).length || 0;
  const supps = getSupplements(profile);
  const phase = getPhaseSuggestion(profile, plans);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H1, {
    size: 26,
    style: {
      marginBottom: 14
    }
  }, "DIETA"), plans?.planNotes && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,rgba(26,184,160,0.07),rgba(37,99,235,0.04))",
      border: "1px solid rgba(26,184,160,0.2)",
      borderRadius: 11,
      padding: 12,
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text,
      lineHeight: 1.5
    }
  }, plans.planNotes)), profile?.admitsFasting && /*#__PURE__*/React.createElement(FastingCard, {
    goal: profile?.goalType,
    calories: plans?.dailyCalories
  }), phase && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 13,
      border: "1px solid rgba(234,88,12,0.25)"
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    color: C.orange
  }, "\uD83D\uDCC5 ESTRATEGIA DE FASES RECOMENDADA"), phase.phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: i < phase.phases.length - 1 ? 14 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, p.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 17,
      color: p.color
    }
  }, p.name, " \xB7 ", p.weeks, " sem"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub
    }
  }, p.from, " \u2192 ", p.to)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 20,
      color: p.color
    }
  }, p.calories), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 9,
      color: C.sub
    }
  }, "KCAL/D\xCDA"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      paddingLeft: 28
    }
  }, p.description), i < phase.phases.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: C.border,
      margin: "12px 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "10px 14px",
      background: C.subtle,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      lineHeight: 1.5
    }
  }, "\uD83D\uDCA1 ", phase.note))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Objetivo diario"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 6
    }
  }, [["KCAL", plans?.dailyCalories, C.accent], ["PROT", `${plans?.dailyMacros.protein}g`, C.accent], ["CARB", `${plans?.dailyMacros.carbs}g`, C.blue], ["GRAS", `${plans?.dailyMacros.fat}g`, C.orange]].map(([l, v, col]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 19,
      color: col
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 9,
      color: C.sub,
      letterSpacing: 1
    }
  }, l))))), /*#__PURE__*/React.createElement(DaySelector, {
    selected: day,
    onChange: setDay
  }), dp ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub
    }
  }, dp.totalCalories, " kcal \xB7 ", dp.meals?.length, " comidas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.green
    }
  }, done, "/", dp.meals?.length, " \u2713")), getInterleavedItems(dp.meals, supps).map((item, i) => {
    if (item.type === "supp") {
      return /*#__PURE__*/React.createElement("div", {
        key: "s" + i
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 5,
          paddingLeft: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13
        }
      }, item.data.blockIcon), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: 13,
          color: C.sub,
          letterSpacing: 2
        }
      }, item.data.blockTitle.toUpperCase()), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          height: 1,
          background: C.border
        }
      })), /*#__PURE__*/React.createElement(SupplementCard, {
        supp: item.data
      }));
    }
    const m = item.data,
      ml = getMealLabel(m.time);
    return /*#__PURE__*/React.createElement(MealCard, {
      key: m.id,
      meal: m,
      mealLog: dl.meals?.[m.id],
      onUpdate: v => updateLog(lk, "meals", m.id, v),
      mealLabel: ml
    });
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: C.sub,
      fontFamily: "'Chakra Petch',sans-serif"
    }
  }, "Plan no disponible"));
}
/* ── WORKOUT TAB ── */
function WorkoutTab({
  plans,
  logs,
  updateLog
}) {
  const [day, setDay] = useState(todayDayIdx());
  const lk = day === todayDayIdx() ? todayStr() : `day-${day}`;
  const dl = logs[lk] || {},
    dp = plans?.workoutPlan?.[day];
  const exDone = dp?.exercises?.filter(e => dl.exercises?.[e.id]?.done === true).length || 0;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H1, {
    size: 26,
    style: {
      marginBottom: 14
    }
  }, "ENTRENAMIENTO"), /*#__PURE__*/React.createElement(DaySelector, {
    selected: day,
    onChange: setDay,
    workoutPlan: plans?.workoutPlan
  }), dp ? /*#__PURE__*/React.createElement(React.Fragment, null, !dp.isRest && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H1, {
    size: 20
  }, dp.focus), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginTop: 3
    }
  }, "\u23F1 ", dp.estimatedDuration, " min \xB7 ", dp.exercises?.length, " ejercicios")), /*#__PURE__*/React.createElement(Ring, {
    pct: dp.exercises?.length ? exDone / dp.exercises.length : 0,
    size: 54,
    stroke: 5,
    color: C.accent
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 15,
      color: C.accent
    }
  }, exDone, "/", dp.exercises?.length))), dp.warmup && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 11,
      paddingTop: 11,
      borderTop: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, "\uD83D\uDD25 CALENTAMIENTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text
    }
  }, dp.warmup))), dp.isRest && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "28px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      marginBottom: 10
    }
  }, "\uD83D\uDE34"), /*#__PURE__*/React.createElement(H1, {
    size: 22
  }, "D\xCDA DE DESCANSO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub,
      marginTop: 8
    }
  }, "Recuperaci\xF3n activa o descanso completo.")), dp.exercises?.map(ex => /*#__PURE__*/React.createElement(ExerciseCard, {
    key: ex.id,
    exercise: ex,
    exLog: dl.exercises?.[ex.id],
    onUpdate: v => updateLog(lk, "exercises", ex.id, v)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: C.sub
    }
  }, "Plan no disponible"));
}
/* ── PROGRESS TAB ── */
function ProgressTab({
  profile,
  plans,
  logs,
  measurements,
  addMeasurement
}) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    weight: "",
    bodyFat: "",
    muscleMass: "",
    notes: ""
  });
  const iS = {
    background: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: 9,
    color: C.text,
    padding: "10px 13px",
    fontSize: 16,
    fontFamily: "'Chakra Petch',sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box"
  };
  const submit = () => {
    if (!form.weight) return;
    addMeasurement({
      date: todayStr(),
      weight: parseFloat(form.weight),
      bodyFat: form.bodyFat ? parseFloat(form.bodyFat) : null,
      muscleMass: form.muscleMass ? parseFloat(form.muscleMass) : null,
      notes: form.notes
    });
    setForm({
      weight: "",
      bodyFat: "",
      muscleMass: "",
      notes: ""
    });
    setShowForm(false);
  };
  const dev = (() => {
    let mEx = 0,
      mM = 0,
      cD = 0,
      pD = 0;
    Object.values(logs).forEach(dl => {
      Object.values(dl.exercises || {}).forEach(e => {
        if (e.done === false) mEx++;
      });
      Object.entries(dl.meals || {}).forEach(([mId, ml]) => {
        if (ml.status === "alternative" && ml.data) {
          let p = null;
          plans?.dietPlan?.forEach(dp => dp.meals?.forEach(m => {
            if (m.id === mId) p = m;
          }));
          if (p) {
            cD += ml.data.calories - p.calories;
            pD += (ml.data.protein || 0) - p.protein;
          }
          mM++;
        }
      });
    });
    return {
      mEx,
      mM,
      cD,
      pD
    };
  })();
  const latest = measurements.length > 0 ? measurements[measurements.length - 1] : null;
  const init = profile ? {
    bodyFat: parseFloat(profile.bodyFat),
    muscleMass: parseFloat(profile.muscleMass),
    weight: parseFloat(profile.weight)
  } : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(H1, {
    size: 26
  }, "PROGRESO"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setShowForm(v => !v),
    sm: true
  }, "+ MEDICI\xD3N")), showForm && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Nueva medici\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 9
    }
  }, [["PESO (kg)", "weight", "75.0"], ["% GRASA", "bodyFat", "17"], ["% MÚSCULO", "muscleMass", "55"], ["NOTAS", "notes", "Opcional"]].map(([l, k, ph]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("input", {
    style: iS,
    placeholder: ph,
    value: form[k],
    type: k === "notes" ? "text" : "number",
    onChange: e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }))
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: submit,
    style: {
      flex: 1
    }
  }, "GUARDAR"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => setShowForm(false),
    style: {
      flex: 1
    }
  }, "CANCELAR"))), profile && /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Objetivo vs Actual"), [{
    label: "% Grasa",
    cur: latest?.bodyFat ?? init?.bodyFat,
    tgt: parseFloat(profile.targetBodyFat),
    col: C.orange,
    better: "lower"
  }, {
    label: "% Músculo",
    cur: latest?.muscleMass ?? init?.muscleMass,
    tgt: parseFloat(profile.targetMuscleMass),
    col: C.accent,
    better: "higher"
  }].map(({
    label,
    cur,
    tgt,
    col,
    better
  }) => {
    const rem = better === "lower" ? cur - tgt : tgt - cur;
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        marginBottom: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        color: C.text
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 11,
        color: rem > 0 ? C.sub : C.green
      }
    }, rem > 0 ? `${rem.toFixed(1)}% para el objetivo` : "✓ Alcanzado")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 9,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 7,
        background: "#EEE",
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${Math.min(better === "lower" ? tgt / cur * 100 : cur / tgt * 100, 100)}%`,
        background: col,
        borderRadius: 4
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: 18,
        color: col
      }
    }, cur?.toFixed(1), "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 10,
        color: C.sub
      }
    }, "\u2192", tgt, "%")));
  }), init && latest && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      borderTop: `1px solid ${C.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub
    }
  }, "Peso: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text
    }
  }, init.weight, "\u2192", latest.weight, "kg"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: latest.weight < init.weight ? C.green : C.red,
      marginLeft: 8
    }
  }, latest.weight < init.weight ? "▼" : "▲", Math.abs(latest.weight - init.weight).toFixed(1), "kg")))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 13
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Desviaciones acumuladas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 9
    }
  }, [{
    icon: "🏋️",
    label: "Ejercicios fallidos",
    value: dev.mEx,
    col: C.red
  }, {
    icon: "🍽️",
    label: "Comidas sustituidas",
    value: dev.mM,
    col: C.orange
  }, {
    icon: "🔥",
    label: "Δ Calorías",
    value: `${dev.cD > 0 ? "+" : ""}${dev.cD}`,
    col: dev.cD > 100 ? C.red : dev.cD < -100 ? C.green : C.sub
  }, {
    icon: "💪",
    label: "Δ Proteína",
    value: `${dev.pD > 0 ? "+" : ""}${dev.pD}g`,
    col: dev.pD < -50 ? C.red : C.green
  }].map(({
    icon,
    label,
    value,
    col
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      background: C.subtle,
      borderRadius: 11,
      padding: 13,
      border: `1px solid ${col}20`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      marginBottom: 5
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 26,
      color: col,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub,
      marginTop: 3
    }
  }, label))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Lbl, null, "Historial"), measurements.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub,
      textAlign: "center",
      padding: "14px 0"
    }
  }, "A\xF1ade tu primera medici\xF3n") : [...measurements].reverse().map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < measurements.length - 1 ? `1px solid ${C.border}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.text
    }
  }, m.date), m.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub
    }
  }, m.notes)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 19,
      color: C.text
    }
  }, m.weight, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.sub
    }
  }, "kg")), m.bodyFat && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 19,
      color: C.orange
    }
  }, m.bodyFat, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.sub
    }
  }, "%G")), m.muscleMass && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 19,
      color: C.accent
    }
  }, m.muscleMass, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.sub
    }
  }, "%M")))))));
}
/* ── DASHBOARD ── */
function Dashboard({
  profile,
  plans,
  logs,
  updateLog,
  measurements,
  isPaused,
  pausedAt,
  onPause,
  onResumeClick,
  onRecalculate,
  onReset
}) {
  const todayIdx = todayDayIdx(),
    today = todayStr();
  const [selDay, setSelDay] = useState(todayIdx);
  const logKey = selDay === todayIdx ? today : `day-${selDay}`;
  const dl = logs[logKey] || {};
  const dp = plans?.dietPlan?.[selDay];
  const wp = plans?.workoutPlan?.[selDay];
  const isToday = selDay === todayIdx;

  // Compliance for selected day: ALL items (done or not)
  const comp = (() => {
    let done = 0,
      total = 0;
    dp?.meals?.forEach(m => {
      total++;
      if (dl.meals?.[m.id]?.status === "done" || dl.meals?.[m.id]?.status === "alternative") done++;
    });
    if (wp && !wp.isRest) wp?.exercises?.forEach(e => {
      total++;
      if (dl.exercises?.[e.id]?.done === true) done++;
    });
    if (total === 0) return null;
    return {
      pct: Math.round(done / total * 100),
      done,
      total
    };
  })();
  const isPast = selDay <= todayIdx;
  const isLow = comp && comp.pct < 50 && comp.total > 0 && isPast && (comp.done > 0 || !isToday);
  const lat = measurements.length > 0 ? measurements[measurements.length - 1] : null;
  const bmi = profile ? (parseFloat(profile.weight) / (parseFloat(profile.height) / 100) ** 2).toFixed(1) : "—";
  const [showRC, setShowRC] = useState(false);
  const [rcF, setRcF] = useState({
    weight: "",
    bodyFat: "",
    muscleMass: ""
  });
  const iS = {
    background: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: 9,
    color: C.text,
    padding: "10px 13px",
    fontSize: 16,
    fontFamily: "'Chakra Petch',sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box"
  };
  const pd = Math.round(daysDiff(pausedAt));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13
    }
  }, isPaused && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.orangeBg,
      border: `1px solid ${C.orangeBrd}`,
      borderRadius: 14,
      padding: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\u23F8"), /*#__PURE__*/React.createElement(H1, {
    size: 22,
    color: C.orange
  }, "PLAN PAUSADO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub,
      marginTop: 6,
      marginBottom: 14
    }
  }, "Llevas ", pd, " d\xEDa", pd !== 1 ? "s" : "", " pausado"), /*#__PURE__*/React.createElement(Btn, {
    onClick: onResumeClick,
    style: {
      width: "100%",
      marginBottom: 10
    }
  }, "\u25B6 REANUDAR"), /*#__PURE__*/React.createElement(Btn, {
    onClick: onReset,
    variant: "danger",
    style: {
      width: "100%"
    }
  }, "\uD83D\uDDD1\uFE0F REINICIAR TODO")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H1, {
    size: 30
  }, profile?.trainingTitle || "MI PLAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: C.sub,
      marginTop: 3
    }
  }, new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      overflowX: "auto"
    }
  }, [["PESO", `${lat?.weight ?? profile?.weight ?? "—"}kg`], ["IMC", bmi], ["GRASA", `${lat?.bodyFat ?? profile?.bodyFat ?? "—"}%`], ["MÚSCULO", `${lat?.muscleMass ?? profile?.muscleMass ?? "—"}%`]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flexShrink: 0,
      background: "#FFFFFF",
      border: `1px solid ${C.border}`,
      borderRadius: 9,
      padding: "7px 13px",
      textAlign: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 19,
      color: C.accent
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 9,
      color: C.sub,
      letterSpacing: 1
    }
  }, l)))), /*#__PURE__*/React.createElement(DaySelector, {
    selected: selDay,
    onChange: setSelDay,
    workoutPlan: plans?.workoutPlan
  }), comp && /*#__PURE__*/React.createElement(Card, {
    style: {
      border: `1px solid ${comp.pct >= 75 ? "rgba(26,184,160,0.35)" : "rgba(234,88,12,0.3)"}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    style: {
      marginBottom: 0
    }
  }, "Cumplimiento ", isToday ? "hoy" : DAYS_ES[selDay]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 26,
      color: comp.pct >= 75 ? C.accent : C.orange
    }
  }, comp.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "#EEE",
      borderRadius: 4,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${comp.pct}%`,
      background: comp.pct >= 75 ? C.accent : C.orange,
      borderRadius: 4,
      transition: "width .6s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginBottom: isLow ? 12 : 0
    }
  }, comp.done, " de ", comp.total, " elementos completados"), isLow && !showRC && /*#__PURE__*/React.createElement(Btn, {
    onClick: () => setShowRC(true),
    variant: "orange",
    style: {
      width: "100%"
    }
  }, "\uD83D\uDD04 REAJUSTAR PLAN"), showRC && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: C.subtle,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    color: C.orange
  }, "Actualiza tus biom\xE9tricos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 10
    }
  }, [["PESO", "weight", "kg"], ["% GRASA", "bodyFat", "%"], ["% MÚSCULO", "muscleMass", "%"]].map(([l, k, u]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: k === "muscleMass" ? {
      gridColumn: "1/-1"
    } : {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: C.sub,
      letterSpacing: 1,
      marginBottom: 4
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    value: rcF[k],
    onChange: e => setRcF(f => ({
      ...f,
      [k]: e.target.value
    }))
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: C.sub,
      fontSize: 11
    }
  }, u))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      onRecalculate(rcF);
      setShowRC(false);
    },
    style: {
      flex: 1
    }
  }, "REAJUSTAR"), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => setShowRC(false),
    style: {
      flex: 1
    }
  }, "CANCELAR")))), wp && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Lbl, null, wp.isRest ? "Descanso" : "Entreno", " \xB7 ", DAYS_ES[selDay]), wp.isRest ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26
    }
  }, "\uD83D\uDE34"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      color: C.sub,
      fontSize: 13
    }
  }, "D\xEDa de descanso activo")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H1, {
    size: 18
  }, wp.focus), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginTop: 3
    }
  }, wp.estimatedDuration, " min \xB7 ", wp.exercises?.length, " ejercicios")), /*#__PURE__*/React.createElement(Ring, {
    pct: wp.exercises?.length ? wp.exercises.filter(e => dl.exercises?.[e.id]?.done === true).length / wp.exercises.length : 0,
    size: 48,
    stroke: 4,
    color: C.accent
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 12,
      color: C.accent
    }
  }, wp.exercises?.filter(e => dl.exercises?.[e.id]?.done === true).length || 0, "/", wp.exercises?.length))), wp.exercises?.map(ex => {
    const done = dl.exercises?.[ex.id]?.done;
    return /*#__PURE__*/React.createElement("div", {
      key: ex.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 0",
        borderBottom: `1px solid ${C.border}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        const cur = dl.exercises?.[ex.id]?.done;
        updateLog(logKey, "exercises", ex.id, cur === true ? undefined : {
          done: true
        });
      },
      style: {
        width: 28,
        height: 28,
        borderRadius: 8,
        flexShrink: 0,
        background: done === true ? "rgba(26,184,160,0.15)" : done === false ? "rgba(220,38,38,0.1)" : "#FFFFFF",
        border: `1px solid ${done === true ? "rgba(26,184,160,0.4)" : done === false ? "rgba(220,38,38,0.3)" : C.border}`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, done === true ? "✅" : done === false ? "❌" : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        color: done === true ? C.accent : C.text,
        textDecoration: done === true ? "line-through" : "none"
      }
    }, ex.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 10,
        color: C.sub
      }
    }, ex.sets, "\xD7", ex.reps, " \xB7 \u26A1", ex.effortPct, "%")), /*#__PURE__*/React.createElement("button", {
      onClick: () => updateLog(logKey, "exercises", ex.id, dl.exercises?.[ex.id]?.done === false ? undefined : {
        done: false
      }),
      style: {
        width: 28,
        height: 28,
        borderRadius: 8,
        background: done === false ? "rgba(220,38,38,0.1)" : "#FFFFFF",
        border: `1px solid ${done === false ? "rgba(220,38,38,0.3)" : C.border}`,
        cursor: "pointer",
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, "\u2717"));
  }))), dp && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Lbl, null, "Comidas \xB7 ", DAYS_ES[selDay]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub
    }
  }, dp.totalCalories, " kcal \xB7 ", dp.meals?.length, " comidas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.accent
    }
  }, dp.meals?.filter(m => ["done", "alternative"].includes(dl.meals?.[m.id]?.status)).length || 0, "/", dp.meals?.length, " \u2713")), dp.meals?.map(m => {
    const ml = dl.meals?.[m.id];
    const isDone = ml?.status === "done",
      isAlt = ml?.status === "alternative";
    const label = getMealLabel(m.time);
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 0",
        borderBottom: `1px solid ${C.border}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => updateLog(logKey, "meals", m.id, isDone ? undefined : {
        status: "done"
      }),
      style: {
        width: 28,
        height: 28,
        borderRadius: 8,
        flexShrink: 0,
        background: isDone ? "rgba(26,184,160,0.15)" : isAlt ? "rgba(234,88,12,0.1)" : "#FFFFFF",
        border: `1px solid ${isDone ? "rgba(26,184,160,0.4)" : isAlt ? "rgba(234,88,12,0.3)" : C.border}`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, isDone ? "✅" : isAlt ? "🔄" : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 11,
        color: C.sub
      }
    }, label?.icon, " ", label?.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 12,
        color: isDone ? C.accent : C.text,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        textDecoration: isDone ? "line-through" : "none"
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Chakra Petch',sans-serif",
        fontSize: 10,
        color: C.sub
      }
    }, m.calories, " kcal \xB7 ", m.time)));
  })), profile && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,rgba(26,184,160,0.06),#FFFFFF)",
      border: "1px solid rgba(26,184,160,0.2)",
      borderRadius: 14,
      padding: 16,
      boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    color: C.accent
  }, "Tu objetivo"), /*#__PURE__*/React.createElement(H1, {
    size: 17,
    style: {
      marginBottom: 5
    }
  }, profile.goalType), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      lineHeight: 1.6
    }
  }, profile.bodyFat, "%\u2192", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent
    }
  }, profile.targetBodyFat, "%"), " grasa \xB7 ", profile.muscleMass, "%\u2192", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent
    }
  }, profile.targetMuscleMass, "%"), " m\xFAsculo \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent
    }
  }, profile.timelineMonths, " meses")), profile.additionalGoals && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: C.sub,
      marginTop: 6,
      fontStyle: "italic"
    }
  }, "\"", profile.additionalGoals, "\"")), !isPaused && /*#__PURE__*/React.createElement(Btn, {
    onClick: onPause,
    variant: "ghost",
    style: {
      width: "100%"
    }
  }, "\u23F8 PAUSAR PLAN"));
}

/* ── RESUME QUESTIONNAIRE ── */
function ResumeQuestionnaire({
  pausedAt,
  profile,
  plans,
  logs,
  measurements,
  onExportAndClose,
  onContinue
}) {
  const [text, setText] = useState("");
  const [weight, setWeight] = useState(profile?.weight || "");
  const [bodyFat, setBodyFat] = useState(profile?.bodyFat || "");
  const [exported, setExported] = useState(false);
  const days = Math.round(daysDiff(pausedAt));
  const iS = {
    background: "#FFFFFF",
    border: "1px solid #E8E3DC",
    borderRadius: 10,
    color: "#1C1033",
    padding: "10px 14px",
    fontSize: 16,
    fontFamily: "'Chakra Petch',sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box"
  };
  const generateInputJSON = () => {
    const now = new Date();
    const ts = now.toISOString().replace(/[:.]/g, "-").slice(0, 16);
    const recentLogs = Object.entries(logs || {}).slice(-7).reduce((acc, [k, v]) => ({
      ...acc,
      [k]: v
    }), {});
    const data = {
      type: "habitron_input",
      label: "input_" + ts,
      generated_at: now.toISOString(),
      context: {
        pause_days: days,
        paused_at: pausedAt,
        user_update: text,
        current_weight: weight ? parseFloat(weight) : null,
        current_body_fat: bodyFat ? parseFloat(bodyFat) : null
      },
      profile: {
        ...profile,
        ...(weight && {
          weight: String(weight)
        }),
        ...(bodyFat && {
          bodyFat: String(bodyFat)
        })
      },
      current_plan_summary: {
        dailyCalories: plans?.dailyCalories,
        dailyMacros: plans?.dailyMacros,
        planNotes: plans?.planNotes,
        trainingDays: (profile?.trainingDaysOfWeek || []).join(", "),
        goal: profile?.goalType,
        timelineMonths: profile?.timelineMonths
      },
      recent_logs: recentLogs,
      latest_measurement: measurements?.length > 0 ? measurements[measurements.length - 1] : null,
      instructions: "Analiza este perfil actualizado y genera un plan HABITRON ajustado. Usa el formato planhabitron JSON. Ten en cuenta lo que el usuario describe en user_update y adapta el plan en consecuencia."
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "input_" + ts + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setExported(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(28,16,51,0.6)",
      zIndex: 200,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FFFFFF",
      borderRadius: "20px 20px 0 0",
      padding: "24px 24px 40px",
      width: "100%",
      maxWidth: 480,
      maxHeight: "92vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 10
    }
  }, "\uD83D\uDC4B"), /*#__PURE__*/React.createElement(H1, {
    size: 22,
    style: {
      marginBottom: 8
    }
  }, "BIENVENIDO DE NUEVO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: "#7C7B8A",
      lineHeight: 1.6
    }
  }, "Llevas ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#EA580C",
      fontWeight: 700
    }
  }, days, " d\xEDas"), " pausado.", /*#__PURE__*/React.createElement("br", null), "Cu\xE9ntame qu\xE9 ha pasado para que Claude actualice tu plan.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "#7C7B8A",
      letterSpacing: 2,
      marginBottom: 6
    }
  }, "\xBFQU\xC9 HA OCURRIDO ESTOS D\xCDAS?"), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Cuéntame en tus palabras: ¿Has entrenado algo? ¿Cómo has comido? ¿Alguna lesión, viaje o cambio importante? ¿Tu motivación actual? Cuanto más detalle, mejor plan generaré.",
    rows: 5,
    style: {
      ...iS,
      resize: "none",
      lineHeight: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "#7C7B8A",
      letterSpacing: 2,
      marginBottom: 8
    }
  }, "MEDIDAS ACTUALES (OPCIONAL)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "#7C7B8A",
      marginBottom: 4
    }
  }, "PESO (kg)"), /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    value: weight,
    onChange: e => setWeight(e.target.value),
    placeholder: profile?.weight || "75"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "#7C7B8A",
      marginBottom: 4
    }
  }, "% GRASA"), /*#__PURE__*/React.createElement("input", {
    style: iS,
    type: "number",
    value: bodyFat,
    onChange: e => setBodyFat(e.target.value),
    placeholder: profile?.bodyFat || "17"
  })))), !exported && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(37,99,235,0.05)",
      border: "1px solid rgba(37,99,235,0.2)",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 10,
      color: "#2563EB",
      letterSpacing: 1,
      marginBottom: 6
    }
  }, "\uD83D\uDCCB PASOS PARA ACTUALIZAR TU PLAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: "#1C1033",
      lineHeight: 1.8
    }
  }, "1. Pulsa \"Generar archivo\" \u2192 se descarga ", /*#__PURE__*/React.createElement("strong", null, "input_fecha.json"), /*#__PURE__*/React.createElement("br", null), "2. Adj\xFAntalo a Claude en claude.ai", /*#__PURE__*/React.createElement("br", null), "3. Claude genera tu plan actualizado", /*#__PURE__*/React.createElement("br", null), "4. Importa el archivo ", /*#__PURE__*/React.createElement("strong", null, "planhabitron_fecha.json"))), !exported ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: generateInputJSON,
    disabled: !text.trim(),
    style: {
      width: "100%",
      padding: "14px 0",
      background: text.trim() ? "linear-gradient(135deg,#4BC95A,#1AB8A0,#0BA8D0)" : "#E8E3DC",
      border: "none",
      borderRadius: 14,
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 18,
      letterSpacing: 3,
      color: text.trim() ? "#FFFFFF" : "#A09EB0",
      cursor: text.trim() ? "pointer" : "default"
    }
  }, "\uD83D\uDCE4 GENERAR ARCHIVO PARA CLAUDE"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onContinue({
      weight,
      bodyFat
    }),
    style: {
      width: "100%",
      padding: "12px 0",
      background: "transparent",
      border: "1px solid #E8E3DC",
      borderRadius: 14,
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: "#7C7B8A",
      cursor: "pointer"
    }
  }, "Continuar sin actualizar")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(22,163,74,0.08)",
      border: "1px solid rgba(22,163,74,0.3)",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      marginBottom: 6
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: "#16A34A",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "ARCHIVO GENERADO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 11,
      color: "#7C7B8A",
      lineHeight: 1.6
    }
  }, "Adj\xFAntalo a Claude y pide el plan actualizado. Cuando lo tengas, imp\xF3rtalo aqu\xED.")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width: "100%",
      padding: "14px 0",
      background: "linear-gradient(135deg,#4BC95A,#1AB8A0,#0BA8D0)",
      border: "none",
      borderRadius: 14,
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 18,
      letterSpacing: 2,
      color: "#FFFFFF",
      cursor: "pointer",
      textAlign: "center",
      marginBottom: 10
    }
  }, "\u2B06\uFE0F IMPORTAR planhabitron JSON", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".json",
    style: {
      display: "none"
    },
    onChange: e => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const d = JSON.parse(ev.target.result);
          if (d.type === "habitron_plan" && d.plan) {
            onExportAndClose(d.plan, {
              weight,
              bodyFat
            });
          } else alert("Archivo no válido. Debe ser un planhabitron JSON de Claude.");
        } catch (err) {
          alert("Error: " + err.message);
        }
      };
      reader.readAsText(file);
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onContinue({
      weight,
      bodyFat
    }),
    style: {
      width: "100%",
      padding: "12px 0",
      background: "transparent",
      border: "1px solid #E8E3DC",
      borderRadius: 14,
      fontFamily: "'Chakra Petch',sans-serif",
      fontSize: 12,
      color: "#7C7B8A",
      cursor: "pointer"
    }
  }, "Continuar con plan anterior"))));
}
const _root = ReactDOM.createRoot(document.getElementById("root"));
_root.render(React.createElement(FitAI));
