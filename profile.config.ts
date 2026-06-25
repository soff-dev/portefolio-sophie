

export interface ProfileConfig {
    profile: {
        name: string;
        username: string;
        title: string;
        description: string;
        bio: string;
        image: string;
        website: string;
        location: string;
        email?: string;
        currentFocus: string[];
        funFact: string;
    };

    socialLinks: {
        github: string;
        linkedin: string;
        twitter?: string;
        telegram?: string;
        discord?: string;
        instagram?: string;
        youtube?: string;
        website?: string;
    };

    skills: {
        language: string[];
        framework: string[];
        tools: string[];
    };

    achievements: Array<{
       title: string;
       description: string;
       icon?: string;
    }>;

    projects: {
        featuredRepos: string[];
        excludeRepos: string[];
        categories: {
            [categories: string]: string[];
        };
    };

    schools: Array<{
        title: string;
        year: string;
        location: string;
        description: string[];
    }>,

    jobs: Array<{
        title: string;
        enterprise: string;
        enterpriseDetails: string;
        year: string;
        missions: string[];
        achievements: string[];
        stack: string[];
    }>,

    navigation: {
        brandName: string;
        brandUrl: string;
        links: Array<{
            name: string;
            path: string;
            external?: boolean;
            color?: string;
        }>;
    }
}

export const profilConfig: ProfileConfig = {
    profile: {
        name: "Sophie",
        username: "sophie",
        title: "Full stack developpeuse",
        description: "Développeuse web fullstack en recherche de nouveau défi !",
        bio: "full bullshit",
        image: "",
        website: "http://localhost:3000/",
        location: "Lyon, France",
        email: "auvergne.sophie@gmail.com",
        currentFocus: [
            "Créer un portfolio avec NextJS et tailwindCSS",
            "Projet personnel : création d'une marketplace pour les artisans et créateurs afin de mettre en avant leurs créations et leur savoir-faire",
            "Projet personnel : création d'une application web pour la gestion de stock, de commandes et de factures pour les artisans et créateurs"
        ],
        funFact: "je suis également passionée de loisir créatifs : crochet, tricot, broderie, couture..."
    },

    socialLinks: {
        github: "https://github.com/soffos-dev",
        linkedin: "https://www.linkedin.com/in/sophie-auvergne-67272292/",
    },

    skills: {
        language: [
            "PHP", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"
        ],
        framework: [
            "Symfony", "Laravel", "React", "NextJS"
        ],
        tools: [
            "Docker", "Git", "PHPStorm", "Linux"
        ]
    },

    achievements: [
        {
            title: "Developpeuse Fullstack",
            description: "Gérer un projet professionnel du backend au frontend",
            icon: "🔥"
        },
    ],
    projects: {
        featuredRepos: [],
        excludeRepos: [],
        categories: {
            "Web Developpment": ["react-app", "vue-project"]
        }
    },

    schools: [
        {
            title: "Code & Go - Coding Academy et Epitech",
            year: "2018",
            location: "Coding Academy - Lyon",
            description : [
                "Formation destinée à former des personnes souhaitant effectuer une reconversion professionnel " +
                "dans les métiers du développement web.",
                "Cette formation est articulée en trois parties :",
                "- La montée en compétences, où on apprends du C, PHP objet, JS ainsi que des bases de CSS / HTML / SQL",
                "- L'appronfondissement où l'on découvre des frameworks : Symfony, Laravel, la stack MEAN (MongoDB, ExpressJS, Angular, NodeJS",
                "- l'insertion professionnelle en appliquant d'abord une méthologie par projet pour finir sur un stage en entreprise de 6 mois.",
            ]
        },
        {
            title: "Licence professionnelle : Gestion et traitements des eaux et des déchets",
            year: "2011 - 2012",
            location: "Université de Bourgogne - Nevers",
            description: [
                "Formation des futures techniciens qui évolueront dans le domaine du traitement de l’eau et des déchets, en maîtrisant à la\n" +
                "fois les aspects réglementaires, techniques et économiques."
            ]
        },
        {
            title: "DEUG de Physique - Chimie",
            year: "2009 - 2011",
            location: "Université Blaise Pascal - Clermont Ferrand",
            description: [
                ""
            ]
        }
    ],

    jobs: [
        {
            title: "⚙️ Backend developper",
            enterprise: "GAC Technology",
            enterpriseDetails: "Éditeur de logiciel",
            year: "2024 - 2025",
            missions: [
                "Maintenance et amélioration des fonctionnalités existentes",
            ],
            achievements: [
                "Ajouts de champs pour améliorer la commande et le suivie de commande d'un véhicule, adaptation " +
                "des écrans pour gérer ces champs"
            ],
            stack: [
                "PHP 8", "Zend framework 1", "MySQL", "ElasticSearch", "Docker"
            ],
        },
        {
            title: "⚙️ Backend developper",
            enterprise: "ZOL",
            enterpriseDetails: "Agence Web",
            year: "2024",
            missions: [
                "Maintenance et amélioration des fonctionnalités existentes",
            ],
            achievements: [
                "Intégration de la nouvelle maquette de facture",
                "Adaptation du backend pour gérer les informations supplémentaires",
                "Ajout d'une libraire pour générer des pdf"
            ],
            stack: [
                "symfony 6", "React", "MySQL", "Docker"
            ],
        },
        {
            title: "🌐 Full Stack developper",
            enterprise: "France Barter - Korp",
            enterpriseDetails: "Plateforme d'ecommerce permettant du troc B2B",
            year: "2018 - 2023",
            missions: [
                "Maintenance et amélioration des fonctionnalités existentes",
                "Design et développement de nouvelles fonctionnalités",
                "Gestion des différents freelances intervenant sur le projet",
                "Récupérer et comprendre le besoin client",
                "Transmission des connaissances"
            ],
            achievements: [
                "Intégration de l'API Sellsy afin d'automatiser la génération et la gestion des factures clients",
                "Développement de marque blanche",
                "Refonte de la partie client de la plateforme : création d'une API REST côté backend et passage " +
                "du frontend sous NextJS"
            ],
            stack: [
                "Symfony 3.4", "NextJS", "MariaDB", "RabbitMQ", "ElasticSearch", "Docker"
            ],
        },
    ],


    navigation: {
        brandName: "sophie.dev",
        brandUrl: "/",
        links: [
           /* {name: "projets", path: "/projects", color: "text-red-400"},*/
            {name: "profile", path: "/profile", color: "text-orange-400"},
            {name: "expériences", path: "/xp", color: "text-purple-400"}
        ]
    }

}