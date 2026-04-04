import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  color: 'indigo' | 'coral' | 'teal' | 'gold';
  skills: string[];
}

interface Certification {
  name: string;
  issuer: string;
  url: string | null;
}

@Component({
  selector: 'app-technical-knowledge',
  templateUrl: './technical-knowledge.component.html',
  styleUrls: ['./technical-knowledge.component.css'],
  standalone: false
})
export class TechnicalKnowledgeComponent {
  skillGroups: SkillGroup[] = [
    {
      label: 'Front-end',
      color: 'indigo',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'jQuery']
    },
    {
      label: 'Back-end & Integração',
      color: 'coral',
      skills: ['Node.js', 'Python', 'PHP', 'Delphi', 'Java (básico)', 'APIs REST', 'XML/XSD']
    },
    {
      label: 'Banco de Dados',
      color: 'teal',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL']
    },
    {
      label: 'Ferramentas & Práticas',
      color: 'gold',
      skills: ['Git', 'GitHub', 'Scrum', 'Kanban', 'Clean Code', 'SOLID', 'Clean Architecture']
    },
    {
      label: 'Outros',
      color: 'indigo',
      skills: ['Integração de Sistemas', 'Automação', 'BI & Análise de Dados', 'Low Code (Blueprint)']
    }
  ];

  certifications: Certification[] = [
    {
      name: 'PCAP: Programming Essentials in Python',
      issuer: 'Cisco Networking Academy',
      url: 'https://drive.google.com/file/d/1p3NhapuQtVTiLH_NE11skitagzHf_21G/view?usp=sharing'
    },
    {
      name: 'Angular Avançado',
      issuer: 'Udemy',
      url: null
    },
    {
      name: 'Git e GitHub',
      issuer: 'Digital Innovation One (DIO)',
      url: null
    },
    {
      name: 'Ada & Americanas: Coding Tank',
      issuer: 'Ada Tech',
      url: 'https://drive.google.com/file/d/1FjZdFHC65bIBhz-_q_s1zW4K1TFUW3dg/view?usp=sharing'
    }
  ];

  softSkills = [
    'Trabalho em equipe', 'Liderança', 'Proatividade',
    'Resolução de problemas', 'Comunicação', 'Aprendizado rápido',
    'Organização', 'Curiosidade'
  ];

  openCert(url: string | null): void {
    if (url) window.open(url, '_blank');
  }
}
