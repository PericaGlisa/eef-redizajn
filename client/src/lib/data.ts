export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | null; // null means "Call for price"
  image: string;
  description: string;
  specs: Record<string, string>;
  isNew?: boolean;
  brand: string;
}

export const categories = [
  { id: 'ventilators', name: 'Ventilatori', count: 120 },
  { id: 'compressors', name: 'Kompresori', count: 85 },
  { id: 'heat-pumps', name: 'Toplotne Pumpe', count: 40 },
  { id: 'electronics', name: 'Elektronika', count: 200 },
  { id: 'tools', name: 'Alati', count: 65 },
  { id: 'spare-parts', name: 'Rezervni Delovi', count: 500 },
];

export const brands = [
  "Ziehl-Abegg", "Danfoss", "Copeland", "Bitzer", "Eliwell", "Dixell"
];

import fanImg from '../assets/product-fan.png';
import heatpumpImg from '../assets/product-heatpump.png';
import compressorImg from '../assets/product-compressor.png';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ventilator Ziehl-Abegg FN063-VDK.6N.V7P7',
    category: 'Ventilatori',
    price: 45000,
    image: fanImg,
    brand: 'Ziehl-Abegg',
    description: 'Aksijalni ventilator visokih performansi za industrijsku primenu. Dizajniran za maksimalnu efikasnost i dugotrajnost u zahtevnim uslovima.',
    specs: {
      'Prečnik': '630mm',
      'Napon': '400V / 3~',
      'Protok': '18000 m3/h',
      'Nivo buke': '72 dB(A)',
      'Zaštita': 'IP54'
    },
    isNew: true
  },
  {
    id: '2',
    name: 'Kompresor Copeland Scroll ZB45KCE-TFD',
    category: 'Kompresori',
    price: null,
    image: compressorImg,
    brand: 'Copeland',
    description: 'Scroll kompresor za srednje temperature, idealan za rashladne komore i supermarkete. Visoka pouzdanost i niska potrošnja energije.',
    specs: {
      'Tip': 'Scroll',
      'Freon': 'R404A / R134a',
      'Kapacitet': '10.5 kW',
      'Napajanje': '380-420V / 50Hz',
      'Priključci': 'Rotalock'
    },
    isNew: false
  },
  {
    id: '3',
    name: 'Toplotna Pumpa EKO-12kW Monoblok',
    category: 'Toplotne Pumpe',
    price: 320000,
    image: heatpumpImg,
    brand: 'EKO',
    description: 'Visokoefikasna toplotna pumpa vazduh-voda monoblok izvedbe. Idealna za grejanje i hlađenje stambenih i poslovnih objekata.',
    specs: {
      'Snaga grejanja': '12 kW',
      'COP': '4.8',
      'Radni opseg': '-25°C do +43°C',
      'Dimenzije': '1100x450x850mm',
      'Gas': 'R32'
    },
    isNew: true
  },
  {
    id: '4',
    name: 'Ventilator Aksijalni YWF4E-400',
    category: 'Ventilatori',
    price: 12500,
    image: fanImg,
    brand: 'Generic',
    description: 'Standardni aksijalni ventilator za opštu namenu u ventilaciji i hlađenju.',
    specs: {
      'Prečnik': '400mm',
      'Napon': '230V',
      'Protok': '3500 m3/h'
    }
  },
  {
    id: '5',
    name: 'Danfoss Ventil Termostatski T2',
    category: 'Rezervni Delovi',
    price: 4200,
    image: compressorImg, // Placeholder
    brand: 'Danfoss',
    description: 'Termostatski ekspanzioni ventil sa izmenjivom diznom.',
    specs: {
      'Tip': 'TEX 2',
      'Freon': 'R404A/R507',
      'Opseg': '-40 do +10°C'
    }
  },
  {
    id: '6',
    name: 'Elektronski kontroler Eliwell ID 974',
    category: 'Elektronika',
    price: 5600,
    image: heatpumpImg, // Placeholder
    brand: 'Eliwell',
    description: 'Mikroprocesorski kontroler za rashladne uređaje sa ventilatorom i otapanjem.',
    specs: {
      'Napajanje': '230V',
      'Sonde': '2x NTC/PTC',
      'Releji': '3 (Kompresor, Otapanje, Ventilator)'
    }
  }
];
