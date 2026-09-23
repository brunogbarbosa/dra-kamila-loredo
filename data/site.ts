export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Kamila Loredo',
  monogram: 'KL',
  headline: 'Realce o que já é único em você.',
  cro: '',
  bio: 'Especialista em harmonizar com naturalidade, a Dra. Kamila Loredo conduz cada plano com escuta, precisão e respeito aos traços que tornam você única.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Preenchimento labial', 'Rinomodelação', 'Bioestimuladores'],
  phone: '+55 16 99422-9008',
  whatsapp: '5516994229008',
  whatsappUrl: 'https://wa.me/5516994229008?text=Ol%C3%A1%2C%20Dra.%20Kamila!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Franca, SP',
  professionalPhilosophy: 'Realçar sem transformar.',
  instagram: 'https://www.instagram.com/kamilaloredoesteticaavancada/',
  instagramHandle: '@kamilaloredoesteticaavancada',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SEU TEMPO.'],
  colors: { paper: '#f2efe5', ink: '#17271f', taupe: '#4f6a5c', champagne: '#c7aa67', dark: '#254435', wine: '#122c22', muted: '#66756d' },
  images: {
    hero: '/images/kamila-hero.webp',
    heroMobile: '/images/kamila-hero-mobile.webp',
    essence: '/images/kamila-essencia.webp',
    about: '/images/kamila-sobre.webp',
    beauty: '/images/kamila-experiencia.webp',
  },
  procedures: [
    { name: 'Harmonização facial', description: 'Equilíbrio, proporção e naturalidade em um plano feito para você.', image: '/images/resultado-harmonizacao-01.webp' },
  ] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-harmonizacao-01.webp', label: 'Equilíbrio que preserva identidade', alt: 'Antes e depois de harmonização facial masculina compartilhado pela Dra. Kamila Loredo.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1289 },
    { image: '/images/resultado-harmonizacao-02.webp', label: 'Leveza em cada ângulo', alt: 'Antes e depois de harmonização facial feminina compartilhado pela Dra. Kamila Loredo.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1289 },
    { image: '/images/resultado-rinomodelacao.webp', label: 'Perfil com mais harmonia', alt: 'Antes e depois de rinomodelação compartilhado pela Dra. Kamila Loredo.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1300 },
    { image: '/images/resultado-harmonizacao-03.webp', label: 'Proporção sem excessos', alt: 'Antes e depois de harmonização facial masculina compartilhado pela Dra. Kamila Loredo.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1268 },
    { image: '/images/resultado-labial-01.webp', label: 'Contorno e hidratação', alt: 'Resultado de preenchimento labial compartilhado pela Dra. Kamila Loredo.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1297 },
    { image: '/images/resultado-labial-02.webp', label: 'Volume com delicadeza', alt: 'Resultado de preenchimento labial compartilhado pela Dra. Kamila Loredo.', orientation: 'single', beforeShare: .5, comparisonRatio: 1284 / 1332 },
  ] },
  seo: { title: 'Dra. Kamila Loredo | Estética Avançada em Franca', description: 'Harmonização facial com naturalidade, precisão e respeito à sua identidade. Conheça o trabalho da Dra. Kamila Loredo e agende sua avaliação em Franca, SP.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || site.instagram;
