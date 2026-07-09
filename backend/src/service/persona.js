import { personas } from "../persona";

const getpersona = (personaId)=>{

     return personas[personaId] || personas.hitesh;

};