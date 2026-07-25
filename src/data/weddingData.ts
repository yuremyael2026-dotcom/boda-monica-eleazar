import heroCoverImg from '../assets/images/hero_whatsapp_photo.jpg';
import galeria1 from '../assets/images/Galeria/galeria1.jpg';
import galeria2 from '../assets/images/Galeria/galeria2.jpg';
import galeria3 from '../assets/images/Galeria/galeria3.jpg';
import galeria4 from '../assets/images/Galeria/galeria4.jpg';
import galeria5 from '../assets/images/Galeria/galeria5.jpg';
import galeria6 from '../assets/images/Galeria/galeria6.jpg';
import iglesia from "../assets/images/iglesia.jpg";
import recepcion from "../assets/images/recepcion.jpg";
import footer from "../assets/images/footer.jpg";
import loveMusic from "../assets/audio/love.mp3";
import hotelMagnolia from "../assets/images/hotel-magnolia.jpg";
import haciendaImage from "../assets/images/hacienda.jpeg";
import hotelAstro from "../assets/images/hotel-astro.jpeg";
export interface WeddingData {
  general: {
    brideName: string;
    groomName: string;
    coupleTitle: string;
    tagline: string;
    dateISO: string; // YYYY-MM-DDTHH:mm:ss
    dateDisplay: string;
    timeDisplay: string;
    locationCity: string;
    heroImage: string;
    footerImage: string;
    welcomeMessage: string;
    closingMessage: string;
  };
  ceremony: {
    title: string;
    placeName: string;
    dateDisplay: string;
    timeDisplay: string;
    address: string;
    mapUrl: string;
    image: string;
  };
  reception: {
    title: string;
    placeName: string;
    addressLine1: string;
    addressLine2: string;
    timeDisplay: string;
    mapUrl: string;
    image: string;
  };
  timeline: Array<{
    time: string;
    title: string;
    description?: string;
    icon: string;
  }>;
  godparents: Array<{
    role: string;
    names: string[];
  }>;
  parents?: {
    brideParents?: string[];
    groomParents?: string[];
  };
  gallery: Array<{
    id: string;
    url: string;
    title: string;
    caption?: string;
  }>;
  lodging: {
    title: string;
    subtitle: string;
    options: {
      volcanicPark: {
        name: string;
        description: string;
        mainImage: string;
        modalPhotos: string[];
        cards: Array<{
          id: string;
          name: string;
          shortDescription: string;
          fullDescription: string;
          image: string;
          photos: string[];
          priceInfo?: string;
        }>;
        activities: Array<{
          name: string;
          icon: string;
          description: string;
        }>;
      };
      hotelMagnolia: {
        name: string;
        description: string;
        image: string;
        phone: string;
        phoneRaw: string;
        address: string;
        mapUrl: string;
      };
    };
  };
  giftRegistry: {
    title: string;
    subtitle: string;
    qrCodeUrl: string;
    bankInfo: {
      bankName: string;
      holderName: string;
      clabe: string;
      accountNumber: string;
    };
    externalRegistryUrl?: string;
  };
  rsvp: {
    title: string; // Must be "Nos encantará saber que nos acompañarán"
    subtitle: string;
    whatsappNumber: string; // e.g. "5218712394268"
    recipientName: string; // e.g. "Mónica"
  };
  audio: {
    songTitle: string;
    artist: string;
    audioUrl: string;
  };
}

export const initialWeddingData: WeddingData = {
  general: {
    brideName: "Mónica Sánchez",
    groomName: "Eleazar Serrano",
    coupleTitle: "Mónica & Eleazar",
    tagline: "¡Nos Casamos!",
    dateISO: "2026-11-14T13:00:00",
    dateDisplay: "14 de noviembre de 2026",
    timeDisplay: "1:00 PM",
    locationCity: "Ciudad Serdán, Puebla",
    heroImage: heroCoverImg,
    footerImage: footer,
    welcomeMessage: "Con enorme alegría queremos compartir con ustedes uno de los días más importantes de nuestras vidas. Su presencia hará que este momento sea aún más especial y esperamos contar con ustedes para celebrar juntos nuestro matrimonio.",
    closingMessage: "Gracias por formar parte de este momento tan importante en nuestras vidas.\n\nCon cariño,\nMónica & Eleazar"
  },
  ceremony: {
    title: "Ceremonia Religiosa",
    placeName: "Parroquia de San Andrés Apóstol",
    dateDisplay: "14 de noviembre de 2026",
    timeDisplay: "1:00 PM",
    address: "Centro, Ciudad Serdán, Puebla",
    mapUrl: "https://maps.app.goo.gl/deiULUEDagzu3vUi6",
    image: iglesia
  },
  reception: {
    title: "Recepción",
    placeName: "Casa de la familia Serrano Juárez",
    addressLine1: "Calle Vicente Guerrero #52, Colonia Guadalupe",
    addressLine2: "San Francisco Cuautlancingo, Ciudad Serdán, Puebla. C.P. 75527",
    timeDisplay: "2:30 PM",
    mapUrl: "https://maps.app.goo.gl/fXJDaGmFPcnbcR747",
    image: recepcion
  },
  timeline: [
    {
      time: "1:00 – 2:00 PM",
      title: "Misa",
      description: "Ceremonia religiosa en la Parroquia de San Andrés Apóstol.",
      icon: "Church"
    },
    {
      time: "2:00 – 2:30 PM",
      title: "Fotografías en la iglesia",
      description: "Capturando recuerdos eternos con familiares y amigos.",
      icon: "Camera"
    },
    {
      time: "2:30 – 3:30 PM",
      title: "Bienvenida con aperitivos",
      description: "Recepción de invitados con bocadillos y coctel de bienvenida.",
      icon: "Wine"
    },
    {
      time: "3:30 – 4:30 PM",
      title: "Bendición y ceremonia civil",
      description: "Unión formal y bendición especial para los novios.",
      icon: "Scroll"
    },
    {
      time: "5:00 – 7:00 PM",
      title: "Comida",
      description: "Banquete de gala preparado especialmente para la ocasión.",
      icon: "Utensils"
    },
    {
      time: "7:00 – 8:00 PM",
      title: "Momentos estelares",
      description: "Entrada de los novios, Vals, Lanzamiento del ramo, Víbora de la mar y Brindis.",
      icon: "Sparkles"
    },
    {
      time: "8:00 – 10:00 PM",
      title: "Baile",
      description: "Gran apertura de pista con música en vivo.",
      icon: "Music"
    },
    {
      time: "10:00 – 11:00 PM",
      title: "Cena",
      description: "Cena nocturna para recargar energías.",
      icon: "Coffee"
    },
    {
      time: "11:00 PM – 2:00 AM",
      title: "Fiesta y Baile",
      description: "Celebración hasta la madrugada.",
      icon: "PartyPopper"
    }
  ],
  godparents: [
    {
      role: "Padrinos de Honor",
      names: ["Tito Contreras", "Guadalupe Alvarado"]
    }
  ],
  gallery: [
    {
      id: "1",
      url: galeria1,
      title: "Amor Eterno",
      caption: "Un instante suspendido en el tiempo"
    },
    {
      id: "2",
      url: galeria2,
      title: "Cómplices",
      caption: "Caminando juntos hacia nuestro nuevo capítulo"
    },
    {
      id: "3",
      url: galeria3,
      title: "Miradas",
      caption: "Donde las palabras sobran"
    },
    {
      id: "4",
      url: galeria4,
      title: "Sonrisas Compartidas",
      caption: "La felicidad de encontrarnos"
    },
    {
      id: "5",
      url: galeria5,
      title: "Promesas",
      caption: "El inicio de una historia inolvidable"
    },
    {
      id: "6",
      url: galeria6,
      title: "Nuestra Ilusión",
      caption: "Preparados para celebrar junto a quienes más amamos"
    }
  ],
  lodging: {
    title: "Opciones de hospedaje",
    subtitle: "Para la comodidad de nuestros invitados, compartimos algunas opciones de hospedaje cercanas al evento.",
    options: {
      volcanicPark: {
        name: "Volcanic Park",
        description: "Parque temático y complejo de ecoturismo ubicado cerca de la recepción. Ofrece experiencias únicas de hospedaje en la naturaleza con atracciones para toda la familia.",
        mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
        modalPhotos: [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80"
        ],
        cards: [
          {
            id: "hacienda",
            name: "Hotel La Hacienda",
            shortDescription: "Alojamiento confortable con detalles coloniales y arquitectura rustica.",
            fullDescription: "El Hotel La Hacienda en Volcanic Park ofrece confortables habitaciones diseñadas para el descanso reconfortante rodeado de la brisa del bosque.",
            image: haciendaImage,
            photos: [
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
            ],
            priceInfo: "Habitaciones dobles y familiares. Se recomienda reservar con anticipación."
          },
          {
            id: "cabanas",
            name: "Astro Cabañas",
            shortDescription: "Cabañas elevadas con vista directa al cielo estrellado.",
            fullDescription: "Una experiencia mágica donde podrás admirar las estrellas desde la calidez de tu cabaña acondicionada con chimenea y terminados en madera.",
            image: hotelAstro,
            photos: [
              "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80"
            ],
            priceInfo: "Cabañas con capacidad de 2 a 6 personas."
          },
          {
            id: "glamping",
            name: "Glamping",
            shortDescription: "Campamento de lujo con cama, baño privado y estilo safari.",
            fullDescription: "Disfruta de la libertad de acampar sin perder la comodidad de un hotel boutique de primer nivel.",
            image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
            photos: [
              "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=800&q=80"
            ],
            priceInfo: "Tiendas luxury glamping para 2 personas."
          },
          {
            id: "cupulas",
            name: "Cúpulas (Domo Geodésico)",
            shortDescription: "Domos futuristas inmersos en el bosque de pinos.",
            fullDescription: "Las cúpulas panorámicas permiten integrarse totalmente con la naturaleza con un diseño arquitectónico romántico y envolvente.",
            image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
            photos: [
              "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80"
            ],
            priceInfo: "Diseñado especialmente para parejas."
          },
          {
            id: "camping",
            name: "Camping",
            shortDescription: "Área de acampar al aire libre bajo las estrellas.",
            fullDescription: "Zona segura equipada para instalar tu propia tienda de campaña, rodeada de bosque, sanitarios y áreas de fogata.",
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
            photos: [
              "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
            ],
            priceInfo: "Espacio de acampado por persona o por tienda."
          }
        ],
        activities: [
          { name: "Tirolesas", icon: "Zap", description: "Circuito aéreo por las copas de los árboles." },
          { name: "Go Karts", icon: "Car", description: "Pista de carreras para pura diversión." },
          { name: "Lanchas", icon: "Ship", description: "Paseos en el lago recreativo." },
          { name: "Dinosaurios", icon: "Footprints", description: "Laberinto jurásico animatrónico." },
          { name: "Cuatrimotos", icon: "Compass", description: "Rutas todoterreno en la montaña." },
          { name: "Laberinto", icon: "Grid", description: "Desafío de orientación entre cipreses." },
          { name: "Actividades nocturnas", icon: "Moon", description: "Fogatas, recorridos estelares y leyendas." }
        ]
      },
      hotelMagnolia: {
        name: "Hotel La Magnolia",
        description: "Opción clásica y acogedora en Ciudad Serdán, caracterizada por su excelente servicio al cliente, habitaciones cálidas y ubicación conveniente.",
        image: hotelMagnolia,
        phone: "55 13 97 67 49",
        phoneRaw: "5513976749",
        address: "San Francisco Cuautlancingo, Puebla",
        mapUrl: "https://maps.google.com/?q=Hotel+La+Magnolia+Ciudad+Serdan+Puebla"
      }
    }
  },
  giftRegistry: {
    title: "Mesa de Regalos",
    subtitle: "El mejor regalo será contar con su presencia. Si desean tener un detalle con nosotros, ponemos a su disposición nuestra mesa de regalos.",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https%3A%2F%2Fwww.liverpool.com.mx%2Ftienda%2Fgiftregistry&color=5A6B53",
    bankInfo: {
      bankName: "BBVA Bancomer",
      holderName: "Mónica Sánchez / Eleazar Serrano",
      clabe: "012 650 015 892 341 092",
      accountNumber: "158 923 4109"
    },
    externalRegistryUrl: "https://www.liverpool.com.mx/tienda/giftregistry"
  },
  rsvp: {
    title: "Nos encantará saber que nos acompañarán",
    subtitle: "Tu presencia hará este día aún más especial. Para ayudarnos con la organización del evento, nos gustaría saber con cuántas personas nos acompañarán.",
    whatsappNumber: "5218712394268",
    recipientName: "Mónica"
  },
  audio: {
    songTitle: "love",
    artist: "Alex-Productions",
    audioUrl: loveMusic,
  }
};
