import hitesh from "../persona/hitesh.js";
import piyush from "../persona/piyush.js";

const personas = {
  hitesh,
  piyush,
};

export function getPersona(personaName = "hitesh") {
  const normalizedPersona = String(personaName || "hitesh").trim().toLowerCase();
  return personas[normalizedPersona] ?? null;
}

export default personas;
