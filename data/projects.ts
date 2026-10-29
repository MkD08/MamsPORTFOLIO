import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "LifeLink",
    slug: "lifelink",
    description:
      "Application de gestion et de facilitation du don de sang.",
    technologies: [
      "Flutter",
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Firebase",
    ],
    screenshots: [
      {
        src: "/projects/lifelink/onboarding-otp.jpeg",
        alt: "Écran d'inscription LifeLink pour demander un code OTP",
        caption: "Inscription sécurisée par code OTP",
      },
      {
        src: "/projects/lifelink/login-light.jpeg",
        alt: "Écran de connexion LifeLink en thème clair",
        caption: "Connexion — thème clair",
      },
      {
        src: "/projects/lifelink/login-dark.jpeg",
        alt: "Écran de connexion LifeLink en thème sombre",
        caption: "Connexion — thème sombre",
      },
      {
        src: "/projects/lifelink/user-guide.jpeg",
        alt: "Guide d'utilisation mobile de LifeLink",
        caption: "Guide d'utilisation",
      },
      {
        src: "/projects/lifelink/settings-menu.jpeg",
        alt: "Menu de navigation de l'application LifeLink",
        caption: "Navigation dans l'application",
      },
    ],
    category: "Mobile",
    status: "MVP terminé",
    featured: true,
  
    context:
      "Projet conçu pour faciliter la gestion des dons de sang et améliorer la coordination entre les donneurs et les structures concernées.",
  
    objective:
      "Faciliter les dons de sang, les notifications aux donneurs et le suivi des opérations liées aux dons.",
  
    features: [
      "Gestion des dons",
      "Demandes de don",
      "Alertes aux donneurs",
      "Notifications",
      "Gestion des centres",
      "Suivi de la banque de sang",
      "Statistiques",
      "Chat",
    ],
  
    role:
      "Conception et développement de la solution mobile, du backend et des fonctionnalités de gestion associées.",
  },

  {
    title: "Madi Market",
    slug: "madi-market",
    description:
      "Plateforme e-commerce dédiée à la vente de produits alimentaires.",
    technologies: [
      "PHP",
      "MySQL",
      "PrestaShop",
      "cPanel",
      "Visual Studio Code",
    ],
    image: "/projects/madi-market/cover.png",
    category: "E-commerce",
    status: "Terminé",
    professional: true,
    featured: true,
  
    context:
      "Projet e-commerce développé autour de PrestaShop pour permettre la vente en ligne de produits alimentaires.",
  
    objective:
      "Mettre en place une plateforme permettant aux clients de consulter les produits, de parcourir les différentes catégories et d'effectuer leurs achats en ligne.",
  
    features: [
      "Vente de produits en ligne",
      "Organisation des produits par catégories",
      "Catégorie viande",
      "Catégorie légumes et fruits",
      "Catégorie épicerie",
      "Catégorie épices",
    ],
  
    role:
      "Participation au développement et à la personnalisation de la plateforme e-commerce, notamment avec PHP, MySQL et PrestaShop, ainsi qu'à la correction de certains fichiers.",
    
    demo: "https://www.madimarket.net/",  
  },

  {
    title: "EduNova",
    slug: "edunova",
    description:
      "Plateforme dédiée à l'éducation, à l'innovation, à la papeterie et aux formations.",
    technologies: [
      "React",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Visual Studio Code",
    ],
    image: "/projects/edunova/cover.png",
    category: "Web",
    status: "Terminé",
    professional: true,
    featured: true,
  
    context:
      "Projet développé pour une structure active dans l'éducation, l'innovation, la papeterie et la formation.",
  
    objective:
      "Mettre en place une plateforme web permettant de présenter et de développer les activités liées à la papeterie et aux formations.",
  
    features: [
      "Présentation des activités",
      "Présentation des formations",
      "Présentation des produits de papeterie",
    ],
  
    role:
      "Développement de la plateforme avec React et Next.js, mise en place de la base de données PostgreSQL avec Supabase et intégration de Prisma.",
    
    demo: "https://edunova-fondation.vercel.app",
    },

  {
    title: "API REST",
    slug: "api-rest",
    description:
      "Conception et tests d'API REST utilisés dans plusieurs projets.",
    technologies: [
      "Postman",
    ],
    category: "API",
    status: "Terminé",
    professional: true,
    internship: true,
  
    context:
      "Travail autour des API REST et des échanges entre les différentes parties des applications développées.",
  
    objective:
      "Tester et valider les endpoints et les échanges de données nécessaires au fonctionnement des différents projets.",
  
    features: [
      "Tests d'API REST",
      "Tests des endpoints",
      "Vérification des requêtes",
      "Vérification des réponses API",
    ],
  
    role:
      "Conception et tests des API avec Postman dans le cadre de plusieurs projets web et mobiles.",
  },

  {
    title: "GALERIE WAGADOU",
    slug: "galerie-wagadou",
    description:
      "Plateforme e-commerce dédiée à la vente de produits artisanaux et numériques.",
    technologies: [
      "PrestaShop",
      "PHP",
      "MySQL",
      "cPanel",
      "Visual Studio Code",
      "OVH",
    ],
    image: "/projects/galerie-wagadou/cover.png",
    category: "E-commerce",
    status: "En cours",
  
    context:
      "Plateforme e-commerce dédiée à la commercialisation de produits mêlant artisanat et création numérique.",
  
    objective:
      "Mettre en place une boutique en ligne permettant de présenter et vendre différents produits artisanaux et créatifs.",
  
    features: [
      "Vente de produits en ligne",
      "Produits artisanaux",
      "Produits avec gravure laser",
      "Blocs-notes gravés au laser",
      "Tableaux gravés au laser",
      "Gestion de produits avec PrestaShop",
    ],
  
    role:
      "Développement et personnalisation de la plateforme e-commerce avec PrestaShop, ainsi que gestion des fichiers et du déploiement vers l'hébergement.",
  },

  {
    title: "MAW9I3I",
    slug: "maw9i3i",
    description:
      "Plateforme e-commerce / marketplace en cours de développement.",
    technologies: [
      "React",
      "Supabase",
      "Render",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    category: "E-commerce",
    status: "En cours",
  
    context:
      "Projet de plateforme e-commerce / marketplace actuellement en développement.",
  
    objective:
      "Développer une plateforme permettant de créer et de gérer une activité commerciale en ligne.",
  
    role:
      "Conception et développement de la plateforme et de ses fonctionnalités.",
  },

  {
    title: "MAW9I3I Business",
    slug: "maw9i3i-business",
    description:
      "Plateforme de gestion de boutique destinée aux vendeurs.",
    technologies: [
      "React",
      "Supabase",
      "Render",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    category: "E-commerce",
    status: "En cours",
  
    context:
      "Plateforme permettant aux commerçants de gérer leur propre boutique et leurs opérations commerciales.",
  
    objective:
      "Centraliser la gestion d'une boutique, de ses vendeurs, de ses produits, de ses prix et de ses statistiques.",
  
    features: [
      "Gestion de la boutique",
      "Création et gestion des vendeurs",
      "Gestion des produits",
      "Gestion des prix",
      "Suivi des prix",
      "Statistiques de la boutique",
      "Import de produits depuis un fichier Excel",
      "Export des données de la boutique",
    ],
  
    role:
      "Conception et développement de la plateforme de gestion de boutique et de ses fonctionnalités principales.",
  },

  {
    title: "Gestion de véhicules",
    slug: "gestion-vehicules",
    description:
      "Plateforme dédiée à l'achat, la vente et la location de véhicules.",
    technologies: [
      "WordPress",
      "WampServer",
    ],
    image: "/projects/gestion-vehicules/cover.png",
    category: "Web",
    status: "Terminé",
  
    context:
      "Projet web consacré à la gestion et à la publication d'annonces de véhicules.",
  
    objective:
      "Permettre aux utilisateurs de consulter, rechercher et publier des annonces de véhicules.",
  
    features: [
      "Publication d'annonces",
      "Achat de véhicules",
      "Vente de véhicules",
      "Location de véhicules",
      "Recherche d'annonces",
      "Filtrage des véhicules",
    ],
  
    role:
      "Conception et développement du site avec WordPress dans un environnement local WampServer.",
  },

  {
    title: "Gaming Store",
    slug: "gaming-store",
    description:
      "Projet web de boutique dédiée aux produits et jeux vidéo.",
    technologies: [
      "PHP",
      "HTML",
      "CSS",
    ],
    image: "/projects/gaming-store/cover.png",
    category: "Web",
    status: "Terminé",
  
    context:
      "Projet web réalisé autour de l'univers du gaming et de la vente de produits liés aux jeux vidéo.",
  
    objective:
      "Concevoir une interface de boutique permettant de présenter différents produits et contenus liés au gaming.",
  
    role:
      "Conception et développement du projet avec PHP, HTML et CSS.",
  },
];
