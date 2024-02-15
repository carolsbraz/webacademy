import { Professor, Technologies } from './helpersType';

export function listProfs(profs: Professor[]) {
  const lista = profs.map((prof) => `<li>${prof.nome} - ${prof.sala}</li>`);
  return `<ul>${lista.join('')}</ul>`;
}

export function listTechnologies(techs: Technologies[]) {
  const lista = techs.map((tech) => {
    if (tech.poweredByNodejs) {
      return `<li>${tech.name} - ${tech.type}</li>`;
    }
  });
  return `<ul>${lista.join('')}</ul>`;
}
