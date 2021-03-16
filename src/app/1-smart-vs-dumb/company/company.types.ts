export interface Company {
    backgroundImageUrl: string;
    youtubeUrl: any;
    name: string;
    tagline: string;
    aboutUs: string;
    features: string;
    market: string;
    teamMembers: {
        name: string;
        imageUrl: string;
    }[];
}
