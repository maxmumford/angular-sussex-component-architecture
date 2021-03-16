export interface Company {
    bannerUrl: string;
    videoUrl: string;
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
